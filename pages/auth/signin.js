import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

// Browser...
function signin({ providers }) {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <img src="https://links.papareact.com/ocw" alt="" className="" />
        <p className="font-xs italic text-center px-2">
          This is not a REAL app. It's built just for fun. Feel free to explore 😄
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-red-400 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Server Side Render
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
