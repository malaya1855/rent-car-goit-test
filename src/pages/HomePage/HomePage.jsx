import { Link } from "react-router-dom";
import makes from "../../data/makes.json";
import {
  Hero,
  HeroLink,
  HeroTitle,
  MakesList,
  MakesListItem,
  MakesTitle,
} from "./HomePage.styled";
const HomePage = () => {
  return (
    <div className="container container-page">
      <Hero>
        <HeroTitle>Take control of your car rent</HeroTitle>
        <HeroLink as={Link} to="/catalog">
          Find your car to rent
        </HeroLink>
      </Hero>
      <MakesTitle>We have cars for you</MakesTitle>
      <MakesList>
        {makes.map((make, i) => {
          return <MakesListItem key={i}>{make}</MakesListItem>;
        })}
      </MakesList>
    </div>
  );
};
export default HomePage;
