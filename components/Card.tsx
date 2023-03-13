import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import ReactPlayer from "react-player";
import { classNames } from "utils/classnames";

interface CardProps {
  img: string;
  title: string;
  description: string;
  btnChildren?: React.ReactNode;
  onClick: () => void;
}

const Card: FC<CardProps> = ({
  img,
  title,
  description,
  btnChildren,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-200 mb-6",
        "md:max-w-2xl",
        "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
      )}
    >
      <div className={classNames("mx-4 -mt-6", "md:mx-6")}>
        <img className="w-auto rounded-lg shadow-xl" src={img} />
      </div>
      <div
        className={classNames("flex flex-col flex-auto p-4", "md:p-6")}
      >
        <h4
          className={classNames(
            "text-xl font-medium text-neutral-900",
            "dark:text-white"
          )}
        >
          {title}
        </h4>
        <p
          className={classNames(
            "text-neutral-600 text-base",
            "dark:text-neutral-400"
          )}
        >
          {description}
        </p>
        <button
          onClick={onClick}
          className={classNames(
            "flex gap-2 text-emerald-600",
            "dark:text-emerald-400",
            "hover:text-emerald-700 hover:dark:text-emerald-500"
          )}
        >
          {btnChildren}
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

interface CardMixingProps {
  url: string;
  title: string;
  description: string;
}
const MixingCard: FC<CardMixingProps> = ({ url, title, description }) => {
  return (
    <div
      className={classNames(
        "flex flex-col min-w-0 max-w-md rounded-lg bg-white shadow-md border box-border border-neutral-200 mb-6",
        "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600", "md:max-w-2xl"
      )}
    >
      <div className={classNames("flex flex-col gap-4 p-4 py-4")}>
        <ReactPlayer url={url} width="100%" height="100%" />
        <div
          className="flex flex-col gap-1"
        >
          <h4
            className={classNames(
              "text-xl font-medium text-neutral-900",
              "dark:text-white"
            )}
          >
            {title}
          </h4>
          <p
            className={classNames(
              "text-neutral-600 text-base",
              "dark:text-neutral-400"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Card, MixingCard };
