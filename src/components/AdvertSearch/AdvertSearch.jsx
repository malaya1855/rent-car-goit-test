import Select from "react-select";
import makes from "../../data/makes.json";
import prices from "../../data/prices.json";

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
import { resetState } from "../../redux/adverts/advertsSlice.js";

const filterOptions = (item) => ({
  value: item,
  label: item,
});

export const AdvertSearch = () => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [filters, setFilters] = useState({});

  const placeholderMake = "Enter the text";
  const placeholderPrice = "To $";

  const dispatch = useDispatch();
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const newFilters = {};
    if (make) newFilters.make = make;
    if (price) newFilters.price = price;
    setFilters(newFilters);
    dispatch(filterAdverts(newFilters));
  };
  const handleReset = () => {
    dispatch(resetState());
    dispatch(fetchAdverts(1));
    setMake("");
    setPrice("");
    setFilters({});
  };

  return (
    <SearchForm onSubmit={handleSearchSubmit} id="searchForm">
      <SearchItem>
        <SelectLabel htmlFor="selectMakes">Car brand</SelectLabel>
        <Select
          options={makes.map(filterOptions)}
          placeholder={placeholderMake}
          classNamePrefix="searchSelect"
          id="selectMakes"
          form="searchForm"
          isClearable={make && true}
          onReset={handleReset}
          onChange={(selectedOption) => {
            setMake(selectedOption ? selectedOption.value : "");
          }}
        />
      </SearchItem>
      <SearchItem>
        <SelectLabel htmlFor="selectPrice">Price/ 1 hour</SelectLabel>
        <Select
          options={prices.map(filterOptions)}
          placeholder={placeholderPrice}
          classNamePrefix="searchSelect"
          id="selectPrice"
          form="searchForm"
          isClearable={price && true}
          onChange={(selectedOption) => {
            setPrice(selectedOption ? selectedOption.value : "");
          }}
        />
      </SearchItem>
      <SearchBtn type="submit">Search</SearchBtn>
      <ResetBtn type="reset" disabled={!make && !price} onClick={handleReset}>
        Reset
      </ResetBtn>
    </SearchForm>
  );
};
