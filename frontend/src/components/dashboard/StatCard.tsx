import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-500">
          {title}
        </p>

        <div className="rounded-xl bg-green-50 p-3 text-green-600">
          <Icon size={22} />
        </div>
      </div>

      <h3 className="mt-5 text-3xl font-extrabold text-gray-800">
        {value}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}