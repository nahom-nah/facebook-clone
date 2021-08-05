export default function FriendCard(props) {
  return (
    <div className="bg-white rounded-md shadow-md pb-2 w-56">
      <img
        src={props.image}
        alt="friend photo"
        className="rounded-t-md w-56  h-60"
      />
      <div className="px-4 mt-2 ">
        <div className="font-semibold text-lg">Nahom Balcha</div>
        <button className="block bg-blue-500 hover:bg-blue-600 mt-4  text-white font-semibold w-full px-2 py-1 rounded-md">
          Confirm
        </button>
        <button className="block bg-gray-100 hover:bg-gray-200 my-2   font-semibold w-full px-2 py-1 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}
