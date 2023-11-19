import React from "react";
import "./App.css";
import SortTab from "./components/SortTab";
import Profile from "./components/profile"; 

interface AppProps {
  isSelect: boolean;
}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {};
  render() {
    return (
      <div className="flex flex-row bg-slate-950 h-screen">
        <div className="flex flex-col items-center bg-yellow-600 h-screen ">
          <SortTab />
        </div>
        <div className="text-white">
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;
