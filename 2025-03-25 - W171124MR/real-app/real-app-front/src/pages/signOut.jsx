import { useEffect } from "react";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router";

function SignOut() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return null;
}

export default SignOut;

