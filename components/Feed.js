import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import { useSession } from "next-auth/react";
function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto !w-screen ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="md:col-span-2 lg:col-span-2">
        <div>
          <Stories />
          <Posts />
        </div>
      </section>

      {session && (
        <section>
          <div className="fixed hidden lg:inline-block">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}

      <section className=" mb-14">
        <Footer />
      </section>
    </main>
  );
}

export default Feed;
