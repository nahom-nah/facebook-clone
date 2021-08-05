import { UserIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import {
  MailIcon,
  LockClosedIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "./../graphql/mutation";
export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [register, { loading, data, error }] = useMutation(REGISTER_USER, {
    variables: {
      registerInput: {
        ...form,
      },
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };
  const showPasshandle = (e) => {
    setShowPass(!showPass);
  };
  return (
    <div
      className="h-screen flex justify-center items-center bg-fb-bg"
      style={{ backgroundImage: "url(facebook.jpg)", backgroundSize: "cover" }}
    >
      <div className="bg-white rounded-md ">
        <div className="px-4 py-4 flext justify-center items-center w-80">
          <div>
            <div className="flex justify-center mt-4">
              <div className="bg-blue-500 px-2 py-2  rounded-full">
                <UserIcon className="h-10 text-white" />
              </div>
            </div>{" "}
            <div className="text-2xl font-semibold text-center my-4">
              Sign Up
            </div>
            <div className="px-4 ">
              <div className="flex items-center bg-gray-200 px-2 py-2 rounded">
                <UserIcon className="h-6 text-gray-800" />
                <input
                  type="text"
                  placeholder="John doe"
                  name="username"
                  onChange={handleChange}
                  className="block outline-none bg-gray-200 ml-2 rounded-md   w-full  "
                />
              </div>
              <div className="flex mt-4 items-center bg-gray-200 px-2 py-2 rounded">
                <MailIcon className="h-6 text-gray-800" />
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="block outline-none bg-gray-200 ml-2 rounded-md   w-full  "
                />
              </div>

              <div className="flex mt-4  items-center bg-gray-200 px-2 py-2 rounded">
                <LockClosedIcon className="h-6 text-gray-800" />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  className="block outline-none bg-gray-200 ml-2 rounded-md   w-full  "
                />
                {!showPass ? (
                  <EyeOffIcon
                    className="h-6 text-gray-800 cursor-pointer"
                    onClick={showPasshandle}
                  />
                ) : (
                  <EyeIcon
                    className="h-6 text-gray-800 cursor-pointer"
                    onClick={showPasshandle}
                  />
                )}
              </div>
              <div className="flex mt-4  items-center bg-gray-200 px-2 py-2 rounded">
                <LockClosedIcon className="h-6 text-gray-800" />
                <input
                  type={showPass ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="confirm password"
                  className="block outline-none bg-gray-200 ml-2 rounded-md   w-full  "
                />
                {!showPass ? (
                  <EyeOffIcon
                    className="h-6 text-gray-800 cursor-pointer"
                    onClick={showPasshandle}
                  />
                ) : (
                  <EyeIcon
                    className="h-6 text-gray-800 cursor-pointer"
                    onClick={showPasshandle}
                  />
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="py-2 text-center w-full bg-blue-600 rounded-md mt-6 font-semibold text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-gray-200 py-4 text-gray-700 rounded-b-md ">
          <div className="text-center text-sm font-semibold">
            already have an account?{" "}
            <Link href="/">
              <span className="text-blue-600 cursor-pointer">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
