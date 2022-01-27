import Head from "next/head";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-white h-screen scrollbar-hide">
      <Head>
        <title>Instagram?</title>
        <link rel="icon" href="https://links.papareact.com/jjm" />
      </Head>
      {/* Header */}
      <Feed />
      <Modal />
    </div>
  );
}
