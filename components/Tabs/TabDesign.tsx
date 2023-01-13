import React, { FC, Fragment } from "react";
import { classNames } from "utils/classnames";

const TabDesign: FC<{}> = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-14">
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100",
          "md:max-w-2xl", "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
        )}
      >
        <div className={classNames("mx-4 -mt-6", "md:mx-6")}>
          <a href="https://www.material-tailwind.com">
            <img
              className="w-auto rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="tailwind-card-image"
            />
          </a>
        </div>
        <div className={classNames("flex-auto p-4 gap-1", "md:p-6")}>
        <a href="#">
          <h4 className={classNames("text-xl font-medium text-neutral-900", "dark:text-white")}>Title</h4>
        </a>
        <p className={classNames("text-neutral-600 text-justify", "dark:text-neutral-400")}>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.</p>
        <button className="button button-pink" data-ripple-light="true">Read More</button>
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-lg",
          "md:max-w-2xl"
        )}
      >
        <div className="mx-4 -mt-6">
          <a href="https://www.material-tailwind.com" blur-shadow-image="true">
            <img
              className="w-auto rounded-lg"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="tailwind-card-image"
            />
          </a>
        </div>
        <div className="flex-auto p-5">
        <a href="#">
          <h4 className="font-semibold">Material Design 3</h4>
        </a>
        <p className="opcacity-60 mb-4">The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.</p>
        <button className="button button-pink" data-ripple-light="true">Read More</button>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default TabDesign;
