import { FC, Fragment } from "react";
import { MixingCard } from "../Card";

const TabMixing: FC<{}> = () => {
  return (
    <Fragment>
      <MixingCard
            url="https://soundcloud.com/juanda-ep/paramore-thats-what-you-get-mix-cover?si=c4e2d5f5ea2b42b7bdde0a03b1e99fc5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            title="Paramore - Thats What You Get"
            description="This is a testing for card components"
          />
    </Fragment>
  );
};

export default TabMixing;
