import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom";

//Auth viewa
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

//layout
import LayoutAdmin from "../layouts/LayoutAdmin";

//Principal
import NotFound from "../pages/404/notFound";
import Dashboard from "../pages/Dashboard/Dashboard";

//Profile
import Profile from "../pages/Profile/Profile";
import UserProject from "../pages/Profile/Projects";
import UserAsset from "../pages/Profile/ReservationUserAssets";

//Assets
import Assets from "../pages/AssetsUser/ReservationAsset";
import AssetsAnalytics from "../pages/AssetsUser/AnalitycAssets";
import AssetsManagement from "../pages/AssetsUser/AssetsManagement";

//Inventory
import Inventory from "../pages/Inventory/ReservationInventory";
import InventoryAnalytics from "../pages/Inventory/AnalitycInventory";
import InventoryManagement from "../pages/Inventory/InventoryManagement";
import Products from "../pages/Inventory/Product";
import Providers from "../pages/Inventory/Provider";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgetPassword" element={<ForgetPassword />} /> */}
        <Route path="/personalArea" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="userProject" element={<UserProject />} />
          <Route path="userAsset" element={<UserAsset />} />
          {/* ASSETS */}
          <Route path="assets" element={<Assets />} />
          <Route path="assetsAnalytics" element={<AssetsAnalytics />} />
          <Route path="assetsManagement" element={<AssetsManagement />} />
          {/* INVENTORY */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventoryAnalytics" element={<InventoryAnalytics />} />
          <Route path="inventoryManagement" element={<InventoryManagement />} />
          <Route path="products" element={<Products />} />
          <Route path="providers" element={<Providers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
