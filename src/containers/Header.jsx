import { Logo } from "../components/Logo";
import { NavBarLink } from "../components/NavBarLink";

export const Header = () => {
  return (
    <header className="horizontal-nav-bar">
      <Logo />
      <NavBarLink content="Accueil" link="" />
      <NavBarLink content="Profil" link="" />
      <NavBarLink content="Réglage" link="" />
      <NavBarLink content="Communauté" link="" />
    </header>
  );
};
