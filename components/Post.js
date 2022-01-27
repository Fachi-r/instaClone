import { Icon } from "@iconify/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import moment, { updateLocale } from "moment";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const commentFieldRef = useRef();
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, `posts/${id}/comments`),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, `posts/${id}/likes`), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, `posts/${id}/likes/${session.user.uid}`));
      return;
    }
    await setDoc(doc(db, `posts/${id}/likes/${session.user.uid}`), {
      username: session.user.username,
    });
  };

  const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;

  const getDateFrom = (givenDate) => {
    return moment(givenDate)
      .add(TIME_ZONE, "hours")
      .fromNow(
        updateLocale("en", {
          relativeTime: {
            future: "in %s",
            past: "%s",
            s: "sec",
            m: "%dm",
            mm: "%dm",
            h: "%dh",
            hh: "%dh",
            d: "%dd",
            dd: "%dd",
            M: "amth",
            MM: "%dmths",
            y: "y",
            yy: "%d y",
          },
        })
      );
  };

  return (
    <div className="bg-white border rounded-sm my-0 md:my-7">
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
      {session && (
        <div className="flex justify-between px-4 py-3">
          <div className="flex space-x-4">
            <Icon
              icon={
                hasLiked ? "heroicons-solid:heart" : "heroicons-outline:heart"
              }
              color={hasLiked && "#d00"}
              className="btn"
              onClick={likePost}
            />
            <Icon icon="heroicons-outline:chat" className="btn" />
            <Icon
              icon="heroicons-outline:paper-airplane"
              className="btn rotate-45"
            />
          </div>

          <Icon icon="heroicons-outline:bookmark" className="btn" />
        </div>
      )}

      {/* Caption */}
      <div className="px-5 pb-5 pt-2">
        {likes.length === 1 && (
          <p className="font-bold mb-1 transition-all">1 like</p>
        )}
        {likes.length !== 1 && likes.length > 0 && (
          <p className="font-bold mb-1 transition-all">{likes.length} likes</p>
        )}
        <p className="truncate transition-all">
          <span className="font-bold mr-2">{username}</span>
          {caption}
        </p>
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-3 mb-3">
              <img
                src={comment.data().userImage}
                alt=""
                className="h-7 w-7 rounded-full"
              />
              <p className="text-sm w-full">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <p fromNow className="text-xs pr-5">
                {getDateFrom(comment.data().timestamp?.toDate())}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      {session && (
        <form className="flex items-center p-4">
          <Icon icon="heroicons-outline:emoji-happy" className="h-7 w-7" />
          <input
            type="text"
            ref={commentFieldRef}
            value={comment}
            onChange={() => setComment(commentFieldRef.current.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            type="submit"
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
