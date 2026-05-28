import type { MetadataRoute } from "next";
import fs from "fs/promises";
import path from "path";

// Ensure this sitemap runs with Node on Vercel (allows fs usage and fallback handling)
export const runtime = "nodejs";

const BASE_URL = process.env.BASE_URL ?? "https://gauravkparab.com";

async function isDir(p: string) {
  try {
    return (await fs.stat(p)).isDirectory();
  } catch {
    return false;
  }
}

async function collectPages(dir: string, routeBase = ""): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  // If this folder contains a page.* file, register the current route
  const hasPage = entries.some(
    (e) => e.isFile() && /^page\.(js|jsx|ts|tsx)$/.test(e.name),
  );
  if (hasPage) routes.push(routeBase || "/");

  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const name = e.name;
    // Skip special Next.js folders and dynamic segments
    if (
      name === "components" ||
      name === "providers" ||
      name === "api" ||
      name.startsWith("[") ||
      name.startsWith("(") ||
      name.startsWith("_")
    )
      continue;

    const childDir = path.join(dir, name);
    const childRoute = routeBase ? `${routeBase}/${name}` : name;
    routes.push(...(await collectPages(childDir, childRoute)));
  }

  return routes;
}

async function lastModifiedForDir(dir: string): Promise<Date | undefined> {
  try {
    const files = await fs.readdir(dir);
    const mtimes = await Promise.all(
      files.map(async (f) => {
        try {
          const s = await fs.stat(path.join(dir, f));
          return s.mtime;
        } catch {
          return undefined;
        }
      }),
    );
    const valid = mtimes.filter(Boolean) as Date[];
    if (!valid.length) return undefined;
    return valid.reduce((a, b) => (a > b ? a : b));
  } catch {
    return undefined;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), "src", "app");

  // Fallback static entries in case filesystem discovery fails
  const fallback: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resume`, changeFrequency: "monthly", priority: 0.9 },
  ];

  if (!(await isDir(appDir))) return fallback;

  let routes: string[] = [];
  try {
    routes = await collectPages(appDir, "");
  } catch (err) {
    return fallback;
  }

  const items: MetadataRoute.Sitemap = await Promise.all(
    routes.map(async (r) => {
      const routePath = r === "/" ? "/" : `/${r}`;
      const dir = path.join(appDir, r === "/" ? "" : r);
      const lastModified = (await lastModifiedForDir(dir)) ?? new Date();

      // Depth-based priority: homepage = 1.0, deeper pages progressively lower.
      // Formula: priority = max(0.2, 1 - depth * 0.15)
      const depth =
        routePath === "/" ? 0 : routePath.split("/").filter(Boolean).length;
      const priority = routePath === "/" ? 1 : Math.max(0.2, 1 - depth * 0.15);

      return {
        url: `${BASE_URL}${routePath}`,
        lastModified,
        changeFrequency: "monthly",
        priority,
      };
    }),
  );

  return items;
}
