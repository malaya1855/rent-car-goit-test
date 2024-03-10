import { useDispatch, useSelector } from "react-redux";
import { AdvertPreviewCard } from "../../components/AdvertPreviewCard/AdvertPreviewCard";
import {
  advertsSelector,
  filterSelector,
  isLoadingSelector,
} from "../../redux/adverts/advertsSelectors";
import { useEffect } from "react";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertsList, AdvertsPreview } from "./CatalogPage.styled";
import { AdvertSearch } from "../../components/AdvertSearch/AdvertSearch";
import { Loader } from "../../components/Loader";
import { LoadMore } from "../../components/LoadMore/LoadMore";
import { UniversalMessage } from "../../components/UniversalMessage/UniversalMessage";

const CatalogPage = () => {
  const adverts = useSelector(advertsSelector);
  const loading = useSelector(isLoadingSelector);
  const filter = useSelector(filterSelector);
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
          {adverts.length === 0 && (
            <UniversalMessage
              content={"We don't have any cars matching your request"}
            />
          )}
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

export default CatalogPage;
