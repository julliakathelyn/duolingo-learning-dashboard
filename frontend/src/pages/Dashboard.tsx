import { useEffect, useState } from "react";
import { XpChart } from "../components/dashboard/XpChart";

import {
    Zap,
    Flame,
    CalendarCheck,
    Clock,
    Trophy,
} from "lucide-react";

import { StatCard } from "../components/dashboard/StatCard";
import { dashboardStats } from "../data/mockData";

const icons = {
    Zap,
    Flame,
    CalendarCheck,
    Clock,
    Trophy,
};

export function Dashboard() {
    const [totalXp, setTotalXp] = useState<number | null>(null);
    const [studyDays, setStudyDays] = useState<number | null>(null);
    const [totalStudyTime, setTotalStudyTime] = useState<number | null>(null);
    const [totalSessions, setTotalSessions] = useState<number | null>(null);
    const [bestXpDay, setBestXpDay] = useState<{
        xp: number;
        date: number;
    } | null>(null);
    const totalHours =
        totalStudyTime !== null
            ? Math.floor(totalStudyTime / 3600)
            : null;
    const totalMinutes = totalStudyTime !== null
        ? Math.floor((totalStudyTime % 3600) / 60)
        : null;

    const totalSessionsValue =
        totalSessions !== null
            ? totalSessions.toLocaleString("pt-BR")
            : "Carregando...";

    useEffect(() => {
        fetch("http://localhost:8080/api/duolingo/stats/total-xp")
            .then((response) => response.json())
            .then((data) => {
                setTotalXp(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar XP total:", error);
            });

        fetch("http://localhost:8080/api/duolingo/stats/study-days")
            .then((response) => response.json())
            .then((data) => {
                setStudyDays(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar dias com ganho de XP:", error);
            });

        fetch("http://localhost:8080/api/duolingo/stats/total-study-time")
            .then((response) => response.json())
            .then((data) => {
                setTotalStudyTime(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar tempo total de estudo:", error);
            });

        fetch("http://localhost:8080/api/duolingo/stats/total-sessions")
            .then((response) => response.json())
            .then((data) => {
                setTotalSessions(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar total de sessões:", error);
            });

        fetch("http://localhost:8080/api/duolingo/stats/best-xp-day")
            .then((response) => response.json())
            .then((data) => {
                setBestXpDay(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar melhor dia de XP:", error);
            });
    }, []);

    const bestXpDate =
        bestXpDay !== null
            ? new Date(bestXpDay.date * 1000).toLocaleDateString("pt-BR")
            : "Carregando...";
    const bestXpValue =
        bestXpDay !== null
            ? bestXpDay.xp.toLocaleString("pt-BR")
            : "Carregando...";

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

                    const value =
                        stat.title === "XP total"
                            ? totalXp === null
                                ? "Carregando..."
                                : totalXp.toLocaleString("pt-BR")
                            : stat.title === "Dias estudados"
                                ? studyDays === null
                                    ? "Carregando..."
                                    : studyDays.toLocaleString("pt-BR")
                                : stat.title === "Tempo de estudo"
                                    ? totalHours === null || totalMinutes === null
                                        ? "Carregando..."
                                        : `${totalHours}h ${totalMinutes}min`
                                    : stat.title === "Sessões de estudo"
                                        ? totalSessionsValue
                                        : stat.value;


                    return (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={value}
                            description={stat.description}
                            icon={Icon}
                        />
                    );
                })}
            </div>

            <XpChart />

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Recorde de XP"
                    value={`${bestXpValue} XP`}
                    description={`Recorde alcançado em ${bestXpDate}`}
                    icon={Trophy}
                />
            </div>

        </main>

    );
}