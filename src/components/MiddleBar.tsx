import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

interface MiddleBarProps {
  contacts: Array<{
    image: string;
    name: string;
    lastMessage: string;
    group: string;
  }>;
}

interface MiddleBarState {}

class MiddleBar extends React.Component<MiddleBarProps, MiddleBarState> {
  render() {
    const { contacts } = this.props;

    return (
      <div className="flex flex-col">
        <div className="m-2 pb-[13px]">
          <SearchBar />
        </div>
        <div>
          {contacts.map((chat, index) => (
            <div>
              <div className="h-[70px] w-full p-2 hover:bg-[#529999]">
                <Profile
                  key={index}
                  imageAddress={chat.image}
                  profileName={chat.name}
                  lastMessage={chat.lastMessage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MiddleBar;
