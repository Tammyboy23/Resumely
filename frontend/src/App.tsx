import DashboardLayout from "./layout/DashboardLayout";
import Home from "./Pages/Home"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Jobs from "./Pages/Jobs";
import Create from "./Pages/Create";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="create" element={<Create />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App