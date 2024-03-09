import { useDispatch, useSelector } from "react-redux";
import { favoritesSelector } from "../redux/favorites/favoritesSelector";
import { AdvertsList } from "./CatalogPage/CatalogPage.styled";
import { useEffect } from "react";
import { fetchAdverts } from "../redux/adverts/operations";
import { AdvertPreviewCard } from "../components/AdvertPreviewCard/AdvertPreviewCard";
import { UniversalMessage } from "../components/UniversalMessage/UniversalMessage";

export const FavoritesPage = () => {
  const favoriteAdverts = useSelector(favoritesSelector) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  return (
    <div className="container">
      {favoriteAdverts.length === 0 ? (
        <UniversalMessage content={"You do not have favorite adverts"} />
      ) : (
        <AdvertsList>
          {favoriteAdverts.map((car) => (
            <AdvertPreviewCard key={car.id} car={car} />
          ))}
        </AdvertsList>
      )}
    </div>
  );
};
