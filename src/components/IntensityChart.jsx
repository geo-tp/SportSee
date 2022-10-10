import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { fetchUserPerformance } from "../api/fetchUserPerformance";

export const IntensityChart = ({ userId }) => {
  const { data, error, isLoading } = useQuery(["user"], () =>
    fetchUserPerformance(userId)
  );

  if (error) {
    return "Error during data fetch";
  } else if (isLoading) {
    return "Loading";
  }
  return (
    <div className="intensity-chart">
      <ResponsiveContainer
        width={"100%"}
        height={"100%"}
        className="intensity-chart"
      >
        <RadarChart data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill={`#ff0101`}
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

IntensityChart.propsType = {
  userId: PropTypes.number.isRequired,
};
