import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskService from "../services/task.service";

const initialState = {
  todo: {
    results:[]
  },
  trash: [],
};

export const createTask = createAsyncThunk(
  "tasks/create",
  async ({ title, description }) => {
    const res = await taskService.create({ title, description });
    return res.data;
  }
);

export const getTasks = createAsyncThunk("tasks/getAll", async () => {
  const res = await taskService.getAll();
  return res.data;
});

export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({ id, data }) => {
    const res = await taskService.update(id, data);
    return res.data;
  }
);

export const deleteTask = createAsyncThunk("tasks/delete", async ({ id }) => {
  const res = await taskService.delete(id);
  return { id };
});

export const deleteAllTasks = createAsyncThunk("tasks/delete", async () => {
  const res = await taskService.deleteAll();
  return res.data;
});

export const findTaskByTitle = createAsyncThunk(
  "tasks/findByTitle",
  async ({ title }) => {
    const res = await taskService.findByTitle(title);
    return res.data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: {
    [createTask.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [updateTask.fulfilled]: (state, action) => {
      const index = state.finIndex((task) => task.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteTask.fulfilled]: (state, action) => {
      let index = state.finIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllTasks.fulfilled]: (state, action) => {
      return [];
    },
    [findTaskByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = todoSlice;
export default reducer;
