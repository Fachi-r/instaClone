import Image from "next/image";
import { Icon } from "@iconify/react";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-6">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative lg:hidden w-10 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search Input Field */}
        <div className="max-w-xs"></div>
        <div className="relative mt-1 p-3 rounded-md">
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
          <Icon icon="heroicons-solid:home" className="navBtn" />
          <Icon icon="heroicons-solid:menu" className="w-8 h-8 md:hidden" />

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
              <Icon icon="heroicons-outline:plus-circle" className="navBtn" />
              <Icon icon="heroicons-outline:user-group" className="navBtn" />
              <Icon icon="heroicons-outline:heart" className="navBtn" />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="Profile Picture"
                className="h-10 cursor-pointer rounded-full"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
