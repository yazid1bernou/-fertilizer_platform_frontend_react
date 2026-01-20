import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Login from "./pages/Login";
import DashboardAdmin from "./pages/Admin/DashboardAdmin"
import DashboardFarmer from "./pages/Farmer/DashboardFarmer";
import ProfileFarmer from "./pages/Farmer/ProfileFarmer";
import FarmerRegister from "./pages/Farmer/FarmerRegister";
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: '/admin/dashboard',
    element: <DashboardAdmin />
  },
  {
    path: '/farmer/register',
    element: <FarmerRegister />
  },

  {
    path: '/farmer/dashboard',
    element: <DashboardFarmer />
  },
  {
    path: '/farmer/profile',
    element: <ProfileFarmer />
  },
  {
    path: '/login',
    element: <Login />
  }
])


function App() {


  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
