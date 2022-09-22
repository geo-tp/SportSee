import { UserNutrimentsDetails } from "./UserNutrimentsDetails";
import PropTypes from "prop-types";

export const UserAnalytics = ({ nutrimentsInfos }) => {
  return (
    <div className="user-analytics">
      <UserNutrimentsDetails
        calorieCount={nutrimentsInfos.calorieCount}
        proteinCount={nutrimentsInfos.proteinCount}
        carbohydrateCount={nutrimentsInfos.carbohydrateCount}
        lipidCount={nutrimentsInfos.lipidCount}
      />
    </div>
  );
};

UserAnalytics.propsType = {
  nutrimentsInfos: PropTypes.object.isRequired,
};
