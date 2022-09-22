import PropTypes from "prop-types";

export const NavBarButton = ({ alt, src, link }) => {
  return (
    <button className="nav-bar-button">
      <img src={src} alt={alt} />
    </button>
  );
};

NavBarButton.propsType = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string,
};
