import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const xpData = [
  { month: "Jan", xp: 1200 },
  { month: "Fev", xp: 1800 },
  { month: "Mar", xp: 1500 },
  { month: "Abr", xp: 2400 },
  { month: "Mai", xp: 2100 },
  { month: "Jun", xp: 3200 },
  { month: "Jul", xp: 2800 },
  { month: "Ago", xp: 3900 },
  { month: "Set", xp: 3500 },
  { month: "Out", xp: 4600 },
  { month: "Nov", xp: 4200 },
  { month: "Dez", xp: 5200 },
];

export function XpChart() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800">
          Evolução de XP
        </h3>

        <p className="text-sm text-gray-400">
          Experiência conquistada ao longo do ano
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={xpData}>
            <defs>
              <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="xp"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#xpGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}