interface ProfileProps {
  imageAddress : string
}


const Profile: React.FC<ProfileProps> = ({imageAddress}) => {
  return (
    <div>
      <div className="w-14 h-14 rounded-full overflow-hidden">
        <img
        className="scale-150"
          src={imageAddress}
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
