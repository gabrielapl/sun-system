import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
