import Button from "@/components/Buttons";
import { SEOPage } from "@/components/SEO";
import TabCoding from "@/components/Tabs/TabCoding";
import TabDesign from "@/components/Tabs/TabDesign";
import TabMixing from "@/components/Tabs/TabMixing";
import Tabs from "@/components/Tabs/Tabs";
import siteMetadata from "@/data/siteMetadata";
import {
  ArrowDownCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { classNames } from "utils/classnames";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

//Tabs Array
const tabs: TabsType = [
  {
    label: "Tab Coding",
    index: 1,
    Component: TabCoding,
  },
  {
    label: "Tab Design",
    index: 2,
    Component: TabDesign,
  },
  {
    label: "Tab Mixing",
    index: 3,
    Component: TabMixing,
  },
];

const projects = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
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
          <Button
            bgColor="bg-emerald-600"
            textColor="text-white"
            onClick={() => console.log("you clicked on the pink")}
            children="i'm a pink circle"
            leftIcon={<ArrowDownCircleIcon className="w-5 h-5" />}
            rightIcon={<ArrowDownTrayIcon className="w-5 h-5" />}
          />
        </div>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </>
  );
};

export default projects;
