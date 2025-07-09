import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { AuthContext } from "./AuthContextValue";
import LogoSpinner from "../ui/LogoSpinner";

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  return !loading ? (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  ) : (
    <LogoSpinner />
  );
};

export default AuthProvider;
