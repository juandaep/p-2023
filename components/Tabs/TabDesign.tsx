import { FC, Fragment } from "react";
import { classNames } from "utils/classnames";
import Button from "../Buttons";

const TabDesign: FC<{}> = () => {
  return (
    <Fragment>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100 mb-6",
          "md:max-w-2xl",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
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
            <h4
              className={classNames(
                "text-xl font-medium text-neutral-900",
                "dark:text-white"
              )}
            >
              Title
            </h4>
          </a>
          <p
            className={classNames(
              "text-neutral-600 text-base text-justify",
              "dark:text-neutral-400"
            )}
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <Button
            bgColor="transparent"
            onClick={() => console.log("test")}
            textColor="bg-emerald-600"
            children="readmore"
          />
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100 mb-6",
          "md:max-w-2xl",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
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
            <h4
              className={classNames(
                "text-xl font-medium text-neutral-900",
                "dark:text-white"
              )}
            >
              Title
            </h4>
          </a>
          <p
            className={classNames(
              "text-neutral-600 text-base text-justify",
              "dark:text-neutral-400"
            )}
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <Button
            bgColor="transparent"
            onClick={() => console.log("test")}
            textColor="bg-emerald-600"
            children="readmore"
          />
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100 mb-6",
          "md:max-w-2xl",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
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
            <h4
              className={classNames(
                "text-xl font-medium text-neutral-900",
                "dark:text-white"
              )}
            >
              Title
            </h4>
          </a>
          <p
            className={classNames(
              "text-neutral-600 text-base text-justify",
              "dark:text-neutral-400"
            )}
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <Button
            bgColor="transparent"
            onClick={() => console.log("test")}
            textColor="bg-emerald-600"
            children="readmore"
          />
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100 mb-6",
          "md:max-w-2xl",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
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
            <h4
              className={classNames(
                "text-xl font-medium text-neutral-900",
                "dark:text-white"
              )}
            >
              Title
            </h4>
          </a>
          <p
            className={classNames(
              "text-neutral-600 text-base text-justify",
              "dark:text-neutral-400"
            )}
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <Button
            bgColor="transparent"
            onClick={() => console.log("test")}
            textColor="bg-emerald-600"
            children="readmore"
          />
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100 mb-6",
          "md:max-w-2xl",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
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
            <h4
              className={classNames(
                "text-xl font-medium text-neutral-900",
                "dark:text-white"
              )}
            >
              Title
            </h4>
          </a>
          <p
            className={classNames(
              "text-neutral-600 text-base text-justify",
              "dark:text-neutral-400"
            )}
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <Button
            bgColor="transparent"
            onClick={() => console.log("test")}
            textColor="bg-emerald-600"
            children="readmore"
          />
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col min-w-0 max-w-md break-words rounded-lg bg-white shadow-md border box-border border-neutral-100 mb-6",
          "md:max-w-2xl",
          "dark:bg-neutral-800 dark:border dark:box-border dark:border-neutral-600"
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
            <h4
              className={classNames(
                "text-xl font-medium text-neutral-900",
                "dark:text-white"
              )}
            >
              Title
            </h4>
          </a>
          <p
            className={classNames(
              "text-neutral-600 text-base text-justify",
              "dark:text-neutral-400"
            )}
          >
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <Button
            bgColor="transparent"
            onClick={() => console.log("test")}
            textColor="bg-emerald-600"
            children="readmore"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TabDesign;
