// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

// import { lazy } from "react";
import { HomePage } from "../pages/HomePage/HomePage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { FavoritesPage } from "../pages/FavoritesPage";

// const Home = lazy(() => import("../pages/HomePage"));
// const Catalog = lazy(() => import("../pages/CatalogPage"));
// const Favorites = lazy(() => import("../pages/FavoritesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
