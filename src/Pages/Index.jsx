import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { SidebarData2 } from "./SidebarData2";
import "./Css/Navbar.css";
import Inbox from "./Inbox";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const location = useLocation();

  const showSidebar = () => setSidebar(!sidebar);
  {
    /* useEffect nous permet de controler le cycle de vie du composant */
  }
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <>
      <div className="flex space-x-0 border-r-2 max-h-screen w-96">
        <div>
          <div className="asd-contain">
            <div className="aside-container">
              <div className="menu1">
                {SidebarData.map((item, index) => (
                  <div key={index} className={item.cName}>
                    {/* injecte la classe Link-actif en fonction du lien sur lequelle on se trouve */}
                    <Link
                      to={item.path}
                      className={`flex space-x-1 ${
                        item.path === currentPath && "Link-activ"
                      }`}
                    >
                      <span className="icon">{item.icon}</span>
                      <span> {item.title} </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="menu2">
                {SidebarData2.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="titre">{item.titre}</div>

                      <div className={item.cName}>
                        <Link to={item.path} className="flex space-x-1">
                          <span className="icon2">{item.icon}</span>
                          <span> {item.title} </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <span className="plus">
              <Ai.AiOutlinePlus />
            </span>
            <div className="toggle2">
              <div className="tog3"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
