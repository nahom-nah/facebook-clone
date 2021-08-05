import { useMutation, gql } from "@apollo/client";
import {
  EmojiHappyIcon,
  PhotographIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { CREATE_POST } from "../graphql/mutation/post";
import { GET_ALL_POSTS } from "../graphql/query/post";
export default function PostComp() {
  const [post, setPost] = useState({
    body: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const [addPost, { data, loading, error }] = useMutation(CREATE_POST, {
    variables: { postInput: post },
    update(cache, { data: { createPost } }) {
      const data = cache.readQuery({ query: GET_ALL_POSTS });

      cache.writeQuery({
        query: GET_ALL_POSTS,

        data: {
          getPosts: [...data.getPosts, createPost],
        },
      });
    },
  });
  const handleSubmit = () => {
    addPost();
    setPost({
      ...post,
      body: "",
    });
  };

  return (
    <div className="bg-white px-6 py-3 rounded-md shadow-md">
      <div className="flex items-center">
        <span className="p-1 bg-gray-400 rounded-full mr-2">
          <UserIcon className="text-white h-8 " />
        </span>

        <span className="px-3 py-2 rounded-full w-96 bg-gray-100">
          <input
            type="text"
            name="body"
            value={post.body}
            placeholder="What's on your mind, Nahom?"
            className="outline-none bg-gray-100  w-full text-black"
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                handleSubmit();
              }
            }}
          />
        </span>
      </div>
      <hr className="my-2 text-gray-300" />
      <ul className="flex justify-between px-2">
        <li className="flex items-center">
          <VideoCameraIcon className="h-6 text-red-500 mr-1" />
          <span className="font-semibold text-gray-500  ">Live Video</span>
        </li>
        <li className="flex items-center">
          <PhotographIcon className="h-6 text-green-500 mr-1" />
          <span className="font-semibold text-gray-500  ">Photos/Video</span>
        </li>
        <li className="flex items-center">
          <EmojiHappyIcon className="h-6 text-yellow-400 mr-1" />
          <span className="font-semibold text-gray-500  ">
            Feeling/Activity
          </span>
        </li>
      </ul>
    </div>
  );
}
