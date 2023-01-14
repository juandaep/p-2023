import { Epilogue } from "@next/font/google";
import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../navbar/Navbar";
import SectionContainer from "./SectionContainer";

interface Props {
  children: ReactNode;
}

const epilogue = Epilogue({ subsets: ["latin"] });

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div
        className={`${epilogue.className} flex h-screen flex-col justify-between`}
      >
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
