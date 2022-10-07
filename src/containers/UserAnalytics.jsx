import { UserNutrimentsDetails } from "./UserNutrimentsDetails";
import PropTypes from "prop-types";
import { UserCharts } from "./UserCharts";

export const UserAnalytics = ({ nutrimentsInfos, userId }) => {
  return (
    <div className="user-analytics">
      <UserCharts userId={userId} />
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
