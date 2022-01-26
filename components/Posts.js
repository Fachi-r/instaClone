import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "1",
//     username: "ssssangha",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "Subscribe and destroy that like button!",
//   },
//   {
//     id: "2",
//     username: "fachiiii",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "Subscribe and destroy that like button!",
//   },
//   {
//     id: "3",
//     username: "najamba!!",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "Subscribe and destroy that like button!",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  // useEffect(() => {
  //   const postsCollection = collection(db, "posts");
  //   const q = query(postsCollection, orderBy("timestamp", "desc"));
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     setPosts(snapshot.docs);
  //   });

  //   return unsubscribe;
  // }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
