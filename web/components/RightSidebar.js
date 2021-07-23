import { PlusIcon } from "@heroicons/react/solid";

export default function RightSidebar() {
  return (
    <div className="px-2">
      <div className="font-bold text-gray-500">Group Conversations</div>
      <div className="mt-2 flex items-center">
        <span className="rounded-full p-1 bg-gray-300 mr-2">
          <PlusIcon className="h-5 text-gray-600" />
        </span>

        <span className="font-semibold text-gray-600">Create New Group</span>
      </div>
    </div>
  );
}
