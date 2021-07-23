import HomeCenterComp from "../components/HomeCenterComp";
import LeftSidebar from "../components/LeftSidebar";
import NavBar from "../components/NavBar";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="  pt-14 bg-gray-100 h-screen w-screen flex  ">
        {" "}
        <div className=" w-1/4 fixed block top-14 left-0   ">
          {" "}
          <LeftSidebar />
        </div>
        <div className="ml-96 mr-96 pt-4 w-2/4  overflow-auto scrollbar-hide  flex justify-center mb-4">
          <HomeCenterComp />
        </div>
        <div className=" w-1/4 py-4 fixed block top-14 right-0   ">
          {" "}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
