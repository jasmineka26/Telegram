import { UserGroupIcon } from "@heroicons/react/24/outline";
export interface SortTabElementProps {
  title: string;
  icon: typeof UserGroupIcon;
}

const SortTabElement: React.FC<SortTabElementProps> = ({
  title,
  icon: Icon,
}) => {
  return (
    <div className="w-24">
      <div className="flex flex-col items-center justify-center pt-2 pb-2 text-sm font-bold text-white">
        <div>{<Icon className="h-8" />}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default SortTabElement;
