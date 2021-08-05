import HomeCenterComp from "../components/HomeCenterComp";
import LeftSidebar from "../components/LeftSidebar";
import NavBar from "../components/NavBar";
import RightSidebar from "../components/RightSidebar";

function Home() {
  return (
    <div>
      <NavBar />

      <div className="  pt-14 bg-gray-100 h-screen w-screen flex  ">
        {" "}
        <div className=" xl:w-1/4  hidden w-0 xl:fixed xl:block  xl:top-14 xl:left-0   ">
          {" "}
          <LeftSidebar />
        </div>
        <div className="xl:ml-96 md:mr-96 pt-4 xl:w-2/4   md:w-3/4 w-full  overflow-auto scrollbar-hide  flex justify-center mb-4">
          <HomeCenterComp />
        </div>
        <div className=" md:w-1/4 py-4 md:fixed md:block hidden top-14 right-0   ">
          {" "}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
