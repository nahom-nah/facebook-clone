import { UserIcon } from "@heroicons/react/solid";
import LSidebarList from "./LSidebarList";

export default function LeftSidebar() {
  return (
    <ul className="h-screen  pt-4 px-2 capitalize">
      <LSidebarList Icon={"user.png"} Text={"Nahom Balcha"} />
      <LSidebarList
        Icon={"covid-f-removebg-preview.png"}
        Text={"covid-19 information center"}
      />
      <LSidebarList Icon={"groups.png"} Text={"groups"} />
      <LSidebarList
        Icon={"marketplace-removebg-preview.png"}
        Text={"marketplace"}
      />
      <LSidebarList Icon={"download-removebg-preview.png"} Text={"watch"} />
      <LSidebarList Icon={"calender-removebg-preview.png"} Text={"events"} />
      <LSidebarList Icon={"saved-removebg-preview.png"} Text={"saved"} />
      <LSidebarList Icon={"flag-removebg-preview.png"} Text={"pages"} />
    </ul>
  );
}
