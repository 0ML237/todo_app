import React, { useState } from "react";
import "./css/Product_plannings.css";
import * as Bs from "react-icons/bs";
import { useSelector } from "react-redux";

const Product_planning = ({ id, setId, title }) => {
    const todo  = useSelector((state) => state);
    const trash  = useSelector((state) => state.trash);
    const changeSelectedMode = (task) => {
      if(id === task.id){
        setId(null)
      }else{
        setId(task.id)
      }
    }

  return (
    <div className="addTodos2">  
      <div className="card_list">
        {todo.todo.results.map((task) => 
         {if (task.is_deleted == true){
          return (
            <div
            key={task.id}
            className="card3"
            onClick={() =>  changeSelectedMode(task)}
            style={{
              border: id === task.id && `1px solid rgba(0,0,0,.2)`,
            }}
          >
            <div className="infoCard">
              <div className="h_card">
                <label>{task.date}</label>
                <div className="etat3">{task.state}</div>
              </div>
              <div className="t_card3">
                <h4>{task.title}</h4>
              </div>
              <div className="p_card">
                <p>{task.description}</p>
              </div>
            </div>
            <div className="imgCard">
                <img src="" width="180" height="500"/>
            </div>
          </div>
          )}})}
      </div>
      <div className="p_up">
       
      </div>
    </div>
  );
};
export default Product_planning;
