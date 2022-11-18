export default function Custom404() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex justify-center gap-4 md:gap-10 m-0 px-1 py-0">
        <h1 className="text-2xl font-semibold align-top leading-10">404</h1>
        <div className="min-h-max w-px bg-neutral-200 dark:bg-neutral-700"></div>
        <h2 className="leading-10 m-0 p-0">This page could not be found</h2>
      </div>
    </div>
  );
}
