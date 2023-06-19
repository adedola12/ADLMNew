import React, { useEffect, useState } from "react";
import Course1 from "../images/courses/bimbi.jpg";
import Course2 from "../images/courses/bbmi.jpg";
import {NavLink} from "react-router-dom"

function Home() {

useEffect(()=>{
  document.title = "Home-Page"
})

  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title: "ADLM BIM Course on Architectural Works in 70min",
      tutor: {
        ID: 1,
        name: "Adedolapo Quasim",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutor-" + 1,
      },
      duration: "70min",
      Poster: Course1
    },
    {
      ID: 2,
      title: "ADLM BIM Course on Mechanical Works in 70min",
      tutor: {
        ID: 2,
        name: "Adedolapo Quasim",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutor-" + 2,
      },
      duration: "70min",
      Poster: Course2,
    },
  ]);

  const [topTutor, setTopTutor] = useState([
    {
      ID: 1,
      tutor: {
        ID: 1,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutors-" + 1,
      }
    },
    {
      ID: 2,
      tutor: {
        ID: 2,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutors-" + 2,
      }
    },
    {
      ID: 3,
      tutor: {
        ID: 3,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "hhttps://placebeard.it/100/100?tutors-" + 3,
      }
    },
    {
      ID: 4,
      tutor: {
        ID: 4,
        name: "Adedolapo",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutors-" + 4,
      }
    }
  ]);

  // Tutor List
  var tutorList = [];

  for (let i = 0; i < 8; i++) {
    tutorList.push(
      <button className="tutor rel" key={"tutor-live-" + i}>
        <img src={"https://placebeard.it/100/100" + i} className="bl" />
      </button>
    );
  }

  // Course List
  var courseList = [];

  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <NavLink to={"/course/" + popularCourse[i].ID} className="course rel" key={"course-live-" + i}>
        <div
          className="block rel" 
          style={{
            background:
              "#f0eeee url(" + popularCourse[i].Poster + ") no-repeat center",
          }}
        >
          <div className="user abs flex aic">
            <div className="pic">
              <img src={popularCourse[i].tutor.dp} className="bl" />
            </div>

            <div className="meta rel">
              <h2 className="s15 name fontb ">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="s13 uname fontn ">
                @{popularCourse[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="dura abs">
            <h2 className="s13 fontb cfff">{popularCourse[i].duration}</h2>
          </div>

          <div className="tit abs">
            <h2 className="s15 fontb white">{popularCourse[i].title}</h2>
          </div>
        </div>
      </NavLink>
    );
  }

  // TopTutor List
  var topTutorList = [];

  for (let i = 0; i < topTutor.length; i++) {
    topTutorList.push(
      <a href="#" className="toptutor rel noul" key={"top-tutor-live-" + i}>
        <div className="topTutors flex aic">
          <div className="pic">
            <img src={topTutor[i].tutor.dp} className="bl" />
          </div>

          <div className="meta rel">
            <h2 className="s13 name fontb c333">
              {topTutor[i].tutor.name}
            </h2>
            <h2 className="s13 uname fontn c333">
              @{topTutor[i].tutor.username}
            </h2>
          </div>
          <i class="fa-solid fa-plus s28" />
        </div>
      </a>
    );
  }

  return (
    <div className="home-page rel">
      {/* TUTORS LIVE NOW */}
      <div className="section rel">
        <h2 className="title s24 fontb">
          Streaming <span className="fontn">Now</span>{" "}
        </h2>
        <div className="tutors rel flex">{tutorList}</div>
      </div>

      {/* POPULAR */}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular <span className="fontn">This Week</span>{" "}
        </h2>
        <div className="courses rel flex">{courseList}</div>
      </div>

      {/* Top Tutors */}
      <div className="section-tut rel">
        <h2 className="title s24 fontb">
          Top <span className="fontn">Tutors</span>{" "}
        </h2>
        <div className="top-tutors rel flex">{topTutorList}</div>
      </div>
    </div>
  );
}

export default Home;
