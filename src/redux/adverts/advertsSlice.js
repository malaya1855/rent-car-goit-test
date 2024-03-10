import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchMoreAdverts, filterAdverts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isFiltered: false,
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.isFiltered = false;
      })
      .addCase(fetchMoreAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        state.isFiltered = false;
      })
      .addCase(filterAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.isFiltered = true;
      })

      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      );
  },
});

export const advertsReducer = advertsSlice.reducer;
