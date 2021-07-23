import { ThumbUpIcon, ShareIcon, ChatAltIcon } from "@heroicons/react/outline";

export default function PostFooter() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <span className="rounded-full px-1  py-1 bg-blue-500">
            <ThumbUpIcon className="h-4 text-white" />
          </span>
          <img src="love.svg" alt="love" className="h-6" />
          <span className="font-thin ml-1 text-gray-700">28K</span>
        </div>
        <div className="flex">
          <span className="font-thin ml-1 text-gray-800">28K Comments</span>
          <span className="font-thin ml-2 text-gray-800 ">24.1K Shares</span>
        </div>
      </div>
      <hr className="text-gray-800 my-1" />
      <div className="flex justify-between">
        <button className="w-1/3 items-center  hover:bg-gray-100 flex justify-center py-1 font-semibold text-gray-500 rounded-md">
          <ThumbUpIcon className="h-5 font-semibold" />
          <span className="ml-1"> Like</span>
        </button>
        <button className="w-1/3  items-center hover:bg-gray-100 flex justify-center py-1 font-semibold text-gray-500 rounded-md">
          <ChatAltIcon className="h-5 font-semibold" />
          <span className="ml-1">Comment</span>
        </button>
        <button className="w-1/3  items-center  hover:bg-gray-100 flex justify-center py-1 font-semibold text-gray-500 rounded-md">
          <ShareIcon className="h-5 font-semibold" />
          <span className="ml-1">Share</span>
        </button>
      </div>
      <hr className="text-gray-800 mt-1" />
    </div>
  );
}
