import React, { Component } from "react";
import * as GrIcons from "react-icons/gr";
import * as HI from "react-icons/hi";
import * as Bi from "react-icons/bi";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";
import "./css/Asides.css";

class Aside extends Component {
  render() {
    return (
      <>
        <div className="asd-contain">
          <div className="aside-container">
            <div className="menu1">
              <div className="item">
                <GrIcons.GrInbox className="icon" /> Inbox
              </div>
              <div className="item">
                <HI.HiOutlineStar className="icon" /> Today
              </div>
              <div className="item">
                <Fa.FaRegListAlt className="icon" /> Upcoming
              </div>
              <div className="item">
                <Md.MdDone className="icon" /> Completed
              </div>
              <div className="item">
                <Bi.BiTrashAlt className="icon" /> Trash
              </div>
            </div>

            <div className="menu2">
              <div className="titre">PROJECTS</div>
              <div className="item">
                <Bs.BsList className="icon2" /> EverDo
              </div>
              <div className="item">
                <Bs.BsList className="icon2" /> GemShack
              </div>
              <div className="item">
                <Bs.BsList className="icon2" /> Rubicon
              </div>
            </div>

            <div className="menu2">
              <div className="titre">PERSONAL</div>
              <div className="item">
                <Bs.BsList className="icon2" /> Shopping
              </div>
              <div className="item">
                <Bs.BsList className="icon2" /> Health
              </div>
              <div className="item">
                <Bs.BsList className="icon2" /> Entertainment
              </div>
            </div>

            <div className="menu2">
              <div className="titre">LEARNING</div>
              <div className="item">
                <Bs.BsList className="icon2" /> Electron
              </div>
              <div className="item">
                <Bs.BsList className="icon2" /> Flexbox
              </div>
            </div>
          </div>
        </div>
        <div className="p_container">
          <span className="plus">
            <Ai.AiOutlinePlus />
          </span>

          <label
            for="check"
            className="bg-gray-100 cursor-pointer relativ w-20 h-10 rounded-full"
          >
            <input type="checkbox" id="check" class="sr-only" />
            <span className="w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500"></span>
          </label>
        </div>
      </>
    );
  }
}
export default Aside;
