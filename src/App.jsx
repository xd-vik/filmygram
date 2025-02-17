// src/App.js
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AddNew from "./DashboardComponent/AddNew";
import ProtectedRoute from "./components/ProtectedRoutes";  
import Update from "./DashboardComponent/Update";
import Delete from "./DashboardComponent/Delete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        
        {/* Protected routes */}
        <Route 
          path="/admin/panel" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/panel/add-new" 
          element={
            <ProtectedRoute>
              <AddNew />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/panel/update" 
          element={
            <ProtectedRoute>
              <Update/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/panel/delete" 
          element={
            <ProtectedRoute>
              <Delete/>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
