import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { apiAddTask, apiDeleteTask, apiDeleteTempTask, apiGetPaginateTask, apiRestoreDeletedTask, apiUpdateTask } from "./api";

const initialState = {
  todo: {
    results:[]
  },
  trash: [],
};
export const addTask = createAsyncThunk(
  "task/addTask",
  async (id, thunkAPI) => {
    const res = await apiAddTask(id);
    return res.data;
  }
  );
export const getPaginateTask = createAsyncThunk(
  "task/getPaginateTask",
  async (p, thunkAPI) => {
    const res = await apiGetPaginateTask(p);
    return res.data;
  }
)
export const deletedTempTask = createAsyncThunk(
    "task/deleteTempTask",
    async (id, thunkAPI) => {
      const res = await apiDeleteTempTask(id);
      return res.data;
    }
  );
export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id, thunkAPI) => {
    const res = await apiDeleteTask(id);
    return res.data;
  }
);
export const restoreDeletedTask = createAsyncThunk(
  "task/restoreDeletedTask",
  async (id, thunkAPI) => {
    const res = await apiRestoreDeletedTask(id);
    return res.data;
  }
);
export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (id, thunkAPI) => {
    const res = await apiUpdateTask(id);
    return res.data;
  }
);


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    cleanTrash: (state) => {
      return {
        ...state,
        trash: [],
      };
    },





    /////////////////////////////////////////////
    getAllTask:(state, action) => {
      return { todo: action.payload };
    },
    
    // getAllDeletedTask:(state, action) => {
    //   return { trash: action.payload };
    // },
    

  },
  extraReducers: (builder) => {
    builder.addCase(addTask.fulfilled, (state, action) => {
      const data = action.payload;
      const task = state.todo.filter((task) => task.id !== data.id);
      task.push({ ...data});
      return {
        ...state,
        todo: task,
      };
    });
    builder.addCase(getPaginateTask.fulfilled, (state, action) => {
      const data = action.payload;
      return {
        ...state,
        todo: data,
      };
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      const data = action.payload;
      const task = state.todo.filter((task) => task.id !== data.id);
      task.push({...data});
      return {
        ...state,
        todo: task,
      };
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      return {
        ...state,
        todo: state.todo.filter((t) => t.id !== action.payload.data),
      };
    });
    builder.addCase(deletedTempTask.fulfilled, (state, action) => {
      const data = action.payload.data;
      state.todo.map((task =>{
        if(task.id == data){
          task.is_deleted = true;
        }
      }))
    });
    builder.addCase(restoreDeletedTask.fulfilled, (state, action) => {
      const data = action.payload.data;
      state.todo.map((task)=>{
        if(task.id ==data){
          task.is_deleted = false;
        }
      })
    });

  },

});

export const { cleanTrash,getAllTask,getAllDeletedTask } = todoSlice.actions;






// const saveTask = (state) => {
//   localStorage.setItem("taskData", JSON.stringify(state));
// };