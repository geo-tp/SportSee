import { ActivityChart } from "../components/ActivityChart";
import { IntensityChart } from "../components/IntensityChart";
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
        <IntensityChart userId={userId} />
        <ScoreChart todayScore={todayScore} />
      </div>
    </div>
  );
};

UserCharts.propsType = {
  userId: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
};
