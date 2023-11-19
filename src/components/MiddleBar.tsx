import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

interface MiddleBarProps {}

interface MiddleBarState {}

class MiddleBar extends React.Component<MiddleBarProps, MiddleBarState> {
  state = {};
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Profile imageAddress="/Pictures/Screenshot_20230819_025227.png"/>
        </div>
      </div>
    );
  }
}

export default MiddleBar;
