import { ActivityChart } from "../components/ActivityChart";
import { PerformanceChart } from "../components/PerformanceChart";
import { ScoreChart } from "../components/ScoreChart";
import { SessionChart } from "../components/SessionChart";
import PropTypes from "prop-types";

export const UserCharts = ({ userId, todayScore }) => {
  return (
    <div className="user-charts">
      <div className="user-charts__main">
        <ActivityChart userId={userId} />
      </div>
      <div className="user-charts__alt">
        <SessionChart userId={userId} />
        <PerformanceChart userId={userId} />
        <ScoreChart todayScore={todayScore} />
      </div>
    </div>
  );
};

UserCharts.propsType = {
  userId: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
};
