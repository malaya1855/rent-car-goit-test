import Select from "react-select";
import makes from "../../data/makes.json";
import {
  ResetBtn,
  SearchBtn,
  SearchForm,
  SearchItem,
  SelectLabel,
} from "./AdvertSearch.styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts, filterAdverts } from "../../redux/adverts/operations";

const filterOptions = (item) => ({
  value: item,
  label: item,
});

export const AdvertSearch = () => {
  const [make, setMake] = useState("");

  const dispatch = useDispatch();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (make !== "") {
      dispatch(filterAdverts(make));
    }
  };
  const handleReset = () => {
    dispatch(fetchAdverts());
  };

  useEffect(() => {
    if (make === "") {
      dispatch(fetchAdverts());
    }
  }, [dispatch, make]);

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
          isClearable={make && true}
          onChange={(selectedOption) => {
            setMake(selectedOption ? selectedOption.value : "");
          }}
        />
      </SearchItem>
      <SearchItem>
        <SelectLabel htmlFor="selectPrice">Price/ 1 hour</SelectLabel>
        <Select
          options={makes.map(filterOptions)}
          placeholder={"To $"}
          classNamePrefix="searchSelect"
          id="selectPrice"
          form="searchForm"
          isClearable={make && true}
          onChange={(selectedOption) => {
            setMake(selectedOption && selectedOption.value);
          }}
        />
      </SearchItem>
      <SearchBtn type="submit">Search</SearchBtn>
      <ResetBtn type="button" onClick={handleReset}>
        Reset
      </ResetBtn>
    </SearchForm>
  );
};
