import React from "react";

function SubFeed({ show }) {
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
    <div
      className={`${
        show ? "translate-x-0" : "translate-x-[200%]"
      } ease-in-out duration-1000 mt-10 absolute right-[2vw] h-[80vh] w-[23vw] bg-white rounded-md flex flex-col overflow-y-scroll`}
    >
      {example.map(({ id }) => {
        return (
          <div
            key={id}
            className="mt-3 w-[90%] mx-auto p-4 bg-primary rounded-md flex flex-col space-y-2"
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
  );
}

export default SubFeed;
