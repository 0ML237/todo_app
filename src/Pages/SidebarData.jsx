import React from "react";
import * as HI from "react-icons/hi";
import * as Bi from "react-icons/bi";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";

export const SidebarData = [
  {
    title: "Inbox",
    path: "/",
    icon: <Ai.AiOutlineInbox />,
    cName: "iteme ",
  },
  {
    title: "Today",
    path: "/Today",
    icon: <HI.HiOutlineStar />,
    cName: "iteme",
  },
  {
    title: "Upcoming",
    path: "/Upcoming",
    icon: <Fa.FaRegListAlt />,
    cName: "iteme",
  },
  {
    title: "Completed",
    path: "/Completed",
    icon: <Md.MdDone />,
    cName: "iteme",
  },
  {
    title: "Trash",
    path: "/Trash",
    icon: <Bi.BiTrashAlt />,
    cName: "iteme",
  },
];
