import styled from "styled-components";

export const SearchForm = styled.form`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
`;
export const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const SelectLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #8a8a89;
`;

export const SearchBtn = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--primary-white-color);
  background-color: var(--primary-accent-color);
  border: none;
  &:hover {
    background-color: var(--secondary-accent-color);
  }
`;
export const ResetBtn = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  background-color: transparent;
  border: 1px solid var(--primary-accent-color);
  color: var(--primary-accent-color);
  &:hover {
    border-color: var(--secondary-accent-color);
    color: var(--secondary-accent-color);
  }
`;
