import { Outlet } from "react-router";
import Dashboard from "../../components/common/Dashboard";

const DashboardLayout = () => {
  return (
      <Dashboard>
        <main>
          <Outlet />
        </main>
      </Dashboard>
  );
};

export default DashboardLayout;
