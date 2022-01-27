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
    overflow: 'hidden'
  };

  useEffect(() => {
    const seed = Math.floor(Math.random() * 1000);
    setSeed(seed);
  }, []);

  return !img ? (
    <div>
      <div className="story_item border-2 border-red-500 hover:scale-110 transition transform duration-200 ease-out"
      style={style}>
        
        <div
          className="w-full h-full rounded-full border-2 border-white cursor-pointer "
        >
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
    <div>
      <div className="story_item border-2 border-red-500 hover:scale-110 transition transform duration-200 ease-out">
        <div
          className="w-full h-full rounded-full border-2 border-white cursor-pointer"
          style={style_user}
        >
          <img
            src={img}
            alt="Profile Pic"
            aria-hidden
            className="hidden"
          />
        </div>
      </div>
      <p className="text-sm w-[4.5rem] pt-1 truncate text-center">You</p>
    </div>
  );
}

export default Story;
