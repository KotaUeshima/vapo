import React, { useState, useEffect } from "react";
import URL from "./url";

function SubFeed({ show }) {
  const [reply, setReply] = useState("");

  const [subPosts, setSubPosts] = useState([]);

  useEffect(() => {
    fetch("/get_subpost", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id: show }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubPosts(data);
      });
  }, []);

  const example = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/create_sub_post", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id: show, text: reply }),
    })
      .then((res) => res.json())
      .then((subPost) => {
        console.log(subPost);
      });
    setReply("");
  }

  return (
    <div
      className={`${
        show !== 0 ? "translate-x-0" : "translate-x-[200%]"
      } ease-in-out duration-1000 mt-10 absolute right-[2vw] h-[80vh] w-[23vw] bg-white rounded-md`}
    >
      <div className="h-[60vh] w-full flex flex-col overflow-y-scroll">
        {example.map(({ id }) => {
          return (
            <div
              key={id}
              className="my-3 w-[90%] mx-auto p-4 bg-primary rounded-md flex flex-col space-y-2"
            >
              <div className="flex flex-row space-x-2 items-center justify-end">
                <h3 className="text-xs text-white">Samantha Gray</h3>
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                  alt="Rounded avatar"
                />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-white">Wow awesome, that really sick!</p>
                <p className="mt-2 text-secondary text-xs">8:23 AM</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-[20vh] w-full p-10 flex justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-row space-x-2"
        >
          <textarea className="focus:outline-none border-2 p-2 border-primary rounded-md" />
          <button className="px-4 py-2 bg-secondary rounded-md drop-shadow-lg">
            Reply
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubFeed;
