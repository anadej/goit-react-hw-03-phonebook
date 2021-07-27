import React from "react";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ filterContacts }) => {
  const onFilterChange = (e) => {
    const inputFilter = e.target.value;
    filterContacts(inputFilter);
  };

  return (
    <FilterStyled>
      Find contacts by name:
      <input
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Начните вводить имя контакта, который хотите найти"
        required
        onChange={onFilterChange}
      />
    </FilterStyled>
  );
};

export default Filter;
