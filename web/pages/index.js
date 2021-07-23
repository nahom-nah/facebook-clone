export default function Home() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-fb-bg"
      style={{ backgroundImage: "url(facebook.jpg)", backgroundSize: "cover" }}
    >
      <button className="px-2 py-2 bg-white rounded-lg  flex items-center hover:bg-blue-50">
        <img src="icons8-facebook.svg" alt="logo" className="h-10 mr-2 " />
        <span className="font-bold   text-blue-700">Sign In with facebook</span>
      </button>
    </div>
  );
}
l;
