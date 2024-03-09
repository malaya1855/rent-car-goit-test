import Select from "react-select";
import makes from "../../data/makes.json";
import {
  ResetBtn,
  SearchBtn,
  SearchForm,
  SearchItem,
  SelectLabel,
} from "./AdvertSearch.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts, filterAdverts } from "../../redux/adverts/operations";

const filterOptions = (item) => ({
  value: item,
  label: item,
});

export const AdvertSearch = () => {
  const [make, setMake] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (make !== "") {
      dispatch(filterAdverts(make));
    }
  };
  const handleReset = () => {
    dispatch(fetchAdverts(page));
  };

  return (
    <SearchForm onSubmit={handleSearchSubmit} id="searchForm">
      <SearchItem>
        <SelectLabel htmlFor="selectMakes">Car brand</SelectLabel>
        <Select
          options={makes.map(filterOptions)}
          placeholder={"Enter the text"}
          classNamePrefix="searchSelect"
          id="selectMakes"
          form="searchForm"
          //   defaultValue={make}
          isClearable={make && true}
          onChange={(selectedOption) => {
            setMake(selectedOption && selectedOption.value);
          }}
          //   onChange={(options) => setMake(options.value)}
          //   defaultValue={{
          //     label: makes.map(filterOptions)[0].label,
          //     value: makes.map(filterOptions)[0].value,
          //   }}
        />
      </SearchItem>
      <SearchBtn type="submit">Search</SearchBtn>
      <ResetBtn type="button" onClick={handleReset}>
        Reset
      </ResetBtn>
    </SearchForm>
  );
};
