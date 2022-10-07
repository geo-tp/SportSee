import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "completed", value: 0.52, fillColor: "#ff0101" },
  { name: "not-completed", value: 1 - 0.52, fillColor: "transparent" },
];

export const ScoreChart = () => {
  return (
    <div className="score-chart">
      <p className="score-chart__header">Score</p>
      <ResponsiveContainer width="100%" height="100%" className="score-chart">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-chart__label">
        <span>12%</span>
        <span>de votre objectif</span>
      </div>
    </div>
  );
};
