import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../FormatPrice";
import styled from "styled-components";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  console.log(category);
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image[0].url} alt={name} />
          <StyledCaption>{category}</StyledCaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

const StyledCaption = styled.figcaption`
  position: absolute;
  top: 15%;
  right: 10%;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.helper};
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border-radius: 2rem;
`;
export default Product;
