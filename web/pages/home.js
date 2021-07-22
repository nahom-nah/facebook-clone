import LeftSidebar from "../components/LeftSidebar";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="pt-14 bg-gray-100 h-screen ">
        {" "}
        <div className=" w-1/4">
          {" "}
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
}
