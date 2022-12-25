import Image from "next/image";
import profileLight from "../public/profile-light.png";
import profileDark from "../public/profile-dark.png";

export const ProfileImgLight = () => {
  return <Image src={profileLight} alt="profile-light" priority />;
};

export const ProfileImgDark = () => {
  return <Image src={profileDark} alt="profile-dark" priority />;
};
