import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Footer() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter()
  return session ? ( 
    <div className="fuck_this_div fixed bottom-0 inset-x-0 border-t bg-white z-50 md:hidden">
      {/* Icons */}

      <div className="flex justify-between items-center px-5 py-3 max-w-md w-full">
        {/* Middle - Search Input Field */}

        {/* Right */}
        <Icon
          icon="heroicons-solid:home"
          className="navBtn_S"
          onClick={() => router.push("/")}
        />

        <div className="relative navBtn_S">
          <Icon
            icon="heroicons-outline:paper-airplane"
            className="navBtn_S rotate-45 hover:scale-100"
          />
          <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
            3
          </div>
        </div>
        <Icon
          icon="heroicons-outline:plus-circle"
          className="navBtn_S !h-9 !w-9"
          onClick={() => setOpen(true)}
        />
        <Icon icon="heroicons-outline:user-group" className="navBtn_S" />
        <Icon icon="heroicons-outline:heart" className="navBtn_S" />
      </div>
    </div>
  ) : (
    null
  );
}

export default Footer;
