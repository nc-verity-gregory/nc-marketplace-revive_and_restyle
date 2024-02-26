import { useEffect, useState } from "react";
import { getUser } from "../apiCalls";

export const useUser = (username) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser(username).then((userData) => {
      setUser(userData);
    });
  }, []);
  return user;
};
