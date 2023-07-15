import { SEOPage } from "@/components/SEO";
import TabCoding from "@/components/Tabs/TabCoding";
import TabDesign from "@/components/Tabs/TabDesign";
import TabMixing from "@/components/Tabs/TabMixing";
import Tabs from "@/components/Tabs/Tabs";
import siteMetadata from "@/data/siteMetadata";
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
    label: "Design",
    index: 1,
    Component: TabDesign,
  },
  {
    label: "Coding",
    index: 2,
    Component: TabCoding,
  },
  {
    label: "Mixing",
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
          "pt-4 pb-6 border-b border-neutral-300",
          "md:pt-6 pb-6",
          "dark:border-neutral-700"
        )}
      >
        <h1
          className={classNames(
            "text-3xl font-medium leading-9 tracking-tight text-neutral-900",
            "md:text-5xl md:leading-14",
            "dark:text-neutral-100"
          )}
        >
          Projects
        </h1>
      </div>
      <div className={classNames("py-8 space-y-6 flex flex-col gap-8", "")}>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </>
  );
};

export default projects;
