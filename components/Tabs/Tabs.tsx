import { FC } from "react";
import { classNames } from "utils/classnames";

interface TabsProps {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  className?: string;
}

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 */

const Tabs: FC<TabsProps> = ({ tabs = [], selectedTab = 0, onClick }) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  return (
    <>
      <div role="tablist" className="flex items-start gap-2">
        {tabs.map((tab) => (
          <button
            className={
              selectedTab === tab.index ? "tab-active" : "tab-inactive"
            }
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
        className={classNames(
          "flex flex-col gap-8",
          "md:grid md:grid-cols-3 md:gap-8"
        )}
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </>
  );
};

export default Tabs;
