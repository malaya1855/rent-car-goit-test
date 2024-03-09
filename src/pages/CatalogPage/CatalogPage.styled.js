import styled from "styled-components";

export const AdvertsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
`;

export const LoadMoreBtn = styled.button`
display
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: var(--primary-accent-color);
  &:hover {
    color: var(--secondary-accent-color);
  }
  background: transparent;
  border: none;
  margin-top: 100px;
  margin-bottom: 150px;
  
`;
