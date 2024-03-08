import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

export const NavigationLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return "navigation" + (!isActive ? "" : " active");
      }}
    >
      {children}
    </NavLink>
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
