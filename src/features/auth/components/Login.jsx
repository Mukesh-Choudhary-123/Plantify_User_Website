import React, { useState } from "react";
import Logo from "../../../assets/image/favicon.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../api/authSlice";

function Login() {

  const dispatch = useDispatch();

  const [login, { isLoading ,isError }] = useLoginMutation();
  console.log("isLoading :- ", isLoading);
  console.log("isError :- ", isError)
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg("Please fill in both fields.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    const userData = await login({ email, password }).unwrap();
     
    console.log("userData :- ",userData)
    setEmail("");
    setPassword("");
    setErrorMsg("");

    dispatch(setCredentials({ user: userData.user, token: userData.token }));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Your Company" src={Logo} className="mx-auto h-10 w-auto" />
        <h2 className="text-center text-2xl font-bold tracking-wider text-[#002140] font-[Philosopher]">
          Plantify
        </h2>
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login
        </h2>
        <p className="text-center">
          Grow Green, Shop Smart – Welcome to Plantify!
        </p>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#0D986A] sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#0D986A] sm:text-sm"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-gray-600" />
                ) : (
                  <FaEyeSlash className="text-gray-600" />
                )}
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-[#0D986A] px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-[#56D1A7] focus:outline-2 focus:outline-offset-2 focus:outline-[#0D986A]"
            >
              Log In
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          New on Plantify?{" "}
          <a
            href="/signup"
            className="font-semibold text-[#0D986A] hover:text-[#56D1A7]"
          >
            sign-up
          </a>{" "}
          now!
        </p>
      </div>
    </div>
  );
}

export default Login;
