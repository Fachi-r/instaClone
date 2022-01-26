import { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-4 px-5 pt-2 pb-2 md:pb-3 bg-white m-0 md:mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-hide md:scrollbar-thin md:scrollbar-thumb-black">
      {session && (
        <Story
          key={session.user.username}
          img={session.user.image}
        />
      )}
      {suggestions.map((profile) => (
        <Story key={profile.username} username={profile.username} />
      ))}
    </div>
  );
}

export default Stories;
