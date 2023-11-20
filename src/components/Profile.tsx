interface ProfileProps {
  imageAddress: string;
  profileName: string;
  lastMessage: string;
}

const Profile: React.FC<ProfileProps> = ({
  imageAddress,
  profileName,
  lastMessage,
}) => {
  return (
    <div className="flex flex-row w-full gap-5 text-white">
      <div className="w-14 h-14 rounded-full overflow-hidden">
        <img className="scale-150" src={imageAddress} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">{profileName}</div>
        <div className="font-thin text-white text-sm">{lastMessage}</div>
      </div>
    </div>
  );
};

export default Profile;
