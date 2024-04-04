import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65e83f374bb72f0a9c4eb8c8.mockapi.io/api/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (page, thunkAPI) => {
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
      const filteredMake = data.filter((advert) => advert.make === filter.make);
      const filteredPrice = data.filter(
        (advert) => Number(advert.rentalPrice.split("$")[1]) <= filter.price
      );
      let filteredData = [];
      if (filteredMake.length !== 0 && filteredPrice.length !== 0) {
        filteredData = filteredMake.filter((element) =>
          filteredPrice.includes(element)
        );
      } else {
        if (filteredMake.length !== 0 && filteredPrice.length === 0) {
          filteredData = filteredMake;
        } else if (filteredPrice.length !== 0 && filteredMake.length === 0) {
          filteredData = filteredPrice;
        }
      }
      return filteredData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
