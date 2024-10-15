import { useParams } from "react-router-dom";

const AdminDashboard = () => {
  const { userID } = useParams();

  return (
    <div>
      <h1>Welcome, Admin {userID}</h1>
      <p>This is a protected page.</p>
    </div>
  );
};

export default AdminDashboard;
