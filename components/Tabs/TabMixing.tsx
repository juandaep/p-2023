import React, { FC, Fragment } from "react";
import ReactPlayer from "react-player/lazy";
import { classNames } from "utils/classnames";

const divStyle = {
  display: "flex",
  width: "50%",
};

const TabMixing: FC<{}> = () => {
  return (
    <Fragment>
      <div
        className={classNames(
          "flex flex-col rounded-lg bg-white shadow-md border box-border border-neutral-200 mb-6",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
        )}
      >
        <div className={classNames("p-4 py-4", "")}>
          <ReactPlayer
            url="https://soundcloud.com/juanda-ep/paramore-thats-what-you-get-mix-cover?si=c4e2d5f5ea2b42b7bdde0a03b1e99fc5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TabMixing;
