import { ReactNode } from "react";
import SectionContainer from "./SectionContainer";

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <main className="mb-auto">{children}</main>
      
    </SectionContainer>
  );
};

export default LayoutWrapper;
