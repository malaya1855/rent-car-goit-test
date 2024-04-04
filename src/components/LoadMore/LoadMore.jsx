import { useState } from "react";
import { LoadMoreBtn } from "./LoadMore.styled";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/operations";

export const LoadMore = () => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  const onHandleLoadMoreClick = async () => {
    await setPage(page + 1);
    console.log(page);
    dispatch(fetchAdverts(page));
  };

  return (
    <LoadMoreBtn type="button" onClick={onHandleLoadMoreClick}>
      Load more
    </LoadMoreBtn>
  );
};
