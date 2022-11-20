import React, { ReactNode } from "react";

import { Epilogue } from "@next/font/google";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import SectionContainer from "./SectionContainer";

interface Props {
  children: ReactNode;
}

const epilogue = Epilogue({ subsets: ["latin"] });

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Navbar />
        <main className={epilogue.className}>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
