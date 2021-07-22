export default function LSidebarList({ Icon, Text }) {
  return (
    <li className="flex items-center py-2 hover:bg-gray-300 px-2 rounded-lg ">
      <img src={Icon} alt="lsIcon" className="h-8" />
      <span className="font-semibold ml-2 text-gray-700">{Text}</span>
    </li>
  );
}
