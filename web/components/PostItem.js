import { DotsHorizontalIcon, UserIcon } from "@heroicons/react/solid";
import PostFooter from "./PostFooter";
export default function PostItem() {
  return (
    <div className="bg-white py-2  ">
      <div className="flex  px-4 justify-between">
        <span className="flex items-center">
          <span className="p-1 bg-gray-400 rounded-full mr-2">
            <UserIcon className="text-white h-8 " />
          </span>
          <span>
            <div className="text-gray-600 font-semibold text-sm">
              Nahom Balcha
            </div>
            <div className="text-gray-400 font-semibold text-sm">7h</div>
          </span>
        </span>

        <span>
          <DotsHorizontalIcon className="h-6 text-gray-500" />
        </span>
      </div>
      <div className="py-2 px-4 text-sm">My lovely dog...</div>
      <div className="py-2">
        <img src="pro2.jpg" alt="photo" className="w-full" />
      </div>
      <div className="px-4">
        <PostFooter />
      </div>
    </div>
  );
}
