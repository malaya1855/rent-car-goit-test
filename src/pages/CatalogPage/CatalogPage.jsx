import { useDispatch, useSelector } from "react-redux";
import { AdvertPreviewCard } from "../../components/AdvertPreviewCard/AdvertPreviewCard";
import {
  advertsSelector,
  isLoadingSelector,
} from "../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertsList, LoadMoreBtn } from "./CatalogPage.styled";
export const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const loading = useSelector(isLoadingSelector);
  const [page, setPage] = useState(1);
  const [advertsAll, setAdvertsAll] = useState([]);
  const dispatch = useDispatch();

  const onHandleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setAdvertsAll((prevAdverts) => [...prevAdverts, ...adverts]);
  };

  useEffect(() => {
    dispatch(fetchAdverts(page));
    setAdvertsAll(adverts);
  }, [dispatch, page]);

  return loading ? (
    <p>Loading</p>
  ) : (
    <div className="container">
      <AdvertsList>
        {advertsAll.map((car) => (
          <AdvertPreviewCard key={car.id} car={car} />
        ))}
      </AdvertsList>
      <LoadMoreBtn type="button" onClick={onHandleLoadMore}>
        Load more
      </LoadMoreBtn>
    </div>
  );
};
