import styled from "styled-components";
export const AdvertListItem = styled.div`
  width: 461px;
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
  width: 24px;
  height: 24px;
`;

export const AdvertItemImg = styled.img`
  margin-bottom: 14px;
  width: 461px;
  height: 248px;
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
  margin-bottom: 24px;
  height: 40px;
`;
export const CarInfoList = styled.ul`
  display: flex;
`;
export const CarInfoItem = styled.li`
  padding: 0 6px;
  height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:not(:last-child) {
    border-right: 1px solid var(--border-color);
  }
`;
export const Decscription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--primary-text-color);
  margin-bottom: 24px;
`;
export const PropertyTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: var(--primary-text-color);
  margin-bottom: 8px;
`;
export const PropertyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const PropertyListItem = styled.li`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  letter-spacing: -0.003px;
  color: var(--addit-text-color);
`;

export const AccentText = styled.span`
  font-weight: 600;
  color: var(--primary-accent-color);
`;
export const RentBtn = styled.a`
  font-family: "Manrope", san-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 12px;
  padding: 12px 50px;
  background-color: var(--primary-accent-color);
  color: var(--primary-white-color);
  border: none;
  transition: background-color var(--transition);
  &:hover,
  &:focus {
    background-color: var(--secondary-accent-color);
  }
`;
