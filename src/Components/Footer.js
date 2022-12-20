import React, { useEffect, useState } from "react";
import * as Md from "react-icons/md";
import * as Io from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Si from "react-icons/sl";
import * as Vs from "react-icons/vsc";
import "./css/Footers.css";
import "../Pages/Css/Modalcss.css";
import useModal from "../Pages/useModal";
import Modal from "../Pages/TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deletedTempTask,updateTask} from "../redux/slice";
import moment from 'moment';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schema/formSchema";



const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";


const STATE = ["In Progress", "Waiting", "Approuved", "In Review", "Finish"];

const Footer = ({ id, setId }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // const formSubmitHandler = (data) => {
  //   console.log(data);
  // };

  const data = useSelector((state) => state.todo.results);
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
    date: "",
    state: "",
    logo:null
  });

  const formSubmitHandler = (data1)=> {
    console.log('data form: ', data1)
    const formData = new FormData();
    formData.append("title", task.title);
    formData.append("date",task.date );
    formData.append("description", task.description);
    formData.append("state", task.state);
    formData.append("logo", task.logo);


  //   let data = { moment().startOf(Date.now()).fromNow()
  //    date : task.date,
  //    title : task.title,
  //    description : task.description,
  //    state : task.state,
  //    ...task,
  //  };

    if (editMode){
      formData.append("id", task.id);
      dispatch(updateTask(formData));
      setTask({
        ...task,
        title: "",
        description: "",
        date: "",
        state: "",
        logo:null,
      });
      setEditMode(false);
      toggleRegistrationForm();
      setId(null)
    }else{
      // data = {...data,
      //   id: Date.now(),
      //   date: moment().startOf(Date.now()).fromNow(),
      //   // date: new Date().toISOString(),
      // };
      dispatch(addTask(formData));
      setTask({
        ...task,
        title: "",
        description: "",
        date: "",
        state: "",
        logo:"",
      });
      toggleRegistrationForm();
    }
  };


  const handleDelete = () => {
    dispatch(deletedTempTask(id));
    setId(null);
  };
  const handleEditTask = () => {
    toggleRegistrationForm();
    setEditMode(true);
    dispatch(updateTask(id));
  };

  const handleValidate = () => {
    dispatch(updateTask(id));
  }

  //pour récupérer la tache correspondante à l'id sélectionnée
  useEffect(() => {
    if(id){
      const t = data.find((t) => (t.id == id))
      console.log(id)
      console.log(t)
      setTask(t);
    }
  }, [id]); 

  const intupFileChange = async (e) => {
    console.log('inputname:', e.target.files[0]);
    console.log("***************file************")
    setTask({...task, logo: e.target.files[0]});
  }

  return (
    <div className="d_f">
      <div className="btn_list">
        {id ? (
          <div className="btn_list1">
            <div className="f_btn1" >
              <div>
                <Md.MdDone onClick={() => handleValidate()}/>  
              </div>
            </div>
            <div className="f_btn2" onClick={() => handleDelete()}>
              <Vs.VscChromeClose />
            </div>
            <div className="f_btn3" onClick={() => handleEditTask()}>
              {/* <Si.SlArrowRight /> */}
              <Ai.AiOutlineEdit/>
            </div>
            <div className="f_btn4">
              <Ai.AiOutlineCalendar />
            </div>
            <div className="f_btn5">
              <Md.MdLabelOutline />
            </div>
            <div className="f_btn6">
              <Io.FaSearch />
            </div>
            <div className="f_btn7">
              <Md.MdOutlineFileDownload />
            </div>
          </div>
        ) : <div className="flex flex-row-reverse ">
              <div> </div>
              <div className="flex-row-reverse">
              <div className="f_btn8" onClick={toggleRegistrationForm}>
                <Ai.AiOutlinePlus />
              </div>
              </div>
          </div>}
        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title={`${editMode ? "Modifier" : "Nouvelle tache"}`}
          setEditMode={setEditMode}
        >
          <div className="md:w-[450px] bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
            <form onSubmit={formSubmitHandler} className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Titre
                </label>
                <input
                  {...register("title")}
                  value={task.title}
                  onChange={(e) => setTask({ ...task, title: e.target.value })}
                  type="text"
                  name="title"
                  id="title"
                  className={textInputClassName}
                  placeholder="Titre de la tache"
                />
                {errors.title ? (
                  <span className="text-red-900">{errors.title.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Description
                </label>
                <input
                  {...register("description")}
                  value={task.description}
                  onChange={({ target }) =>
                    setTask((t) => ({ ...t, description: target.value }))
                  }
                  type="text"
                  name="description"
                  id="description"
                  className={textInputClassName}
                  placeholder="Description de la tache"
                />
                {errors.description ? (
                  <span className="text-red-900">{errors.description.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Date
                </label>
                <input
                  {...register("date")}
                  value={task.date}
                  onChange={({ target }) =>
                    setTask((t) => ({ ...t, date: target.value }))
                  }
                  type="date"
                  name="date"
                  id="date"
                  className={textInputClassName}
                />
                {errors.date ? (
                  <span className="text-red-900">{errors.date.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Statut
                </label>
                <select
                  {...register("state")}
                  value={task.state}
                  onChange={(e) => setTask({ ...task, state: e.target.value })}
                  name="state"
                  id="state"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {STATE.map((state, i) => (
                      <option key={i} value={state}>
                        {state}
                      </option>
                    ))}
                </select>{" "}
                {errors.state ? (
                  <span className="text-red-900">{errors.state.message}</span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="logo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Image
                </label>
                <input
                  {...register("logo")}
                  onChange={(e) => intupFileChange(e)}
                  type="file"
                  name="logo"
                  id="logo"
                  className={textInputClassName}
                />
              </div>
              <div className="flex justify-between mb-6">
                <div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <button 
                        className="text-blue bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        {toggleRegistrationForm}
                        Annuler
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        type="submit"
                        className="text-white bg-blue-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      
                        value={`${editMode ? "Mettre a jour" : "Enregistrer"}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
