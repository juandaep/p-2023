import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { classNames } from "utils/classnames";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  //Ater mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={classNames('ml-1 mr-1 h-9 w-9 rounded-lg p-1 transition-colors', 'focus:ring-4 focus:ring-gray-300 focus:dark:ring-gray-600', 'md:ml-4')}
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-600 dark:text-gray-100"
      >
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
          <SunIcon className="fade-in text-xl" />
        ) : (
          <MoonIcon className="fade-in text-xl" />
        )}
      </svg>
    </button>
  );
};
