import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle, signin } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignIn = (data) => {
    console.log(data);
    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User login successfully");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const gandleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="flex justify-center bg-blue-400 items-center pt-8">
      <div className="flex flex-col max-w-md p-6 bg-white  border-2 border-blue-400 text-gray-900">
        <div className="mb-10 text-center">
          <h1 className="my-3 text-4xl text-blue-400 pt-10 font-bold">LOGIN</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleSignIn)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-400 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <span className="text-red-500 text-sm" role="alert">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charecter or more",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-blue-400 text-gray-900"
              />
              {errors.password && (
                <span className="text-red-500 text-sm" role="alert">
                  {errors.password?.message}
                </span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="loginNav">
              <input
                type="submit"
                value="LOGIN"
                className="loginNav"
                placeholder="LOGIN}"
              />
            </div>
          </div>
          {/* <div className="">
            <div className="loginNav">
              <p>LOGIN</p>
            </div>
          </div> */}
        </form>
        {/* <div className="space-y-1">
          <button className="text-xs mt-6 hover:underline text-gray-400">
            Forgot password?
          </button>
        </div> */}
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="regiNav">
            <button
              onClick={gandleGoogleSignIn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 text-white fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link to="/register" className="hover:underline  text-gray-600">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
