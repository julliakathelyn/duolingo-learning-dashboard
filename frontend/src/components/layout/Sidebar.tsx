
import {
  LayoutDashboard,
  CalendarDays,
  TrendingUp,
  Languages,
  Settings,
  GraduationCap,
} from "lucide-react";

const menuItems = [
  { label: "Visão geral", icon: LayoutDashboard },
  { label: "Histórico", icon: CalendarDays },
  { label: "Evolução", icon: TrendingUp },
  { label: "Idiomas", icon: Languages },
];

export function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-gray-100 bg-white px-5 py-6">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-500 text-white">
          <GraduationCap size={25} />
        </div>

        <div>
          <h1 className="text-lg font-extrabold text-gray-800">
            DuoMetrics
          </h1>
          <p className="text-xs text-gray-400">
            Learning Dashboard
          </p>
        </div>
      </div>

      <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-400">
        Menu principal
      </p>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                index === 0
                  ? "bg-green-50 text-green-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-gray-100 pt-5">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 hover:bg-gray-50">
          <Settings size={20} />
          Configurações
        </button>
      </div>
    </aside>
  );
}
