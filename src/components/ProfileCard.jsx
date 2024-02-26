import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useUser } from "../hooks/useUser";
import { Link } from "react-router-dom";

export const ProfileCard = ({ containerClass, imageClass }) => {
  const { user } = useContext(UserContext);
  const userInfo = useUser(user);

  return (
    <>
      {!userInfo ? (
        <p>Loading...</p>
      ) : (
        <Link to={`/profile/${user}`}>
          <div id={containerClass}>
            <img src={userInfo.avatar_url} id={imageClass} />
            {containerClass === "profileContainer" ? (
              <h3>{userInfo.kudos}</h3>
            ) : (
              <p>{userInfo.kudos}</p>
            )}
          </div>
        </Link>
      )}
    </>
  );
};
