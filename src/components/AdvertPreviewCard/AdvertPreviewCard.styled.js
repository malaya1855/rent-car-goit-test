import styled from "styled-components";

export const AdvertListItem = styled.li`
  width: 274px;
  position: relative;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 18px;
  height: 18px;
`;
export const HeartSvg = styled.svg`
  stroke: rgba(255, 255, 255, 0.8);
  width: 18px;
  height: 18px;
`;

export const AdvertItemImg = styled.img`
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 12px;
`;
export const CarHeadItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const CarTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;
export const CarModel = styled.span`
  color: var(--primary-accent-color);
`;
export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`;
export const CarInfoList = styled.ul`
  display: flex;
`;
export const CarInfoItem = styled.li`
  padding: 0 6px;
  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }
`;
export const LearnMoreBtn = styled.button`
  font-family: "Manrope", san-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 12px;
  padding: 12px 99px;
  width: 100%;
  background-color: var(--primary-accent-color);
  color: var(--primary-white-color);
  border: none;
  transition: background-color var(--transition);
  &:hover {
    background-color: var(--secondary-accent-color);
  }
`;
