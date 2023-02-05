import React, { useState } from "react";
import Post from "./Post";
import Profile from "./Profile";
import SubFeed from "./SubFeed";
import SubmitPost from "./SubmitPost";

function Home() {
  const [show, setShow] = useState(0);

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

  return (
    <div className="h-[90vh] w-screen bg-primary flex flex-row">
      <div className="h-full w-[25vw]">
        <Profile />
      </div>
      <div className="h-full w-[50vw] flex flex-col overflow-y-scroll">
        <SubmitPost />
        <div className="mt-10 flex flex-col space-y-4">
          {example.map(({ id }) => {
            return <Post key={id} id={id} show={show} setShow={setShow} />;
          })}
        </div>
      </div>
      <div className="h-full w-[25vw]"></div>
      <SubFeed show={show} />
    </div>
  );
}

export default Home;
