import PostComp from "./PostComp";
import PostFooter from "./PostFooter";
import PostItem from "./PostItem";

export default function HomeCenterComp() {
  return (
    <div className="  px-10 ">
      <PostComp />
      <div className="py-2 px-4 mt-4 bg-white rounded-lg shadow-md">
        <div>
          <PostItem />
        </div>
        <div className="mt-4">
          <PostItem />
        </div>
      </div>
    </div>
  );
}
