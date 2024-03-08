import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
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
