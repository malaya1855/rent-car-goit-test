import styled from "styled-components";

export const Navigation = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  border-bottom: 0.5px solid var(--secondary-text-color);
`;
export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-accent-color);
  &:hover {
    color: var(--secondary-accent-color);
  }
`;
