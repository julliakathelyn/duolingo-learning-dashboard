import { XpChart } from "../components/dashboard/XpChart";
import {
  Zap,
  Flame,
  CalendarCheck,
  Clock,
} from "lucide-react";

import { StatCard } from "../components/dashboard/StatCard";
import { dashboardStats } from "../data/mockData";

const icons = {
  Zap,
  Flame,
  CalendarCheck,
  Clock,
};

export function Dashboard() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-800">
          Seu aprendizado em números
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Confira os principais indicadores da sua jornada.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = icons[stat.iconName as keyof typeof icons];

          return (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={Icon}
            />
          );
        })}
      </div>

      <XpChart />

    </main>

  );
}