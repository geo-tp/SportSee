import { UserNutrimentsDetails } from "./UserNutrimentsDetails";
import PropTypes from "prop-types";
import { UserCharts } from "./UserCharts";

export const UserAnalytics = ({ nutrimentsInfos, userId, todayScore }) => {
  return (
    <div className="user-analytics">
      <UserCharts userId={userId} todayScore={todayScore} />
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
  userId: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
};
