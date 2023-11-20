import React from "react";
import "./App.css";
import SortTab from "./components/SortTab";
import MiddleBar from "./components/MiddleBar";
import { allChats } from "./fake";

interface AppProps {}

interface AppState {
  selectedItem?: string;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {};

  handleItemClick = (title: string) => {
    this.setState({ selectedItem: title });
    for (let i = 0; i < allChats.length; i++) {
      if (allChats[i].group === title) {
        console.log(allChats[i].group, allChats[i].name);
      }
    }
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="flex flex-row bg-slate-950 h-screen">
        <div className="flex flex-col items-centerh-screen ">
          <SortTab onItemClick={this.handleItemClick} selectedItem={selectedItem} />
        </div>
        <div className="flex flex-col bg-gray-800 w-[35%]">
          <div>
            <MiddleBar contacts={allChats} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
