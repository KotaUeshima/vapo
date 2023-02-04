import React, { useState } from "react";
import Post from "./Post";
import SubFeed from "./SubFeed";

function Home() {
  const [show, setShow] = useState(false);

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
        <div className="mt-10 absolute left-[2vw] h-[80vh] w-[23vw] bg-gray-50 rounded-md"></div>
      </div>
      <div className="h-full w-[50vw] flex flex-col overflow-y-scroll">
        <div className="mt-10 flex flex-col space-y-4">
          {example.map(({ id }) => {
            return <Post key={id} show={show} setShow={setShow} />;
          })}
        </div>
      </div>
      <div className="h-full w-[25vw]"></div>
      <SubFeed show={show} />
    </div>
  );
}

export default Home;
