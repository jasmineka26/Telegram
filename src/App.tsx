import React from "react";
import "./App.css";
import SortTab from "./components/SortTab";
import MiddleBar from "./components/MiddleBar";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  render() {
    return (
      <div className="flex flex-row bg-slate-950 h-screen">
        <div className="flex flex-col items-center bg-yellow-600 h-screen ">
          <SortTab />
        </div>
        <div className="flex flex-col bg-gray-800 w-[35%] p-4">
          <div>
            <MiddleBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
