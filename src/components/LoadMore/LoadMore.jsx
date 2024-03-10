import { useEffect, useState } from "react";
import { UniversalMessage } from "../UniversalMessage/UniversalMessage";
import { LoadMoreBtn } from "./LoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/operations";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";

export const LoadMore = () => {
  const adverts = useSelector(advertsSelector);
  const [page, setPage] = useState(2);
  const [advertsAll, setAdvertsAll] = useState([]);
  const dispatch = useDispatch();

  const onHandleLoadMore = async () => {
    await setPage((prevPage) => prevPage + 1);
    // dispatch(fetchAdverts(page));
    // setAdvertsAll((prevAdverts) => [...prevAdverts, ...adverts]);
    dispatch(fetchAdverts(page));
  };

  return (
    <div>
      {adverts.length <= 32 ? (
        <LoadMoreBtn type="button" onClick={onHandleLoadMore}>
          Load more
        </LoadMoreBtn>
      ) : (
        <UniversalMessage content={"No more adverts to see"} />
      )}
    </div>
  );
};
