import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65e83f374bb72f0a9c4eb8c8.mockapi.io/api/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=12`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const filterAdverts = createAsyncThunk(
  "adverts/filterAdverts",
  async (filter, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);
      const data = response.data;
      const filteredData = data.filter((advert) => advert.make === filter);
      return filteredData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
