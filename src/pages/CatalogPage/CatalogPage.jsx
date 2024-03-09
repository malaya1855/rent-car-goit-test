import { useDispatch, useSelector } from "react-redux";
import { AdvertPreviewCard } from "../../components/AdvertPreviewCard/AdvertPreviewCard";
import {
  advertsSelector,
  filterSelector,
  isLoadingSelector,
} from "../../redux/adverts/advertsSelectors";
import { useEffect, useState } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertsList, AdvertsPreview, LoadMoreBtn } from "./CatalogPage.styled";
import { AdvertSearch } from "../../components/AdvertSearch/AdvertSearch";
import { UniversalMessage } from "../../components/UniversalMessage/UniversalMessage";
import { Loader } from "../../components/Loader";
export const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const loading = useSelector(isLoadingSelector);
  const filter = useSelector(filterSelector);
  const [page, setPage] = useState(1);
  const [advertsAll, setAdvertsAll] = useState([]);
  const dispatch = useDispatch();
  const onHandleLoadMore = () => {
    console.log(page);
    console.log(adverts);
    // const newAdverts = () => [...adverts];
    // console.log(newAdverts);
    setPage((prevPage) => prevPage + 1);
    setAdvertsAll((prevAdverts) => [...prevAdverts, ...adverts]);
  };

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);
  useEffect(() => {
    adverts.length > 0 && page === 1 && setAdvertsAll([...adverts]);
  }, [page, adverts]);

  return (
    <div className="container container-page">
      <AdvertSearch />
      {loading ? (
        <Loader />
      ) : (
        <AdvertsPreview>
          <AdvertsList>
            {advertsAll &&
              advertsAll.length !== 0 &&
              advertsAll.map((car) => (
                <AdvertPreviewCard key={car.id} car={car} />
              ))}
          </AdvertsList>
          {!filter &&
            (advertsAll.length > 0 && advertsAll.length < 32 ? (
              <LoadMoreBtn type="button" onClick={onHandleLoadMore}>
                Load more
              </LoadMoreBtn>
            ) : (
              <UniversalMessage content={"No more adverts to see"} />
            ))}
        </AdvertsPreview>
      )}
    </div>
  );
};
