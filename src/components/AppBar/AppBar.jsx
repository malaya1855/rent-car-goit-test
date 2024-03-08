import { Navigation } from "./AppBar.styled";
import { NavigationLink } from "./Navigation";
import headerLinks from "../../data/navHeader.json";

export const AppBarMenu = () => {
  return (
    <div className="container">
      <Navigation>
        {headerLinks.map(({ id, title, href }) => (
          <NavigationLink key={id} to={href}>
            {title}
          </NavigationLink>
        ))}
      </Navigation>
    </div>
  );
};
