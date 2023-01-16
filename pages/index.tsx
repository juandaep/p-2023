import { SEOPage } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { classNames } from "utils/classnames";

const Home = () => {
  return (
    <>
      <SEOPage
        title={siteMetadata.author}
        description={siteMetadata.description}
      />
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
          className={classNames(
            "text-lg text-neutral-500",
            "dark:text-neutral-400",
            "md:text-xl"
          )}
        >
          An UI/UX Designer who love audio engineering
        </p>
      </div>
    </>
  );
};

export default Home;
