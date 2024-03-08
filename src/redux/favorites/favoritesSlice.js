import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },

    removeFavorites: (state, action) => {
      const updateFavorites = state.favorites.filter(
        (el) => el.id !== action.payload
      );
      state.favorites = updateFavorites;
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
