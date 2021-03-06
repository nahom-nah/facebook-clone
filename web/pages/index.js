import { UserIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import {
  MailIcon,
  LockClosedIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutation";

export default function Home() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [login, { loading, data, error }] = useMutation(LOGIN_USER, {
    variables: { loginInput: { email: form.email, password: form.password } },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    console.log(data);
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
              Sign In
            </div>
            <div className="px-4 ">
              <div className="flex items-center bg-gray-200 px-2 py-2 rounded">
                <MailIcon className="h-6 text-gray-800" />
                <input
                  type="text"
                  name="email"
                  placeholder="example@email.com"
                  onChange={handleChange}
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
              <button
                onClick={handleSubmit}
                className="py-2 text-center w-full bg-blue-600 rounded-md mt-6 font-semibold text-white"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-gray-200 py-4 text-gray-700 rounded-b-md ">
          <div className="text-center text-sm font-semibold">
            don't have an account?{" "}
            <Link href="/register">
              <span className="text-blue-600 cursor-pointer">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
