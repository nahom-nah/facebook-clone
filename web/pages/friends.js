import NavBar from "../components/NavBar";
import {
  CogIcon,
  UsersIcon,
  ArrowRightIcon,
  GiftIcon,
  UserGroupIcon,
  UserAddIcon,
  UserRemoveIcon,
} from "@heroicons/react/solid";
import FriendCard from "../components/FriendCard";
export default function Friends() {
  return (
    <div>
      {" "}
      <NavBar />
      <div className="flex  bg-gray-100 h-screen">
        <div className="w-1/4 pt-16 h-screen bg-white shadow-md px-4 py-3 ">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">Friends</div>
            <div className="rounded-full bg-gray-200 hover:bg-gray-300 px-2 py-2">
              <CogIcon className="h-6" />
            </div>
          </div>
          <ul className="mt-3">
            <li className="flex items-center justify-between px-2 py-2 bg-blue-50 rounded-md">
              {" "}
              <div className="flex items-center">
                <span className="bg-blue-500 px-2 py-2 rounded-full">
                  <UsersIcon className="h-5 text-white" />
                </span>
                <span className="ml-2 text-lg font-semibold text-gray-600">
                  Home
                </span>
              </div>
            </li>
            <li className="flex items-center justify-between px-2 py-2  hover:bg-gray-100 rounded-md">
              {" "}
              <div className="flex items-center">
                <span className="bg-gray-300 px-2 py-2 rounded-full">
                  <UserAddIcon className="h-5  " />
                </span>
                <span className="ml-2 text-lg  font-semibold text-gray-600">
                  Friend Requests
                </span>
              </div>
              <div>
                <ArrowRightIcon className="h-5 text-gray-700" />
              </div>
            </li>
            <li className="flex items-center justify-between px-2 py-2  hover:bg-gray-100 rounded-md">
              {" "}
              <div className="flex items-center">
                <span className="bg-gray-300 px-2 py-2 rounded-full">
                  <UserRemoveIcon className="h-5  " />
                </span>
                <span className="ml-2 text-lg font-semibold text-gray-600">
                  Suggestions
                </span>
              </div>
              <div>
                <ArrowRightIcon className="h-5 text-gray-700" />
              </div>
            </li>
            <li className="flex items-center justify-between px-2 py-2  hover:bg-gray-100 rounded-md">
              {" "}
              <div className="flex items-center">
                <span className="bg-gray-300 px-2 py-2 rounded-full">
                  <UserGroupIcon className="h-5  " />
                </span>
                <span className="ml-2 text-lg  font-semibold text-gray-600">
                  AllFriends
                </span>
              </div>
              <div>
                <ArrowRightIcon className="h-5 text-gray-700" />
              </div>
            </li>
            <li className="flex items-center justify-between px-2 py-2  hover:bg-gray-100 rounded-md">
              {" "}
              <div className="flex items-center">
                <span className="bg-gray-300 px-2 py-2 rounded-full">
                  <GiftIcon className="h-5  " />
                </span>
                <span className="ml-2 text-lg  font-semibold text-gray-600">
                  Birthdays
                </span>
              </div>
            </li>
            <li className="flex items-center justify-between px-2 py-2  hover:bg-gray-100 rounded-md">
              {" "}
              <div className="flex items-center">
                <span className="bg-gray-300 px-2 py-2 rounded-full">
                  <UsersIcon className="h-5  " />
                </span>
                <span className="ml-2 text-lg  font-semibold text-gray-600">
                  Custome Lists
                </span>
              </div>
              <div>
                <ArrowRightIcon className="h-5 text-gray-700" />
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-16 w-3/4 overflow-auto scrollbar-hide">
          <div className="px-8 py-4">
            <div className="text-xl font-bold">Friend Requests</div>
            <div className="mt-3">
              <FriendCard image="pro2.jpg" />
            </div>
          </div>{" "}
          <hr className="text-gray-900 mx-8 " />
          <div className="mx-8  py-4 ">
            <div className="text-xl font-bold">People You May Know</div>
            <div className="flex ">
              <div className="mt-3 px-1">
                <FriendCard image="dev.jpg" />
              </div>
              <div className="mt-3 px-1">
                <FriendCard image="pro3.jpg" />
              </div>
              <div className="mt-3 px-1">
                <FriendCard image="pro2.jpg" />
              </div>
              <div className="mt-3 px-1">
                <FriendCard image="pro4.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
