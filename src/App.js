// ******** Imports ******** //
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [notify, setNotify] = useState(null);

  const handleNotification = (message) => {
    setNotify(message);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <Login notify={notify} handleNotification={handleNotification} />
          ),
        },
        {
          path: "/dashboard",
          element: (
            <Dashboard
              notify={notify}
              handleNotification={handleNotification}
            />
          ),
        },
      ],
    },
  ]);

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
