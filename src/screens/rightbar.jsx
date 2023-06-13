import React, { useState } from "react";
import Course1 from "../images/courses/plswi.jpg";
import Course2 from "../images/courses/mspi.jpg";
import Course3 from "../images/courses/plswi.jpg";
import Cake from "../images/bcake.png";

function Rightbar() {
  const [courseUpdate, setCostUpdate] = useState([
    {
      ID: 1,
      title: "ADLM Microsoft Project COurse",
      tutor: {
        ID: 1,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutor-" + 1,
      },
      duration: "70min",
      Poster: Course2,
    },
    {
      ID: 2,
      title: "ADLM Planswift Plugin",
      tutor: {
        ID: 2,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutor-" + 2,
      },
      duration: "70min",
      Poster: Course3,
    },
    {
      ID: 3,
      title: "ADLM Planswift Course",
      tutor: {
        ID: 3,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutor-" + 3,
      },
      duration: "70min",
      Poster: Course1,
    },
  ]);

  //Course List
  var courseList = [];

  for (let i = 0; i < courseUpdate.length; i++) {
    courseList.push(
      <a href="#" className="course rel" key={"course-live-" + i}>
        <div
          className="block rel"
          style={{
            background:
              "#f0eeee url(" + courseUpdate[i].Poster + ") no-repeat center",
          }}
        >
          <div className="user abs flex aic">
            <div className="pic">
              <img src={courseUpdate[i].tutor.dp} className="bl" />
            </div>

            <div className="meta rel">
              <h2 className="s15 name fontb cfff">
                {courseUpdate[i].tutor.name}
              </h2>
              <h2 className="s13 uname fontn cfff">
                @{courseUpdate[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="dura abs">
            <h2 className="s13 fontb cfff">{courseUpdate[i].duration}</h2>
          </div>

          <div className="tit abs">
            <h2 className="s13 fontb white">{courseUpdate[i].title}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="rightbar rel">
      {/* SEARCH BAR */}
      <div className="section rel">
        <h2 className="search s24 fontb">
          Advanced <span className="fontn">Search</span>
        </h2>
        <div className="search-bar rel flex">
          <input
            type="text"
            placeholder="Start writing something..."
            className="search-input s15 fontb"
          ></input>
          <button className="go s15 fontb white">Find</button>
        </div>
      </div>

      {/* COURSE BAR */}
      <div className="section section-b rel">
        <div className="courses rel flex">
          <div className="course-a">{courseList[0]}</div>
          <div className="col flex">
            {courseList[1]} {courseList[2]}
          </div>
        </div>
      </div>

      {/* SPECIAL OFFERS*/}
      <div className="offer rel">
        <h2 className="s24 fontb">
          Special <span className="fontn">Offers</span>
        </h2>
        <div className="spec rel flex">
          <div className="spec-o rel">
            <h2 className="fontb s20 h1">50 Days of Premium</h2>
            <p className="s15 fontb h2">Get it Before 01.01.2020</p>
            <button className="btn-o noul fontb s15">Learn More</button>
          </div>
          <div className="vector rel">
            <img src={Cake} alt="icn"/>
          </div>
          <div className="ring abs">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
