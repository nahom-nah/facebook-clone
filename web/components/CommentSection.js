import { useMutation, useQuery } from "@apollo/client";
import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { CREATE_COMMENT } from "../graphql/mutation/comment";
import { GET_ALL_COMMENTS } from "../graphql/query/comment";
import CommentItem from "./commentItem";

export default function CommentSection(props) {
  const [comment, setComment] = useState({
    body: null,
    post: props.postId,
  });

  const [addComment, { data, loading, error }] = useMutation(CREATE_COMMENT, {
    variables: {
      commentInput: comment,
    },
    update(cache, { data: { createComment } }) {
      const data = cache.readQuery({
        query: GET_ALL_COMMENTS,
        variables: { postId: props.postId },
      });

      cache.writeQuery({
        query: GET_ALL_COMMENTS,
        variables: { postId: props.postId },
        data: {
          getComments: [...data.getComments, createComment],
        },
      });
    },
  });
  const handleChange = (e) => {
    setComment({ ...comment, body: e.target.value });
  };
  const handleSubmit = (postId) => {
    addComment();

    setComment({ ...comment, body: "" });
  };

  return (
    <div className="mt-4">
      <div className="flex items-center ">
        <div className="rounded-full bg-gray-400  px-2 py-2">
          <UserIcon className="h-5 text-white" />
        </div>
        <div className="bg-gray-200 px-2 py-1 rounded-full ml-2">
          <input
            placeholder="Write Comment..."
            name="body"
            type="text"
            onChange={handleChange}
            value={comment.body}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                handleSubmit();
              }
            }}
            className="bg-gray-200 outline-none  w-96"
          />
        </div>
      </div>
      <div className="mt-4 px-4">
        {props.comments.map((el) => (
          <CommentItem comment={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}
