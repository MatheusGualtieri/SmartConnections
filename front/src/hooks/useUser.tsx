import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";

export const useUser = () => {
  const userContext = useContext(UserContext);
  return userContext;
};
