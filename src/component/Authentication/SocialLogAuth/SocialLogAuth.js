import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";
  if (user) {
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
