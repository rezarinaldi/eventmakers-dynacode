import { EventDashboard } from "@/components/EventDashboard";
import { Register } from "@/components/auth/components/Register";
import { Login } from "@/components/auth/components/Login";

export default function Home() {
  return (
    <div>
      <Register />
      <Login />
      <EventDashboard />
    </div>
  );
}
