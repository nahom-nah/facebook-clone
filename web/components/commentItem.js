import { DotsHorizontalIcon, ReplyIcon } from "@heroicons/react/solid";

export default function CommentItem({ comment }) {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <img
            src="pro4.jpg"
            alt="pro_pic"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <div className="w-80 rounded-xl px-2 py-2 font-normal text-sm bg-gray-200">
            <div className="font-semibold">{comment.user.username}</div>
            {comment.body}
          </div>
          <div>
            <button className="text-sm font-semibold text-gray-700 mr-2">
              Like
            </button>
            <button className="text-sm font-semibold text-gray-700 mr-2">
              Reply
            </button>
            <span className="font-normal text-sm">12h</span>
          </div>
          <div className="flex mt-2">
            <span>
              <ReplyIcon className="h-5 text-gray-700" />
            </span>
            <span className="text-gray-700 font-semibold ml-2">21 Replies</span>
          </div>
        </div>

        <div className="place-self-center">
          <DotsHorizontalIcon className="h-5 text-gray-600 " />
        </div>
      </div>
    </div>
  );
}
