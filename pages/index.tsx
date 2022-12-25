import { classNames } from "utils/classnames"

export default function Home() {
  return (
    <div className={classNames('flex flex-1 flex-col justify-center px-6 py-10', 'md:px-10')}>
      <h1 className={classNames('flex text-2xl font-medium text-neutral-900', 'md:text-4xl', 'dark:text-neutral-100')}>
        Hello <span className="animate-waving-hand">👋</span>, I am
      </h1>
      <h1 className={classNames('text-3xl font-semibold text-emerald-600', 'md:text-5xl md:leading-relaxed', 'dark:text-emerald-500')}>
        Juanda Esa Putra
      </h1>
      <p className={classNames('my-2 text-lg text-neutral-600', 'md:text-xl', 'dark:text-neutral-400')}>
        UI/UX Designer
      </p>
    </div>
  );
}
