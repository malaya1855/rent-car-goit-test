import { useDispatch, useSelector } from "react-redux";
import { AdvertPreviewCard } from "../../components/AdvertPreviewCard/AdvertPreviewCard";
import {
  advertsSelector,
  isLoadingSelector,
} from "../../redux/adverts/advertsSelectors";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertsList } from "./CatalogPage.styled";
export const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const loading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  return loading ? (
    <p>Loading</p>
  ) : (
    <div className="container">
      <AdvertsList>
        {adverts.map((car) => (
          <AdvertPreviewCard key={car.id} car={car} />
        ))}
      </AdvertsList>
    </div>
  );
};
