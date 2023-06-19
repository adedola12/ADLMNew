import React, { useState } from "react";
import Course1 from "../images/courses/bimbi.jpg";
import Course2 from "../images/courses/bbmi.jpg";

import {NavLink} from "react-router-dom"

function Course(Props) {
  const [click, setClick] = useState(false);
  const [clickVol, setClickVol] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick2 = () => setClick(!clickVol);


  const [course, setCourse] = useState([
    {
      ID: 1,
      title: "ADLM BIM Course on Architectural Works in 70min",
      about:
        "This course covers 3D to 5D architectural design using BIM software such as Revit, Navisworks, MS project, and Planswift. <br/> It emphasizes on interoperability and clash detection between Architectural and Structural design.",
      tutor: {
        ID: 1,
        name: "Adedolapo Quasim",
        username: "adedolapo",
        dp: "https://placebeard.it/100/100?tutor-" + 1,
      },
      duration: "70min",
      Poster: Course1,
    },
  ]);

  const [watch, setWatch] = useState([
    {
      ID: 1,
      name: "Adedolapo Quasim",
      username: "adedolapo",
      dp: "https://placebeard.it/100/100?tutor-" + 1,
    },
    {
      ID: 2,
      name: "Adedolapo Quasim",
      username: "adedolapo",
      dp: "https://placebeard.it/100/100?tutor-" + 2,
    },
    {
      ID: 3,
      name: "Adedolapo Quasim",
      username: "adedolapo",
      dp: "https://placebeard.it/100/100?tutor-" + 3,
    },
  ]);

  const [details, setDetails] = useState([
    {
      ID: 1,
      part: 1,
      topic: "Introduction",
      duration: "03min, 24sec",
      dp: "https://placebeard.it/100/100?guest-" + 1,
    },
    {
      ID: 2,
      part: 2,
      topic: "Getting Started",
      duration: "09min, 58sec",
      dp: "https://placebeard.it/100/100?guest-" + 2,
    },
    {
      ID: 3,
      part: 3,
      topic: "The Illustration",
      duration: "62min, 48sec",
      dp: "https://placebeard.it/100/100?guest-" + 3,
    },
  ]);

  // const courseID = Props.match.params.courseid

  // Course List
  var courseList = [];

  for (let i = 0; i < course.length; i++) {
    courseList.push(
      <div className="course-page rel">
        <div className="tutor rel flex aic">
          <div className="pic">
            <img src={course[i].tutor.dp} className="bl" />
          </div>

          <div className="meta rel">
            <h2 className="s15 name fontb c333">{course[i].tutor.name}</h2>
            <h2 className="s13 uname fontn c777">Course Tutor</h2>
          </div>
          <a href="#">
            <i class="fa-solid fa-plus" />
          </a>
        </div>

        <div className="course-meta">
          <h2 className="s24 title fontb">{course[i].title}</h2>
          <p
            className="s18 about fontn c777"
            dangerouslySetInnerHTML={{ __html: course[i].about }}
          />
        </div>
      </div>
    );
  }

  // Course Breakdown

  var courseVideos = [];

  for (let i = 0; i < details.length; i++) {
    courseVideos.push(
      <a href="#" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontb c777 topic-num">{details[i].part}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{details[i].topic}</h1>
          <h1 className="s13 dur fontn c777">{details[i].duration}</h1>
        </div>
      </a>
    );
  }

  // Now Watching

  var nowWatching = [];

  for (let i = 0; i < watch.length; i++) {
    nowWatching.push(
      <div className="tutor rel flex aic">
        <div className="pic">
          <img src={watch[i].dp} className="bl" />
        </div>

        <div className="meta rel">
          <h2 className="s15 name fontb c333">{watch[i].name}</h2>
          <h2 className="s13 uname fontn c777">{watch[i].username}</h2>
        </div>
        <a href="#">
          <i class="fa-solid fa-plus" />
        </a>
      </div>
    );
  }


  return (  
    <div className="about-summary rel flex">
      <div className="course-info rel">
        {courseList}

        <div className="section-tut rel">
          <h2 className="title s24 fontb">
            Course <span className="fontn">Achievements</span>{" "}
          </h2>

          <div className="progress flex aic">
            <div className="pro-item">
              <i class="fa-sharp fa-solid fa-ribbon rib" />
              <h2 className="val s15 fontb c333">1800</h2>
              <h2 className="label s13 c777 point">points</h2>
            </div>

            <div className="pro-item">
              <i class="fa-sharp fa-solid fa-battery-half bat" />
              <h2 className="val s15 fontb c333">45.3% </h2>
              <h2 className="label s13 c777 point">completed</h2>
            </div>

            <div className="pro-item">
              <i class="fa-sharp fa-solid fa-battery-half lvl" />
              <h2 className="val s15 fontb c333">+26 </h2>
              <h2 className="label s13 c777 point">level up</h2>
            </div>
          </div>
        </div>

        <div className="topic-section rel">
          <h2 className="title s24 fontb">
            Course <span className="fontn">Details</span>{" "}
          </h2>
          <div className="course-vid aic flex">{courseVideos}</div>
        </div>
      </div>

      <div className="course-preview rel">
        <div className="player rel">
          <video poster={Course1} />
          <div className="ctrls abs aic flex">
            <button className="icon-pause s24 pp" onClick={handleClick}>
              <i class={click ? "fa-solid fa-pause" : "fa-solid fa-play"} />{" "}
            </button>
            <div className="timer rel fontn s15 cfff">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <button className="icon-volume-100 s24 vol" onClick={handleClick2}>
              <i
                class={
                  click ? "fa-solid fa-volume-off" : "fa-solid fa-volume-high"
                }
              />
            </button>
            <button className="icon-full-screen-enter2 s24 fs">
              <i class="fa-solid fa-expand" />
            </button>
          </div>
        </div>

        <div className="new-section rel flex">
          <div className="chat-box rel">
            <h2 className="title s24 fontb">
              Quick <span className="fontn">Chat</span>
            </h2>
            <div className="messages aic flex">
              <div className="bubble rel">
                <h2 className="txt ibl fontn s15 c333">I an a newbie</h2>
              </div>
              <div className="bubble rel">
                <h2 className="txt ibl fontn s15 c333">Love this course</h2>
              </div>
              <div className="bubble bubble-mine rel">
                <h2 className="txt ibl fontn s15 c333">Hey</h2>
              </div>
              <div className="bubble bubble-mine rel">
                <h2 className="txt ibl s15 fontn c333">Dope introduction Thanks</h2>
              </div>
            </div>
          </div>

          <div className="now-watching ">
          <div className="tooltip abs s13 fontb cfff">
            86 Live Now
          </div>
            <h2 className="title s24 fontb">
              Now <span className="fontn">watching</span>
            </h2>
            <div className="you-list">{nowWatching}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
