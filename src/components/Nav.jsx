import mobileLogo from "../assets/Logo.png";
import desktopLogo from "../assets/Logo_large.png";
import { ProfileCard } from "./ProfileCard";
import { useWindowWidth } from "../hooks/useWindowWitdh";
import { Link } from "react-router-dom";
export const Nav = () => {
  const width = useWindowWidth();

  return (
    <nav id="nav">
      <Link to="/">
        <img src={width < 770 ? mobileLogo : desktopLogo} id="navLogo" />
      </Link>
      <ProfileCard
        containerClass="navProfileContainer"
        imageClass="navProfileImage"
      />
    </nav>
  );
};
