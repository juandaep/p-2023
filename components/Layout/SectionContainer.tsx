import { ReactNode } from "react";
import { classNames } from "utils/classnames";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className={classNames("mx-auto max-w-7xl px-4", "md:px-6")}>
      {children}
    </div>
  );
}
