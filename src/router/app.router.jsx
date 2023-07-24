import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/personalArea" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="userProject" element={<UserProject />} />
{/* ASSETS */}
          <Route path="assets" element={<Assets />} />
          <Route path="assetsReservation" element={<AssetsReservation />} />
          <Route path="assetsAnalytics" element={<AssetsAnalytics />} />
          <Route path="assetsManagement" element={<AssetsManagement />} />
{/* INVENTORY */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventoryReservation" element={<InventoryReservation />} />
          <Route path="inventoryAnalytics" element={<InventoryAnalytics />} />
          <Route path="inventoryManagement" element={<InventoryManagement />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};