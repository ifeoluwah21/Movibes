import { useContext } from "react";
import { AuthContext } from "./AuthContextValue";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
