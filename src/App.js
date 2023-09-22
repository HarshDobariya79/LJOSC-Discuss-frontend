import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import { ProfileProvider } from "./hooks/useProfile";
import Login from "./pages/Login/Login";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="bg-[#fffefe] max-w-screen">
      <Routes>
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/signup" element={<Navigate to="/login" />} />
        <Route path="*" element={<div>Invalid path</div>} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <ProfileProvider>
      <Router>
        <App />
      </Router>
    </ProfileProvider>
  </AuthProvider>,
);
