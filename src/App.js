// ******** Imports ******** //
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [notify, setNotify] = useState(null);

  const handleNotification = (message) => {
    setNotify(message);
  };

  return (
    <>
      <div className="main">
        <BrowserRouter basename="/react-chatapp">
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  notify={notify}
                  handleNotification={handleNotification}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  notify={notify}
                  handleNotification={handleNotification}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

// ******** Exports ******** //
export default App;
