import React from "react";
import "./App.css";
import SortTab from "./components/SortTab";
import MiddleBar from "./components/MiddleBar";
import { allChats } from "./fake";

interface AppProps {}

interface AppState {
  selectedChats: typeof allChats;
  selectedItem: string;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    selectedChats: allChats,
    selectedItem: ""
  };

  handleItemClick = (title: string) => {
    for (let i = 0; i < allChats.length; i++) {
      if (title === "All Chats") {
        this.setState({ selectedChats: allChats, selectedItem: title });
      } else if (allChats[i].group === title) {
        const selectedChats = allChats.filter((chat) => chat.group === title);
        this.setState({ selectedChats, selectedItem: title });
      } else if (title === "Unread") {
        console.log("makeSoon");
      }
    }
  };

  render() {
    const { selectedChats, selectedItem } = this.state;

    return (
      <div className="flex flex-row bg-slate-950 h-screen">
        <div className="flex flex-col items-centerh-screen ">
          <SortTab
            onItemClick={this.handleItemClick}
            selectedItem={selectedItem}
          />
        </div>
        <div className="flex flex-col bg-gray-800 w-[35%]">
          <div>
            <MiddleBar contacts={selectedChats} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
