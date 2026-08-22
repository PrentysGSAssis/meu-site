import { BrowserRouter, Routes, Route } from "react-router";

//Layouts
import PortalPublico from "./layouts/PortalPublico";

// Páginas
import Home from "./routes/Portal/Home";
import SaaS from "./routes/Portal/SaaS";
import Login from "./routes/Portal/Login";
import DashboardLayout from "./layouts/DasboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portal público */}
        <Route path="/" element={<PortalPublico />}>
          <Route index element={<Home />} />
          <Route path="meu-sistema" element={<SaaS />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;