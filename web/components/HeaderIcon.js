import NextLink from "next/link";
export default function HeaderIcon({ Icon, ...props }) {
  return (
    <div className="cursor-pointer">
      {props.active ? (
        <div className="  px-8 border-b-4 border-blue-500 mx-2 py-3  ">
          <Icon className="h-7 text-blue-500" />
        </div>
      ) : (
        <div className="hover:bg-gray-100 px-8 rounded-lg mx-2 py-3">
          <Icon className="h-7 text-gray-500" />
        </div>
      )}
    </div>
  );
}
