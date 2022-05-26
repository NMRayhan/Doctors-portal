import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";

const SocialLogAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";
  
  if (user || token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-control">
      <button
        onClick={() => signInWithGoogle()}
        className="btn-wide btn btn-outline"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogAuth;
