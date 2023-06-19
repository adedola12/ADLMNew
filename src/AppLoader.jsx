import React from "react";
import AppContext from "./AppContext";
import logo from "./images/logo/1 (36).png";

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

import { render } from "react-dom";

// import * as fire_base from 'firebase'
import fire_base from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

global.firebase = fire_base;

const firebaseConfig = {
  apiKey: "AIzaSyAyeJ9JqStUua2PRhwNMzag9g5bXpRYYZU",
  authDomain: "adlm-site.firebaseapp.com",
  projectId: "adlm-site",
  storageBucket: "adlm-site.appspot.com",
  messagingSenderId: "484981445464",
  appId: "1:484981445464:web:cad4551dfd5a78c0584b2d",
  measurementId: "G-SYS60NRJ9W",
};

// Initialize Firebase
global.firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

function AppLoader() {
  const initFirebase = async () => {
    global.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("You are signed in...");
      } else {
        console.log("You are guest...");
      }
    });
  };

  const splash = (context) => {
    return (
      <div className="App flex">
        <div className="splash abs abc">
          <img src={logo} className="bl" alt="side-img" />
        </div>
      </div>
    );
  };

  const loadApp = async (context) => {
    await initFirebase();
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        return context.appLoaded() ? (
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
        ) : (
          <AppContext.Consumer>
            {(context) => {
              loadApp(context);
              return splash(context);
            }}{" "}
          </AppContext.Consumer>
        );
      }}
    </AppContext.Consumer>
  );
}

export default AppLoader;
