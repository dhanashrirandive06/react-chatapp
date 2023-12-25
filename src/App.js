// ******** Imports ******** //
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  // ******** Create high-level protected route below ******** //
  const ProtectedRoute = ({ children }) => {
    let isLoggedIn = localStorage.getItem("user:gmail");
    if (isLoggedIn) {
      return <Navigate to="/" replace={true} />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

// ******** Exports ******** //
export default App;
