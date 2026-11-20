import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="flex min-h-screen bg-[#f7fdf8]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <Dashboard />
      </div>
    </div>
  );
}

export default App;