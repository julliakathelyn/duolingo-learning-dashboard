
import { Bell, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-100 bg-white px-8">
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Visão geral
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Acompanhe sua evolução no aprendizado.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
            JK
          </div>

          <div>
            <p className="text-sm font-bold text-gray-700">
              Jullia
            </p>
            <p className="text-xs text-gray-400">
              Estudante
            </p>
          </div>

          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
