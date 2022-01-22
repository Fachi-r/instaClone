import { Icon } from "@iconify/react";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <Icon icon="heroicons-outline:dots-horizontal" className="h-6 w-6" />
      </div>

      {/* Image */}
      <img src={img} alt="" className="object-cover w-full" />

      {/* Buttons */}
      <div className="flex justify-between px-4 py-3">
        <div className="flex space-x-4">
          <Icon icon="heroicons-outline:heart" className="btn" />
          <Icon icon="heroicons-outline:chat" className="btn" />
          <Icon icon="heroicons-outline:paper-airplane" className="btn" />
        </div>

        <Icon icon="heroicons-outline:bookmark" className="btn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box */}
      <form className="flex items-center p-4">
        <Icon icon="heroicons-outline:emoji-happy" className="h-7 w-7" />
        <input
          type="text"
          placeholder="Add a comment"
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
