import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ navigation, children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    navigation.replace("Login");
    return null;
  }

  return children;
};

export default ProtectedRoute;
