import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatActivityData } from "../utils/dataFormater";

export const ActivityChart = ({ data }) => {
  const activities = formatActivityData(data);

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
      <ResponsiveContainer width={"100%"} height={300} min-width={300}>
        <BarChart
          data={activities}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={"#9B9EAC"}
          />
          <XAxis
            dataKey="day"
            dy={12}
            stroke={"#9B9EAC"}
            // padding={{ left: -48, right: -48 }}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
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
    console.log(props.payload.length);
    return (
      <div className="barchart-tooltip">
        <div>{props.payload[0].value} kg</div>
        <div>{props.payload[1].value} kCal</div>
      </div>
    );
  }
};
