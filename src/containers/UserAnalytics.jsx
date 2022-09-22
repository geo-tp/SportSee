import { UserNutrimentsDetails } from "./UserNutrimentsDetails";

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
