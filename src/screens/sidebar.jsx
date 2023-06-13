import React, { useEffect, useState } from "react";
import logo from "../images/logo/1 (36).png";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "fa-house" },
    { label: "About", slug: "about", icon: "fa-address-card" },
    { label: "Categories", slug: "categories", icon: "fa-rectangle-list" },
    { label: "My Courses", slug: "my-courses", icon: "fa-graduation-cap" },
  ]);

  const [currentPage, setCurrentPage] = useState("/");
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a
          href={nav[i].slug}
          className={
            "aic link noul flex c333" +
            (currentPage == nav[i].slug ? " on" : "")
          }
        >
          <i class={"fa-solid s24 " + nav[i].icon} />
          <h2 className="label s24">{nav[i].label}</h2>
        </a>
      </li>
    );
  }

  const showButton = () => {
    if (window.innerWidth <= 1080) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div className="sidebar rel">
      <a href="#" className="logo bl ">
        <img src={logo} className="bl" alt="side-img" />
      </a>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
        <div className={click ? "active sidebar-click" : "nil"}>
          <ul className="nav">{navigation}</ul>

          <div className="updated-course flex aic">
            <i class="fa-solid fa-fire" />

            <div className="label s15 fontb c333">
              Course update
              <h2 className="author s13 c777">by author</h2>
            </div>
          </div>

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
          </div>

          <div className="me flex aic">
            <div className="photo cff s24">
              <img src="https://placeimg.com/100/100/people" className="blk" />
            </div>

            <div className="label s15 fontb c333">
              Student Name
              <h2 className="author s13 c777">@studentname</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
