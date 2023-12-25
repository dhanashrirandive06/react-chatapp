// ******** Imports ******** //
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [notify, setNotify] = useState(null);

  const handleNotification = (message) => {
    setNotify(message);
  };

  const routes = createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Login notify={notify} handleNotification={handleNotification} />
        }
      />
      <Route
        path="/dashboard"
        element={
          <Dashboard notify={notify} handleNotification={handleNotification} />
        }
      />
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <div className="main">
        <RouterProvider router={router} />
      </div>
      <ToastContainer />
    </>
  );
}

// ******** Exports ******** //
export default App;
