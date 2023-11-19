import { useState } from "react";
import {
  ArchiveBoxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import SortTabElement, { SortTabElementProps } from "./SortTabElement";

const menuItems: Array<SortTabElementProps> = [
  { title: "", icon: Bars3Icon },
  { title: "All Chats", icon: ChatBubbleLeftRightIcon },
  { title: "Unread", icon: ChatBubbleBottomCenterTextIcon },
  { title: "Private", icon: UserCircleIcon },
  { title: "Channels", icon: ArchiveBoxArrowDownIcon },
  { title: "Group", icon: UserGroupIcon },
  { title: "Edit", icon: AdjustmentsHorizontalIcon },
];

const SortTab = () => {
  const [selectedItem, setSelectedItem] = useState<string>();

  const handleItemClick = (title: string) => {
    setSelectedItem(title);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {menuItems.map((item) => (
        <div
          className="cursor-pointer"
          key={item.title}
          onClick={() => handleItemClick(item.title)}
          style={{
            backgroundColor:
              selectedItem === item.title ? "#e69b00" : "transparent",
          }}
        >
          <SortTabElement {...item} />
        </div>
      ))}
    </div>
  );
};

export default SortTab;
