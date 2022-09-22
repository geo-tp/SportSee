import { ActivityChart } from "../components/ActivityChart";
import { IntensityChart } from "../components/IntensityChart";
import { ScoreChart } from "../components/ScoreChart";
import { SessionChart } from "../components/SessionChart";

export const UserCharts = () => {
  return (
    <div className="user-charts">
      <ActivityChart />
      <SessionChart />
      <IntensityChart />
      <ScoreChart />
    </div>
  );
};
