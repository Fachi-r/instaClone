import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "ssssangha",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and destroy that like button!",
  },
  {
    id: "2",
    username: "fachiiii",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and destroy that like button!",
  },
  {
    id: "3",
    username: "najamba!!",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and destroy that like button!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
