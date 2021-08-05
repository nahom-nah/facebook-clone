import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../graphql/query/post";
import PostComp from "./PostComp";
import PostFooter from "./PostFooter";
import PostItem from "./PostItem";

export default function HomeCenterComp() {
  const { loading, data, error } = useQuery(GET_ALL_POSTS);

  return (
    <div className="  px-10 ">
      <PostComp />
      <div className="py-2 px-4 mt-4 bg-white rounded-lg shadow-md">
        {loading ? (
          <div>Loading</div>
        ) : (
          data.getPosts.map((el) => (
            <div key={el._id}>
              <PostItem post={el} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
