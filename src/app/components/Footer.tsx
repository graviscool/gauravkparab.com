import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer({
  page,
}: {
  page: "home" | "contact" | "resume";
}) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      setIsDark(savedMode ? JSON.parse(savedMode) : true);
    }
  }, []);

  return (
    <footer
      className={`mt-auto py-6 transition-colors duration-200 ${
        isDark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-1 md:mb-0">
            <Link
              href="/"
              className={`text-lg font-semibold transition-colors text-decoration-none ${
                isDark ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              Gaurav Parab
            </Link>
          </div>
          <nav className="mb-1 md:mb-0">
            <ul className="flex space-x-4">
              <li hidden={page === "home"}>
                <Link
                  href="/"
                  className={`transition-colors ${
                    isDark ? "hover:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li hidden={page === "contact"}>
                <Link
                  href="/contact"
                  className={`transition-colors ${
                    isDark ? "hover:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li hidden={page === "resume"}>
                <Link
                  href="/resume"
                  className={`transition-colors ${
                    isDark ? "hover:text-blue-400" : "hover:text-blue-600"
                  }`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <a
              href="#top"
              className={`flex items-center text-sm transition-colors ${
                isDark ? "hover:text-blue-400" : "hover:text-blue-600"
              }`}
            >
              Back to Top <ArrowUp size={16} className="ml-1" />
            </a>
          </div>
        </div>
        <div
          className={`mt-6 pt-6 text-center text-sm ${
            isDark ? "border-t border-gray-700" : "border-t border-gray-300"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} Gaurav Parab</p>
        </div>
      </div>
    </footer>
  );
}
