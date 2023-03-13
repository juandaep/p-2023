import { FC, Fragment } from "react";
import { Card } from "../Card";

const TabDesign: FC<{}> = () => {
  return (
    <Fragment>
      <Card
        img="https://images.unsplash.com/photo-1671523435843-e3cd426c24e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Title"
        description="This is a testing for card components.
      "
        btnChildren="Learn more"
        onClick={() => console.log("Card clicked")}
      />
    </Fragment>
  );
};

export default TabDesign;
