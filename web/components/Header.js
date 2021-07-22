import { SearchIcon } from "@heroicons/react/outline";
function Header() {
  return (
    <div className="stick top-8 z-50   mx-auto border-gray-50 border-b-2 p-2">
      <div className="container flex mx-auto">
        <div className=" flex font-bold">Elma</div>
        <div className="flex justify-center rounded-md p-2  bg-gray-100">
          <input
            type="text"
            placeholder="Search something"
            className="bg-transparent mr-2"
          />
          <button className="text-gray-700">categories</button>
          <button>
            <SearchIcon className="h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
