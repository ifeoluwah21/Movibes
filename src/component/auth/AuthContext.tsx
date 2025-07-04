import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "./AuthContextValue";
import { Navigate } from "@tanstack/react-router";

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("state changed");
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  console.log(currentUser);
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
