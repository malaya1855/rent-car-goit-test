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
import { Loader } from "../../components/Loader";
import { UniversalMessage } from "../../components/UniversalMessage/UniversalMessage";

const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const loading = useSelector(isLoadingSelector);
  const filter = useSelector(filterSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);
  const onHandleLoadMoreClick = () => {
    setPage(page + 1);
  };
  return (
    <div className="container container-page">
      <AdvertSearch />
      {loading ? (
        <Loader />
      ) : (
        <AdvertsPreview>
          {filter && adverts.length === 0 ? (
            <UniversalMessage
              content={"We don't have any cars matching your request"}
            />
          ) : (
            <AdvertsList>
              {adverts &&
                adverts.length !== 0 &&
                adverts.map((car) => (
                  <AdvertPreviewCard key={car.id} car={car} />
                ))}
            </AdvertsList>
          )}
          {!filter && adverts.length % 12 === 0 && (
            <LoadMoreBtn type="button" onClick={onHandleLoadMoreClick}>
              Load more
            </LoadMoreBtn>
          )}
          {!filter && adverts.length % 12 !== 0 && (
            <UniversalMessage content={"No more adverts to see"} />
          )}
        </AdvertsPreview>
      )}
    </div>
  );
};

export default CatalogPage;
