import React, { useEffect, useState } from "react";
import axios from "axios";
import Index from "./Pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inbox from "./Pages/Inbox";
import Today from "./Pages/Today";
import Upcoming from "./Pages/Upcoming";
import Completed from "./Pages/Completed";
import Trash from "./Pages/Trash";
import EverDo from "./Pages/EverDo";
import LoginPage from "./Pages/LoginPage";
import "./Page.css";
import { getAllDeletedTask, getAllTask } from "./redux/slice";
import { apiGetAllDeletedTask, apiGetAllTask } from "./redux/api";
import { useDispatch } from "react-redux";

import PrivateRoutes from './utils/PrivateRoutes'
import {AuthProvider} from './context/AuthContext'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    apiGetAllTask().then(async (res) =>{
      if([200,201].includes(res.status)){
        dispatch(getAllTask(res.data));
      }
    }).catch(e => console.log('loading task error :',e));
   
  }, [dispatch]);

  return (
    <>
      <div className="page">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/Login" exact element={<LoginPage/>} />
              <Route path="/" exact element={<PrivateRoutes/>}>
                <Route exact path="/" element={<Inbox title="Inbox" />}/>
                <Route path="/Today" element={<Today title="Today Tasks" />} />
                <Route path="/Upcoming" element={<Upcoming title="Upcoming Tasks" />} />
                <Route path="/Completed" element={<Completed title="Completed Tasks" />} />
                <Route path="/Trash" element={<Trash title="Trash" />} />
                <Route path="/EverDo" element={<EverDo title="EVERDO Project" />} />
              </Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
};

export default App;




// apiGetAllDeletedTask().then(async (res) =>{
//   if([200,201].includes(res.status)){
//     dispatch(getAllDeletedTask(res.data));
//   }
// }).catch(e => console.log('loading task error :',e));
