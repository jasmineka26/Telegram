import { FunctionComponent } from "react";

import { UserGroupIcon } from "@heroicons/react/24/outline";

export interface ElementOfSortTabProps {
  title: string;
  icon: typeof UserGroupIcon;
}

const ElementOfSortTab: FunctionComponent<ElementOfSortTabProps> = ({
  title,
  icon: Icon,
}) => {
  return (
    <div>
      <div>{<Icon className="w-11 h-11" />}</div>
      <div>{title}</div>
    </div>
  );
};

export default ElementOfSortTab;
