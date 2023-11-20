interface unReadMessageProps {
  NumberUnReadMessage: number;
}

const UnReadMessage: React.FC<unReadMessageProps> = ({
  NumberUnReadMessage,
}) => {
  return (
    <div className="flex flex-row justify-center w-6 h-6 bg-red-700 rounded-full">
      {NumberUnReadMessage}
    </div>
  );
};

export default UnReadMessage;
