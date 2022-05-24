import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogAuth = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div className="form-control">
      <button onClick={() => signInWithGoogle()} className="btn-wide btn btn-outline">
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogAuth;
