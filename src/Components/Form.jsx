import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "../../schema/formSchema";

const textInputClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="md:w-[500px] shadow-sm shadow-white bg-white w-[320px] mx-auto px-7 py-4 rounded-xl">
      <form onSubmit={handleSubmit()} className="w-full">
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
          {errors.email ? (
            <span className="text-blue-900">{errors.title.message}</span>
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
          {errors.password ? (
            <span className="text-blue-900">{errors.description.message}</span>
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
          {errors.password ? (
            <span className="text-blue-900">{errors.date.message}</span>
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
          {errors.accountType ? (
            <span className="text-red-900">{errors.state.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Image
          </label>
          <input
            {...register("image")}

            type="file"
            name="image"
            id="image"
            className={textInputClassName}
          />
          {errors.password ? (
            <span className="text-blue-900">{errors.image.message}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between mb-6">
          <div>
            <div className="flex">
              <div className="flex items-center h-5">
                <button
                  type="cancel"
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
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                
                  value={`${editMode ? "Mettre a jour" : "Enregistrer"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;






























































// { todo.todo.results.map((task) =>
//   {if (task.is_deleted == false && task.date === today && title == "Today Tasks"){
//     if(task.state == "Finish"){
//       return (<div
//         key={task.id}
//         className="card2"
//         onClick={() => changeSelectedMode(task)}
//         style={{
//           border: id === task.id && `1px solid rgba(0,0,0,.2)`,
//         }}
//       >
//         <div className="h_card">
//           <label>{task.date}</label>
//           <div className="etat2">{task.state}</div>
//         </div>
//         <div className="t_card2">
//           <h4>{task.title}</h4>
//         </div>
//         <div className="p_card">
//           <p>{task.description}</p>
//         </div>
//       </div>)
//     }else{
//       return (<div
//         key={task.id}
//         className="card"
//         onClick={() => changeSelectedMode(task)}
//         style={{
//           border: id === task.id && `1px solid rgba(0,0,0,.2)`,
//         }}
//       >
//         <div className="h_card">
//           <label>{task.date}</label>
//           <div className="etat">{task.state}</div>
//         </div>
//         <div className="t_card">
//           <h4>{task.title}</h4>
//         </div>
//         <div className="p_card">
//           <p>{task.description}</p>
//         </div>
//       </div>)
//     }
//   }else if (task.is_deleted == false && title == "Inbox"){
//     if(task.state == "Finish"){
//       return (<div
//         key={task.id}
//         className="card2"
//         onClick={() => changeSelectedMode(task)}
//         style={{
//           border: id === task.id && `1px solid rgba(0,0,0,.2)`,
//         }}
//       >
//         <div className="h_card">
//           <label>{task.date}</label>
//           <div className="etat2">{task.state}</div>
//         </div>
//         <div className="t_card2">
//           <h4>{task.title}</h4>
//         </div>
//         <div className="p_card">
//           <p>{task.description}</p>
//         </div>
//       </div>)
//     }else{
//       return (<div
//         key={task.id}
//         className="card"
//         onClick={() => changeSelectedMode(task)}
//         style={{
//           border: id === task.id && `1px solid rgba(0,0,0,.2)`,
//         }}
//       >
//         <div className="h_card">
//           <label>{task.date}</label>
//           <div className="etat">{task.state}</div>
//         </div>
//         <div className="t_card">
//           <h4>{task.title}</h4>
//         </div>
//         <div className="p_card">
//           <p>{task.description}</p>
//         </div>
//       </div>)
//     }
   
//   }else if (task.is_deleted == false && task.state === "Finish" && title == "Completed Tasks"){
//     return (<div
//       key={task.id}
//       className="card2"
//       onClick={() => changeSelectedMode(task)}
//       style={{
//         border: id === task.id && `1px solid rgba(0,0,0,.2)`,
//       }}
//     >
//       <div className="h_card">
//         <label>{task.date}</label>
//         <div className="etat2">{task.state}</div>
//       </div>
//       <div className="t_card2">
//         <h4>{task.title}</h4>
//       </div>
//       <div className="p_card">
//         <p>{task.description}</p>
//       </div>
//     </div>)
//   }else if (task.is_deleted == false && task.date > today && title == "Upcoming Tasks"){
//     return (<div
//       key={task.id}
//       className="card"
//       onClick={() => changeSelectedMode(task)}
//       style={{
//         border: id === task.id && `1px solid rgba(0,0,0,.2)`,
//       }}
//     >
//       <div className="h_card">
//         <label>{task.date}</label>
//         <div className="etat">{task.state}</div>
//       </div>
//       <div className="t_card">
//         <h4>{task.title}</h4>
//       </div>
//       <div className="p_card">
//         <p>{task.description}</p>
//       </div>
//     </div>)}
// } )
// }


















{if (title == "Today Tasks"){
  todo.todo.results.map((task) =>
    {if(task.is_deleted == false && task.date === today){
      if(task.state == "Finish"){
        return (<div
          key={task.id}
          className="card2"
          onClick={() => changeSelectedMode(task)}
          style={{
            border: id === task.id && `1px solid rgba(0,0,0,.2)`,
          }}
        >
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
        </div>)
      }}})
}}
{if (title == "Inbox"){
  todo.todo.results.map((task) =>
    {if(task.is_deleted == false){
      if(task.state == "Finish"){
        return (<div
          key={task.id}
          className="card2"
          onClick={() => changeSelectedMode(task)}
          style={{
            border: id === task.id && `1px solid rgba(0,0,0,.2)`,
          }}
        >
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
        </div>)
      }}})
}}
{if (title == "Completed Tasks"){
  todo.todo.results.map((task) =>
    {if(task.is_deleted == false && task.state == "Finish"){
        return (<div
          key={task.id}
          className="card2"
          onClick={() => changeSelectedMode(task)}
          style={{
            border: id === task.id && `1px solid rgba(0,0,0,.2)`,
          }}
        >
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
        </div>)
      }})
}}
{if (title == "Upcoming Tasks"){
  todo.todo.results.map((task) =>
    {if(task.is_deleted == false && task.date > today){
      if(task.state == "Finish"){
        return (<div
          key={task.id}
          className="card2"
          onClick={() => changeSelectedMode(task)}
          style={{
            border: id === task.id && `1px solid rgba(0,0,0,.2)`,
          }}
        >
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
        </div>)
      }}})
}}













/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////



const [pageNumber, setPageNumber] = useState(0)

const taskPerPage = 4
const pagesVisited = pageNumber * taskPerPage

const displayTasks = results.slice(pagesVisited, pagesVisited + taskPerPage).map((task) => {
    if(task.is_deleted == false){
      if(task.state == "Finish"){
        return (<div
          key={task.id}
          className="card2"
          onClick={() => changeSelectedMode(task)}
          style={{
            border: id === task.id && `1px solid rgba(0,0,0,.2)`,
          }}
        >
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
        </div>)
      }}
  })

const pageCount = Math.ceil(results.length / taskPerPage);

const changePage = ({ selected }) => {
  setPageNumber(selected);
};




          
<ReactPaginate
previousLabel = {"Previous"}
nextLabel = {"Next"}
pageCount = {pageCount}
onPageChange = {changePage}
containerClassName = {"paginationBttns"}
previousLinkClassName = {"previousBttn"}
nextLinkClassName = {"nextBttn"}
disabledClassName = {"paginationDisabled"}
activeClassName = {"paginationActive"}
/>