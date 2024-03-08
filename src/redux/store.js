import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesReducer } from "./favorites/favoritesSlice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: "favorites",
};
export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    adverts: advertsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
