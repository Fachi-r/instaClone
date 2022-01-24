import { useEffect, useState } from "react";

function Story({ username, img }) {
  const [seed, setSeed] = useState();

  useEffect(() => {
    const seed = Math.floor(Math.random() * 1000);
    setSeed(seed);
  }, []);

  return !img ? (
    <div>
      <img
        src={`https://i.pravatar.cc/${seed}`}
        // src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        alt="Profile Pic"
        className="h-14 w-14 p-[1.5px] rounded-full border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  ) : (
    <div>
      <img
        src={img}
        // src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        alt="Profile Pic"
        className="h-14 w-14 p-[1.5px] rounded-full border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">You</p>
    </div>
  );
}

export default Story;
