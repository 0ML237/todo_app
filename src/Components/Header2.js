import React, { useEffect, useState } from "react";
import "./css/S_header.css";

export default function Header(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="h_container">
      <div className="h_topText">
        <label className="h_everdo"> EverDo - </label> MVP{" "}
      </div>
      <div className="h_nav">
        <h1 className="text-6xl">Trash</h1>,
       
        <button onClick={toggleNavSmallScreen} className="btn">
          BTN
        </button>
      </div>
      <div className="l_list">
        <label className="l_item1">
          <span className="number">10 </span> List of deleted tasks  
        </label>
      </div>
    </div>
  );
}
