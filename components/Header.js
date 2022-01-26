import Image from "next/image";
import { Icon } from "@iconify/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
// import Stories from "./Stories";
// import { useEffect, useState } from "react";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  // const [isSignInPage, setIsSignInPage] = useState(true);

  // useEffect(() => {
  //   const route = router.asPath.split("?");
  //   if (route[0] !== "/auth/signin") {
  //     setIsSignInPage(false);
  //   }
  // });

  return (
    <>
      <div className="sticky top-0 inset-x-0 shadow-sm bg-white z-50">
        <div className="flex justify-between py-2 max-w-6xl ml-2 mr-5 lg:mx-6">
          {/* Left */}
          <div
            onClick={() => router.push("/")}
            className="relative w-28"
          >
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* <div
            onClick={() => router.push("/")}
            className="relative lg:hidden w-10 cursor-pointer"
          >
            <Image
              src="https://links.papareact.com/jjm"
              layout="fill"
              objectFit="contain"
            />
          </div> */}

          {/* Middle - Search Input Field */}
          <div className="max-w-xs md:inline-flex sm:hidden"></div>
          <div className="relative mt-1 p-3 rounded-md hidden md:inline-block">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <Icon
                icon="heroicons-outline:search"
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>

          {/* Right */}
          <div className="flex items-center justify-end space-x-4">
            <Icon
              icon="heroicons-solid:home"
              className="navBtn"
              onClick={() => router.push("/")}
            />

            {session ? (
              <>
                <div className="relative navBtn">
                  <Icon
                    icon="heroicons-outline:paper-airplane"
                    className="navBtn rotate-45 hover:scale-100"
                  />
                  <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    3
                  </div>
                </div>
                <Icon
                  icon="heroicons-outline:plus-circle"
                  className="navBtn"
                  onClick={() => setOpen(true)}
                />
                <Icon icon="heroicons-outline:user-group" className="navBtn" />
                <Icon icon="heroicons-outline:heart" className="navBtn" />
                
                <p className='font-bold italic text-gray-500'>{session?.user?.name}</p>
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  alt="Profile Picture"
                  title="Sign out"
                  className="h-10 cursor-pointer rounded-full"
                />
              </>
            ) : (
              <button className='w-20 pb-2.5 pt-1.5 !mx-0 mt-1 text-white bg-red-500 rounded-lg hover:bg-indigo-600' onClick={signIn}>Sign In</button>
            )}

          </div>
        </div>
      </div>
      {/* {!isSignInPage && <Stories />} */}
    </>
  );
}

export default Header;
