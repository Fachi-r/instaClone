function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://links.papareact.com/3ke"
        alt=""
        className="w-16 h-16 rounded-full border p-0.5"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">ssssangha</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm text-blue-400 font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
