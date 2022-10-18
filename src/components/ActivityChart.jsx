import { useQuery } from "react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchUserActivity } from "../api/fetchUserActivity";
import PropTypes from "prop-types";

export const ActivityChart = ({ userId }) => {
  const { data, error, isLoading } = useQuery(["activities"], () =>
    fetchUserActivity(userId)
  );

  if (error) {
    return "Error during data fetch";
  } else if (isLoading) {
    return "Loading";
  }

  return (
    <div className="activity-chart">
      <div className="activity-chart__header">
        <p>Activité quotidienne</p>
        <div className="chart-legend">
          <div className="chart-legend__element">
            <div className="chart-legend__element__point chart-legend__element__point--gray"></div>
            <span>Poids (kg)</span>
          </div>
          <div className="chart-legend__element">
            <div className="chart-legend__element__point chart-legend__element__point--red"></div>
            <span>Calories brûlées(kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={300}>
        <BarChart
          data={data}
          margin={{ top: 80, right: 40, bottom: 30, left: 40 }}
          barGap={6}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={"#9B9EAC"}
          />
          <XAxis dataKey="day" dy={12} stroke={"#9B9EAC"} tickLine={false} />
          <YAxis
            yAxisId="kg"
            dataKey="kg"
            stroke={"#9B9EAC"}
            allowDecimals={false}
            dx={36}
            domain={["dataMin-1", "dataMax+1"]}
            orientation="right"
            axisLine={false}
            tickLine={false}
          />
          <YAxis yAxisId="kCal" dataKey="kCal" hide={true} />
          <Bar
            yAxisId="kg"
            dataKey="kg"
            maxBarSize={8}
            fill={"#282D30"}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="kCal"
            dataKey="kCal"
            maxBarSize={8}
            fill={"#E60000"}
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            content={TooltipContent}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const TooltipContent = (props) => {
  if (props.payload.length) {
    return (
      <div className="barchart-tooltip">
        <div>{props.payload[0].value} kg</div>
        <div>{props.payload[1].value} kCal</div>
      </div>
    );
  }
};

ActivityChart.propsType = {
  userId: PropTypes.number.isRequired,
};
