import { NavBarButton } from "../components/NavBarButton";
import relaxIcon from "../assets/relax.svg";
import gymIcon from "../assets/gym.svg";
import cardioIcon from "../assets/cardio.svg";
import swimIcon from "../assets/swim.svg";
import { Copyright } from "../components/Copyright";

export const VerticalNavBar = () => {
  return (
    <aside className="vertical-nav-bar">
      <NavBarButton src={relaxIcon} alt="relax icon" link="" />
      <NavBarButton src={swimIcon} alt="swim icon" link="" />
      <NavBarButton src={cardioIcon} alt="cardio icon" link="" />
      <NavBarButton src={gymIcon} alt="gym icon" link="" />
      <Copyright />
    </aside>
  );
};
