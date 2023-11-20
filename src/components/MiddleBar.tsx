import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Contact from "../models/contact";

interface MiddleBarProps {
  contacts: Array<Contact>;
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
          {contacts.map((c, index) => (
            <div key={index}>
              <div className="h-[70px] w-full p-2 hover:bg-[#529999]">
                <Profile
                  image={c.image}
                  name={c.name}
                  lastMessage={c.lastMessage}
                  unread={c.unread}
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
