import React, { useState } from "react";
import "./css/Product_plannings.css";
import * as Bs from "react-icons/bs";
import { useSelector } from "react-redux";
import moment from "moment";
import PaginationF from "./PaginationF";

const Product_planning = ({ id, setId, title }) => {
  const todo  = useSelector((state) => state.todo);
  const changeSelectedMode = (task) => {
    if(id === task.id){
      setId(null)
    }else{
      setId(task.id)
    }
  }

  let today =  new Date();
  let dd = String(today.getDate()).padStart(2,'0');
  let mm = String(today.getMonth() + 1).padStart(2,'0');
  let yyyy = today.getFullYear();
  today = yyyy+'-'+mm+'-'+dd;
  console.log(today)
  return (
    <div className="addTodos relative">
      <div className="p_up">
        <h2>{title}</h2>
        <span className="dot">
          <Bs.BsThreeDots />
        </span>
      </div>
      <div className="card_list"> 
        {todo.results.map((task) =>
            {if (task.is_deleted == false && task.date === today && title == "Today Tasks"){
              if(task.state == "Finish"){
                return (<div
                  key={task.id}
                  className="card2"
                  onClick={() => changeSelectedMode(task)}
                  style={{
                    border: id === task.id && `1px solid rgba(0,0,0,.2)`,
                  }}
                >
                  <div className="infoCard">
                    <div className="h_card">
                      <label>{task.date}</label>
                      <div className="etat2">{task.state}</div>
                    </div>
                    <div className="t_card2">
                      <h4>{task.title}</h4>
                    </div>
                    <div className="p_card">
                      <p>{task.description}</p>
                    </div>    
                  </div>    
                  <div className="imgCard">
                      <img src="" width="180" height="500"/>
                  </div>
                </div>)
              }else{
                return (<div
                  key={task.id}
                  className="card"
                  onClick={() => changeSelectedMode(task)}
                  style={{
                    border: id === task.id && `1px solid rgba(0,0,0,.2)`,
                  }}
                >
                  <div className="infoCard">
                    <div className="h_card">
                      <label>{task.date}</label>
                      <div className="etat">{task.state}</div>
                    </div>
                    <div className="t_card">
                      <h4>{task.title}</h4>
                    </div>
                    <div className="p_card">
                      <p>{task.description}</p>
                    </div>  
                  </div>        
                  <div className="imgCard">
                      <img src="" width="180" height="500"/>
                  </div>
                </div>)
              }
            }else if (task.is_deleted == false && title == "Inbox"){
              if(task.state == "Finish"){
                return (<div
                  key={task.id}
                  className="card2"
                  onClick={() => changeSelectedMode(task)}
                  style={{
                    border: id === task.id && `1px solid rgba(0,0,0,.2)`,
                  }}
                >
                  <div className="infoCard">
                    <div className="h_card">
                      <label>{task.date}</label>
                      <div className="etat2">{task.state}</div>
                    </div>
                    <div className="t_card2">
                      <h4>{task.title}</h4>
                    </div>
                    <div className="p_card">
                      <p>{task.description}</p>
                    </div>  
                  </div>          
                  <div className="imgCard">
                      <img src="" width="180" height="500"/>
                  </div>
                </div>)
              }else{
                return (<div
                  key={task.id}
                  className="card"
                  onClick={() => changeSelectedMode(task)}
                  style={{
                    border: id === task.id && `1px solid rgba(0,0,0,.2)`,
                  }}
                >
                  <div className="infoCard">
                    <div className="h_card">
                      <label>{task.date}</label>
                      <div className="etat">{task.state}</div>
                    </div>
                    <div className="t_card">
                      <h4>{task.title}</h4>
                    </div>
                    <div className="p_card">
                      <p>{task.description}</p>
                    </div>
                  </div>              
                  <div className="imgCard">
                      <img src="" width="180" height="500"/>
                  </div>
                </div>)
              }
             
            }else if (task.is_deleted == false && task.state === "Finish" && title == "Completed Tasks"){
              return (<div
                key={task.id}
                className="card2"
                onClick={() => changeSelectedMode(task)}
                style={{
                  border: id === task.id && `1px solid rgba(0,0,0,.2)`,
                }}
              >
                <div className="infoCard">
                  <div className="h_card">
                    <label>{task.date}</label>
                    <div className="etat2">{task.state}</div>
                  </div>
                  <div className="t_card2">
                    <h4>{task.title}</h4>
                  </div>
                  <div className="p_card">
                    <p>{task.description}</p>
                  </div> 
                </div>               
                <div className="imgCard">
                    <img src="" width="180" height="500"/>
                </div>
              </div>)
            }else if (task.is_deleted == false && task.date > today && title == "Upcoming Tasks"){
              return (<div
                key={task.id}
                className="card"
                onClick={() => changeSelectedMode(task)}
                style={{
                  border: id === task.id && `1px solid rgba(0,0,0,.2)`,
                }}
              >
                <div className="infoCard">
                  <div className="h_card">
                    <label>{task.date}</label>
                    <div className="etat">{task.state}</div>
                  </div>
                  <div className="t_card">
                    <h4>{task.title}</h4>
                  </div>
                  <div className="p_card">
                    <p>{task.description}</p>
                  </div>
                </div>
                <div className="imgCard">
                    <img src="" width="180" height="500"/>
                </div>
              </div>)}
          } )
        }
        
        <div className="card2">
          <div className="infoCard">
            <div className="h_card">
              <label>Date</label>
              <div className="etat2">Statut</div>
            </div>
            <div className="t_card2">
              <h4>
                Titre de la tache
              </h4>
            </div>
            <div className="p_card">
              <p>
                Description de la tache <br/> ...
              </p>
            </div>
          </div>
          <div className="imgCard">
              <img src="" width="180" height="500"/>
          </div>
        </div>
      </div>
      <PaginationF/>
    </div>
  );
};
export default Product_planning;
