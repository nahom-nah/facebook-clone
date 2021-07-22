export default function RightHeaderIcon({ Icon }) {
  return (
    <div className="p-2 bg-gray-200 rounded-full mr-1 cursor-pointer hover:bg-gray-300">
      <img src={Icon} alt="icon" />
    </div>
  );
}
