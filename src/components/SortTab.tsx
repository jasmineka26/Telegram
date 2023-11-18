import {
  ArchiveBoxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import ElementOfSortTab, { ElementOfSortTabProps } from "./elementOfSortTab";

const menuItems: Array<ElementOfSortTabProps> = [
  { title: "All Chats", icon: ChatBubbleLeftRightIcon },
  { title: "Unread", icon: ChatBubbleBottomCenterTextIcon },
  { title: "Private", icon: UserCircleIcon },
  { title: "Channels", icon: ArchiveBoxArrowDownIcon },
  { title: "Group", icon: UserGroupIcon },
];

const SortTab = () => {
  return (
    <div>
      {menuItems.map((item) => (
        <div key={item.title}>
          <ElementOfSortTab {...item} />
        </div>
      ))}
    </div>
  );
};

export default SortTab;