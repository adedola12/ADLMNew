import React from "react";
import "./css/App.css";
import "./css/props.css";

import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import Home from "./screens/home";
import Rightbar from "./screens/rightbar";
import Discovery from "./screens/discovery";
import Course from "./screens/course";
import Categories from "./screens/categories";
import Mycourses from "./screens/mycourses";

import { Route, NavLink, HashRouter, Routes } from "react-router-dom";


function App() {
  {
    /* <Rightbar /> */
  }



  return (
    <div className="App flex">
      <HashRouter>
        <Sidebar />
        <div className="app-content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/course/:courseid" Component={Course} />
            <Route path="/about" Component={Discovery} />
            <Route path="/categories" Component={Categories} />
            <Route path="/course" Component={Mycourses} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
