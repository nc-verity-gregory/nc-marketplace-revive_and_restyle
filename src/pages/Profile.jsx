import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useUser } from "../hooks/useUser";
import { Link } from "react-router-dom";
import { ProfileCard } from "../components/ProfileCard";
export const Profile = () => {
  const { user } = useContext(UserContext);
  const userInfo = useUser(user);
  if (userInfo) {
    console.log(userInfo);
  }
  return (
    <main>
      <h1>Welcome {user}</h1>
      <ProfileCard
        containerClass="profileContainer"
        imageClass="profileImage"
      />
    </main>
  );
};
