import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
