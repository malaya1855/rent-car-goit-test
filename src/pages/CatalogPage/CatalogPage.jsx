import { useDispatch, useSelector } from "react-redux";
import { AdvertPreviewCard } from "../../components/AdvertPreviewCard/AdvertPreviewCard";
import {
  advertsSelector,
  filterSelector,
  isLoadingSelector,
} from "../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertsList, AdvertsPreview } from "./CatalogPage.styled";
import { AdvertSearch } from "../../components/AdvertSearch/AdvertSearch";
import { Loader } from "../../components/Loader";
import { LoadMore } from "../../components/LoadMore/LoadMore";
export const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const loading = useSelector(isLoadingSelector);
  const filter = useSelector(filterSelector);
  const [page, setPage] = useState(1);
  const [advertsAll, setAdvertsAll] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className="container container-page">
      <AdvertSearch />
      {loading ? (
        <Loader />
      ) : (
        <AdvertsPreview>
          <AdvertsList>
            {adverts &&
              adverts.length !== 0 &&
              adverts.map((car) => (
                <AdvertPreviewCard key={car.id} car={car} />
              ))}
          </AdvertsList>
          {!filter && <LoadMore />}
        </AdvertsPreview>
      )}
    </div>
  );
};
