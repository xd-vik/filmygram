import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AddNew from "./DashboardComponent/AddNew";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/admin/:userID" element={<AdminDashboard />} />
        <Route path="/admin/:userID/add-new" element={<AddNew />} />
      </Routes>
    </Router>
  );
}

export default App;
