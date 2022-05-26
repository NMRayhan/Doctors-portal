import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import SocialLogAuth from "../SocialLogAuth/SocialLogAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user,loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";

  if (user || token) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log(user);
  };

  if (updating || loading) {
    return (
      <div className="min-h-screen">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    toast(error.message);
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="card w-96 flex-shrink-0 items-center shadow-2xl bg-base-100">
            <h3 className="card-title mt-7 text-accent uppercase">
              Registration
            </h3>
            <div className="card-body">
              <div className="flex flex-col border-opacity-50">
                <div className="grid card rounded place-items-center">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="User Name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "User Name must",
                          },
                        })}
                        className="input input-bordered"
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.name?.message}
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="User Email"
                        {...register("email", {
                          required: {
                            pattern: /[A-Za-z]{3}/,
                            value: true,
                            message: "Provide valid email",
                          },
                        })}
                        className="input input-bordered"
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.email?.message}
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="User Password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Provide user Password",
                          },
                        })}
                        className="input input-bordered"
                      />
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.password?.message}
                        </span>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="w-full max-w-xs btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary"
                      >
                        Registration
                      </button>
                      <h4 className="mt-2">
                        I have a doctor's portal account?{" "}
                        <span
                          className="text-base text-primary label-text-alt link link-hover"
                          onClick={() => navigate("/login")}
                        >
                          Login
                        </span>
                      </h4>
                    </div>
                  </form>
                </div>
                <div className="divider">OR</div>
                <div className="grid card rounded place-items-center">
                  <SocialLogAuth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
