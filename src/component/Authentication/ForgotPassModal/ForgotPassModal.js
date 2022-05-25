import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ForgotPassModal = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleForgotPass = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
  };

  if (error) {
    return (
      <div>
        <span className="text-red-500 text-xl text-center">{error?.message}</span>
      </div>
    );
  }

  if (sending) {
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
      <input type="checkbox" id="forgot-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgot-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Forgot Password</h3>
          <form className="py-4" onSubmit={handleForgotPass}>
            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <button className="btn btn-ghost shadow-md mt-5" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassModal;
