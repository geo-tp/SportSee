import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "L",
    length: 40,
  },
  {
    day: "M",
    length: 30,
  },
  {
    day: "M",
    length: 20,
  },
  {
    day: "J",
    length: 27,
  },
  {
    day: "V",
    length: 18,
  },
  {
    day: "S",
    length: 23,
  },
  {
    day: "D",
    length: 34,
  },
];
export const SessionChart = () => {
  return (
    <div className="session-chart">
      <p className="session-chart__header">Durée moyenne des sessions</p>
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          width={"30%"}
          height={250}
          data={data}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis dataKey="length" domain={[0, "dataMax + 60"]} hide={true} />
          <Line
            dataKey="length"
            stroke="rgba(255, 255, 255, 0.6)"
            type="monotone"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={TooltipContent}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const TooltipContent = (props) => {
  if (props.payload.length) {
    return (
      <div className="sessionchart-tooltip">
        <div>{props.payload[0].value} min</div>
      </div>
    );
  }
};
