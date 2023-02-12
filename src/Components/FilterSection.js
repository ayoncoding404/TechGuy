import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import styled from "styled-components";

const FilterSection = () => {
  const { allProducts } = useFilterContext();

  //to get the unique data for each field
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };
  //we need unique data
  const categoryOnlyData = getUniqueData(allProducts, "category");

  return <Wrapper><div className="filter-category">
  <h3>Category</h3>
  <div>
    {categoryOnlyData.map((curElem, index) => {
      return (
        <button
          key={index}
          type="button"
          name="category"
          value={curElem}
         
         >
          {curElem}
        </button>
      );
    })}
  </div>
</div></Wrapper>;
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
`;
export default FilterSection;
