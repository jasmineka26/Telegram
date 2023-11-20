import Contact from "../models/contact";
import UnReadMessage from "./UnreadMessage";
type ProfileProps = Omit<Contact, "group">;
const Profile: React.FC<ProfileProps> = ({
  image: imageAddress,
  name: profileName,
  lastMessage,
  unread: unRead,
}) => {
  return (
    <div className="flex flex-row w-full gap-5 text-white">
      <div className="overflow-hidden w-16">
        <img className="w-full h-full rounded-full" src={imageAddress} alt="" />
      </div>
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="font-bold">{profileName}</div>
          <div className="font-thin text-white text-sm">{lastMessage}</div>
        </div>
        {unRead > 0 && <UnReadMessage NumberUnReadMessage={unRead} />}
      </div>
    </div>
  );
};

export default Profile;
