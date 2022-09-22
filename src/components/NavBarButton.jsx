export const NavBarButton = ({ alt, src, link }) => {
  return (
    <button className="nav-bar-button">
      <img src={src} alt={alt} />
    </button>
  );
};
