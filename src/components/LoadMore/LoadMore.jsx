import { useState } from "react";
import { UniversalMessage } from "../UniversalMessage/UniversalMessage";
import { LoadMoreBtn } from "./LoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreAdverts } from "../../redux/adverts/operations";
import { advertsSelector } from "../../redux/adverts/advertsSelectors";

export const LoadMore = () => {
  const adverts = useSelector(advertsSelector);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const onHandleLoadMoreClick = async () => {
    await dispatch(fetchMoreAdverts(page));
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div>
      {adverts.length <= 32 ? (
        <LoadMoreBtn type="button" onClick={onHandleLoadMoreClick}>
          Load more
        </LoadMoreBtn>
      ) : (
        <UniversalMessage content={"No more adverts to see"} />
      )}
    </div>
  );
};
