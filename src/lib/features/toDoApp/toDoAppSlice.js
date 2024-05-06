import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
  taskToShow: null,
};

const toDoAppSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    showTask: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload) {
          state.taskToShow = task;
        }
      });
    },

    hideTask: (state, action) => {
      state.taskToShow = null;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.status = "loading";
        console.log("it is pending");
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
        console.log("tasks are", action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewTasks.pending, (state, action) => {
        state.status = "loading";
        console.log("it is pending");
      })
      .addCase(addNewTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addNewTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTasks.pending, (state, action) => {
        state.status = "loading";
        console.log("it is pending");
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.taskToShow !== null) {
          if (action.payload.id === state.taskToShow.id) {
            state.taskToShow = null;
          }
        }

        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );

        state.tasks.splice(index, 1);
        console.log("the problem", action.payload.id);
      })
      .addCase(deleteTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchTasks = createAsyncThunk(
  "toDo/fetchTasks",
  async (thunkAPI) => {
    try {
      const res = await axios.get("../api/toDoApp");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export const addNewTasks = createAsyncThunk(
  "toDo/AddNewTasks",
  async (taskToSend, thunkAPI) => {
    try {
      const res = await axios.post("../api/toDoApp", taskToSend);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export const deleteTasks = createAsyncThunk(
  "toDo/deleteTasks",
  async (idOfTaskToDelete, thunkAPI) => {
    try {
      const res = await axios.delete("../api/toDoApp" + `/${idOfTaskToDelete}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export const { showTask, hideTask } = toDoAppSlice.actions;

export const tasksReducer = toDoAppSlice.reducer;
