import { ReactNode } from "react";
import { classNames } from "utils/classnames";
import Navbar from "../navbar/Navbar";
import { Epilogue } from "@next/font/google";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}
const epilogue = Epilogue({ subsets: ["latin"] });

function SectionContainer({ children }: Props) {
  return (
    <div className={`${epilogue.className}`}>
      <Navbar />
      <div className={classNames("mx-auto max-w-7xl px-4 pt-32 flex flex-col min-h-screen", "sm:px-6 md:px-8 xl:px-0")}>
        {children}
      <Footer />
      </div>
      </div>
  );
}

export default SectionContainer;
