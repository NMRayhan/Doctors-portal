/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import ForgotPassModal from "../ForgotPassModal/ForgotPassModal";
import SocialLogAuth from "../SocialLogAuth/SocialLogAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  let loginError;
  if (error) {
    loginError = (
      <span className="label-text-alt text-red-500 text-xl">
        Error: {error.message}
      </span>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="card w-96 flex-shrink-0 items-center shadow-2xl bg-base-100">
            <h3 className="card-title mt-7 text-accent uppercase">Login</h3>
            <div className="card-body">
              <div className="flex flex-col border-opacity-50">
                <div className="grid card rounded place-items-center">
                  <form onSubmit={handleSubmit}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Email"
                        required
                        name="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Your Password"
                        required
                        name="password"
                        className="input input-bordered"
                      />
                      <label className="label">
                        <label
                          htmlFor="forgot-modal"
                          className="label-text-alt link link-hover"
                        >
                          Forgot password?
                        </label>
                      </label>
                    </div>
                    <label className="label">{loginError}</label>
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="w-full max-w-xs btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary"
                      >
                        Login
                      </button>
                      <h4 className="mt-2">
                        New to doctor's portal?{" "}
                        <span
                          className="text-base text-primary label-text-alt link link-hover"
                          onClick={() => navigate("/register")}
                        >
                          Create new account
                        </span>
                      </h4>
                    </div>
                  </form>
                </div>
                <div className="divider">OR</div>
                <div className="grid card rounded place-items-center">
                  <SocialLogAuth />
                </div>
                {<ForgotPassModal />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
