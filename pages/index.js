import Head from "next/head";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-white h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Feed />
      <Modal />
    </div>
  );
}
