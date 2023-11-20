import React from "react";
import SortTabElement, { SortTabElementProps } from "./SortTabElement";
import {
  ArchiveBoxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

interface SortTabProps {
  onItemClick: (title: string) => void;
  selectedItem?: string;
}

const menuItems: Array<SortTabElementProps> = [
  { title: " ", icon: Bars3Icon },
  { title: "All Chats", icon: ChatBubbleLeftRightIcon },
  { title: "Unread", icon: ChatBubbleBottomCenterTextIcon },
  { title: "Private", icon: UserCircleIcon },
  { title: "Channels", icon: ArchiveBoxArrowDownIcon },
  { title: "Group", icon: UserGroupIcon },
  { title: "Edit", icon: AdjustmentsHorizontalIcon },
];

const SortTab: React.FC<SortTabProps> = ({ onItemClick, selectedItem }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {menuItems.map((item) => (
        <div
          className="cursor-pointer h-[70px]"
          key={item.title}
          onClick={() => onItemClick(item.title)}
          style={{
            backgroundColor:
              selectedItem === item.title ? "#529999" : "transparent",
          }}
        >
          <SortTabElement {...item} />
        </div>
      ))}
    </div>
  );
};

export default SortTab;
