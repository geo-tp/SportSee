import { ActivityChart } from "../components/ActivityChart";
import { IntensityChart } from "../components/IntensityChart";
import { ScoreChart } from "../components/ScoreChart";
import { SessionChart } from "../components/SessionChart";
import { fetchUserAverage } from "../api/fetchUserAverage";
import { fetchUserPerformance } from "../api/fetchUserPerformance";
import { fetchUserActivity } from "../api/fetchUserActivity";
import { useState } from "react";
import { useEffect } from "react";

export const UserCharts = ({ userId }) => {
  const [performance, setPerformance] = useState(null);
  const [average, setAverage] = useState(null);
  const [activity, setActivity] = useState(null);
  useEffect(() => {
    const fetchInfos = async () => {
      setPerformance(await fetchUserPerformance(userId));
      setAverage(await fetchUserAverage(userId));
      setActivity(await fetchUserActivity(userId));
    };
    fetchInfos();
  });
  return (
    <div className="user-charts">
      <div className="user-charts__main">
        {activity && <ActivityChart data={activity} />}
      </div>
      <div className="user-charts__alt">
        <SessionChart />
        <IntensityChart />
        <ScoreChart />
      </div>
    </div>
  );
};
