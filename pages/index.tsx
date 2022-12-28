import { classNames } from "utils/classnames";

export default function Home() {
  return (
    <div
      className={classNames(
        "flex gap-1 banner flex-col justify-center px-6 py-10",
        "md:px-10 md:gap-3"
      )}
    >
      <h1
        className={classNames(
          "text-2xl text-neutral-900",
          "md:text-4xl",
          "dark:text-white"
        )}
      >
        Hello <span className="animate-waving-hand">👋</span>, I am
      </h1>
      <h1
        className={classNames(
          "text-3xl font-semibold text-emerald-600",
          "md:text-5xl",
          "dark:text-emerald-500"
        )}
      >
        Juanda Esa Putra
      </h1>
      <p
        className="text-xl text-neutral-400"
      >
        UI/UX Designer
      </p>
    </div>
  );
}
