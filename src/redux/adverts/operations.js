import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65e83f374bb72f0a9c4eb8c8.mockapi.io/api/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
