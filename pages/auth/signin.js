import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

// Browser...
function signin(prov) {
  const [providers, setProviders] = useState([])
  useEffect(() => setProviders(prov),[])
  console.log(providers);
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="https://links.papareact.com/ocw" alt="" className="" />
        <p className="font-xs italic text-center px-2">
          This is not a REAL app. Don't expect too much from it. Feel free to
          explore 😄
        </p>
        <div className="mt-40">
          {/* <code>{}</code> */}
          {Object.keys(providers).map((provider) => (
            <div key={provider?.name ?? 1}>
              <button
                className="p-3 bg-red-500 rounded-lg text-white"
                onClick={() => signIn(provider?.id, { callbackUrl: "/" })}
              >
                Sign in with {provider?.name}
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
