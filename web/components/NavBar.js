import { HomeIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import {
  UsersIcon,
  PlayIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import RightHeaderIcon from "./RightHeaderIcon";
export default function NavBar() {
  return (
    <div className="bg-white border flex items-center px-3 p-0 m-0  fixed block w-screen shadow">
      <div className="flex items-center py-1 w-1/4 ">
        <img src="icons8-facebook.svg" alt="logo" />
        <div className="flex rounded py-3 h-10 w-3/4 rounded-3xl ml-2 px-2 bg-gray-100 items-center ">
          <SearchIcon className="h-5 text-gray-700  " />
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-none bg-gray-100 ml-2 w-3/4"
          />
        </div>
      </div>

      <div className="flex w-2/4 justify-center">
        <HeaderIcon Icon={HomeIcon} active={true} />
        <HeaderIcon Icon={UsersIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
      <div className="flex items-center justify-end py-1 w-1/4 ">
        <button className="flex items-center rounded-full hover:bg-gray-100 px-2 py-1 mr-4">
          <span className="rounded-full bg-gray-400 p-1 mr-1 border">
            <UserIcon className="h-4 text-white" />
          </span>

          <span className="font-semibold">Nahom</span>
        </button>
        <RightHeaderIcon Icon="icons8-facebook-messenger.svg" />
        <RightHeaderIcon Icon="icons8-facebook-messenger.svg" />
        <RightHeaderIcon Icon="icons8-facebook-messenger.svg" />
        <RightHeaderIcon Icon="icons8-facebook-messenger.svg" />
      </div>
    </div>
  );
}
