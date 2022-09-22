import PropTypes from "prop-types";

export const NavBarLink = ({ content, link }) => {
  return <div className="nav-bar-link">{content}</div>;
};

NavBarLink.propsType = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
