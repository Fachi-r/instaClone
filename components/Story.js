import { useEffect, useState } from "react";

function Story({ username, img }) {
  const [seed, setSeed] = useState();
  const style = {
    backgroundImage: `url('https://i.pravatar.cc/${seed}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const style_user = {
    backgroundImage: `url('${img}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  useEffect(() => {
    const seed = Math.floor(Math.random() * 1000);
    setSeed(seed);
  }, []);

  return !img ? (
    <div className="mx-2">
      <div
        className="story_item border-2 border-red-500 hover:scale-110 transition transform duration-200 ease-out"
        style={style}
      >
        <div className="w-full h-full rounded-full border-[3px] border-white cursor-pointer hover:scale-110 transition transform duration-200 ease-out -z-10">
          <img
            src={`https://i.pravatar.cc/${seed}`}
            alt="Profile Pic"
            aria-hidden
            className="hidden"
          />
        </div>
      </div>
      <p className="text-sm w-[4.5rem] pt-1 truncate text-center">{username}</p>
    </div>
  ) : (
    <div className="mr-2">
      <div className="story_item border-2 border-red-500 hover:scale-110 transition transform duration-200 ease-out">
        <div
          className="w-full h-full rounded-full border-[3px] border-white cursor-pointer hover:scale-105 transition transform duration-200 ease-out"
          style={style_user}
        >
          <img src={img} alt="Profile Pic" aria-hidden className="hidden" />
        </div>
      </div>
      <p className="text-sm w-full pt-1 truncate text-center">You</p>
    </div>
  );
}

export default Story;
