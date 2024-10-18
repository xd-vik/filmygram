// src/App.js
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AddNew from "./DashboardComponent/AddNew";
import ProtectedRoute from "./components/ProtectedRoutes";  

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
          path="/admin/:userID" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/:userID/add-new" 
          element={
            <ProtectedRoute>
              <AddNew />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
