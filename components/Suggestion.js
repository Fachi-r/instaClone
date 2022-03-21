import { useEffect, useState } from "react";

function Suggestion({ username, company }) {
  const [seed, setSeed] = useState();

  useEffect(() => {
    const seed = Math.floor(Math.random() * 1000);
    setSeed(seed);
  }, []);

  return (
    <div className="flex items-center justify-between mt-3">
      <img
        src={`https://i.pravatar.cc/${seed}`}
        // src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        alt="Profile Pic"
        className="w-10 h-10 rounded-full border p-0.5"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <h3 className="text-xs text-gray-400">Works at {company}</h3>
      </div>

      <button className="text-xs text-blue-400 font-semibold">Follow</button>
    </div>
  );
}

export default Suggestion;
