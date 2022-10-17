import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const ScoreChart = ({ todayScore }) => {
  const data = [
    { name: "done", value: todayScore, color: "#ff0101" },
    { name: "not-done", value: 1 - todayScore, color: "transparent" },
  ];
  return (
    <div className="score-chart">
      <p className="score-chart__header">Score</p>
      <ResponsiveContainer width="100%" height="100%" className="score-chart">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-id-${index}`}
                fill={entry.color}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score-chart__label">
        <span>{todayScore * 100}%</span>
        <span>de votre objectif</span>
      </div>
    </div>
  );
};
