import { SEOPage } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { classNames } from "utils/classnames";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

const projects = () => {
  return (
    <>
      <SEOPage
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div
        className={classNames(
          "fade-in divide-y-2 divide-neutral-200",
          "dark:divide-neutral-800"
        )}
      >
        <div className={classNames("space-y-2 pt-6 pb-8", "md:space-y-5")}>
          <h1
            className={classNames(
              "text-3xl font-medium leading-9 tracking-tight text-neutral-900",
              "sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
              "dark:text-neutral-100"
            )}
          >
            Projects
          </h1>
        </div>
        <div className="flex min-h-max flex-col justify-center px-6 py-10 md:px-10 text-2xl text-emerald-600 dark:text-emerald-500">
          Currently this page is on development 😊
          
        </div>
      </div>
    </>
  );
};

export default projects;
