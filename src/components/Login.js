import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [userObj, setUserObj] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setUserObj((userObj) => ({
      ...userObj,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserObj({
          username: "",
          password: "",
        });
      });
  }

  return (
    <motion.div
      intial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      transition={{ duration: 1 }}
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col justify-center items-center"
        action=""
      >
        <h3 className="text-5xl mb-20 mt-20">Welcome back.</h3>
        <div class="md:w-1/3 md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            name="username"
            value={userObj.username}
            placeholder="Enter your email..."
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div class="md:w-1/3 md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            name="password"
            value={userObj.password}
            placeholder="Enter your password..."
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </form>
      <div className="flex justify-center items-center mt-5">
        <span>
          Not a member?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </span>
      </div>
    </motion.div>
  );
}

export default Login;
