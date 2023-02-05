// import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Signup() {
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

  console.log(userObj);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/create_user", {
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
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
        className="flex flex-col justify-center items-center"
      >
        <h3 className="text-5xl mb-20 mt-20">Quit vaping now:</h3>
        <div class="md:w-1/3 md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            name="username"
            value={userObj.username}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter your email..."
          />
        </div>
        <div class="md:w-1/3 md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="Enter your password..."
            name="password"
            value={userObj.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        {/* <div class="md:w-1/3 md:flex md:items-center mb-6">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="Confirm your password..."
          />
        </div> */}
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign Up
        </button>
      </form>
      <div className="flex justify-center items-center mt-5">
        <span>
          Already a member?{" "}
          <Link to="/" className="underline">
            Log In
          </Link>
        </span>
      </div>
    </motion.div>
  );
}

export default Signup;
