export function getStoredDarkMode(defaultValue = true): boolean {
  if (typeof window === "undefined") return defaultValue;

  const savedMode = window.localStorage.getItem("darkMode");
  if (savedMode === null) return defaultValue;

  try {
    const parsed = JSON.parse(savedMode);
    return typeof parsed === "boolean" ? parsed : defaultValue;
  } catch {
    return defaultValue;
  }
}
