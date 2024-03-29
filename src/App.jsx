import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
