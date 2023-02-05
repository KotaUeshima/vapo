import React, { useState } from "react";

function SubmitPost() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setText("");
    setShow(false);
  }

  return (
    <div className="h-[7vh] mt-10 mx-10 py-6 px-4 bg-white rounded-md flex justify-center items-center">
      <div className="flex flex-row space-x-3">
        <input
          onClick={() => setShow(true)}
          className="border-2 focus:outline-none rounded-md"
        />
        <button className="text-sm font-thin">Share Your Thoughts</button>
      </div>

      {show && (
        <div className="fixed inset-0 z-20 bg-gray-300 bg-opacity-75 transition-opacity flex justify-center items-center">
          <div className="h-[30vh] w-[40vw] bg-white rounded-md">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col space-y-6 p-10"
            >
              <textarea
                placeholder="Share your thougths for the day!"
                className="focus:outline-none py-2 px-2 border-2 border-primary rounded-md"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button className="w-full py-2 rounded-md bg-primary text-white">
                Submit Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitPost;
