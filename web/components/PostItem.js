import { DotsHorizontalIcon, UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import PostFooter from "./PostFooter";
export default function PostItem({ post }) {
  return (
    <div className="bg-white py-2  border-top-1">
      <div className="flex  px-4 justify-between">
        <span className="flex items-center">
          <span className="p-1 bg-gray-400 rounded-full mr-2">
            <UserIcon className="text-white h-8 " />
          </span>
          <span>
            <div className="text-gray-600 font-semibold text-sm">
              {post.user.username}
            </div>
            <div className="text-gray-400 font-semibold text-sm">7h</div>
          </span>
        </span>

        <span>
          <DotsHorizontalIcon className="h-6 text-gray-500" />
        </span>
      </div>
      <div className="py-3 px-8  ">{post.body}.</div>
      <div className="py-2 flex">
        {post.images.map((el) => (
          <img src={el} alt="photo" className="w-full" />
        ))}
      </div>
      <div className="px-4">
        <PostFooter comments={post.comments} postId={post.id} />
      </div>
    </div>
  );
}
