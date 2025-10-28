import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import MachineryList from "./pages/MachineryList";
import DashboardFarmer from "./pages/DashboardFarmer";
import DashboardOwner from "./pages/DashboardOwner";
import DashboardAgent from "./pages/DashboardAgent";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  const [message, setMessage] = useState("");

  // ✅ Fetch backend data once when the app loads
  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/hello`);
        const data = await res.json();
        console.log(data);
        setMessage(data.message);
      } catch (err) {
        console.error("Error connecting to backend:", err);
      }
    };

    fetchBackend();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {/* Optional: show backend status at the top */}
              <div className="text-center py-2 text-sm text-gray-600 bg-green-50">
                Backend says: {message || "Connecting..."}
              </div>

              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/machinery" element={<MachineryList />} />
                <Route path="/dashboard/farmer" element={<DashboardFarmer />} />
                <Route path="/dashboard/owner" element={<DashboardOwner />} />
                <Route path="/dashboard/agent" element={<DashboardAgent />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
