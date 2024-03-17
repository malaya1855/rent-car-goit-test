import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--secondary-text-color);
  background-image: linear-gradient(
      rgba(18, 20, 23, 0.2),
      rgba(18, 20, 23, 0.2)
    ),
    url("./src/assets/images/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 151px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  color: var(--primary-white-color);
  border-radius: 24px;
  margin-bottom: 30px;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: 1px;
  text-align: center;
`;

export const HeroLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 1px;
  &:hover {
    font-weight: 600;
  }
`;

export const MakesTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.42857;
  color: var(--primary-accent-color);
  margin-bottom: 30px;
  text-align: center;
`;
export const MakesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
`;
export const MakesListItem = styled.li`
  border-radius: 35px;
  font-size: 16px;
  padding: 7px 14px;
  background-color: #f9f9f9;
  letter-spacing: -0.003px;
  color: var(--addit-text-color);
`;
