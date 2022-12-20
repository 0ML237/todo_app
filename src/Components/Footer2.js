import React, { useEffect, useState } from "react";
import * as Md from "react-icons/md";
import * as Io from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Si from "react-icons/sl";
import * as Vs from "react-icons/vsc";
import * as Fa from "react-icons/fa";
import "./css/Footers.css";
import "../Pages/Css/Modalcss.css";
import useModal from "../Pages/useModal";
import Modal from "../Pages/TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { cleanTrash, deleteTask, restoreDeletedTask } from "../redux/slice";
import moment from 'moment';

const STATE = ["Work", "Started", "Completed"];

const Footer2 = ({ id, setId }) => {
  const data = useSelector((state) => state.todo);
  const [taskData, setTaskDate] = useState({});
  const {
    isShowing: isRegistrationFormShowed,
    editMode: editMode,
    setEditMode: setEditMode,
    toggle: toggleRegistrationForm,
  } = useModal();
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    title: "",
    description: "",
    state: "",
  });

  const handleDelete = () => {
    dispatch(deleteTask(id));
    setId(null);
  };
  const handleCleanTrash = () => {
    dispatch(cleanTrash(id));
    setId(null);
  };
  const handleRestore = () => {
    dispatch(restoreDeletedTask(id));
    setId(null);
  };


  // useEffect(() => {
  //   const t = useSelector((state) => state.todo.todo.find((t) => (t.id = id)));
  //   setTaskDate(t);
  // }, [id]);

  return (
    <div className="d_f">
      <div className="btn_list">
        {id && (
          <div className="btn_list1">
            <div className="f_btn2" onClick={() => handleDelete()}>
              <Vs.VscChromeClose />
            </div>
            <div className="f_btn3" onClick={() => handleRestore()}>
              <Md.MdOutlineRestore/>
            </div>
          </div>
        )}
        <div className="btn_list2">
          <div className="bg-red">
          <div className="f_btn8" onClick={handleCleanTrash}>
                <Fa.FaTrash />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
