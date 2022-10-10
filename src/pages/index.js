import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Provider from "./provider";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Provider />} />
        <Route path="/" element={<Provider />} />

        <Route path="about" element={<Provider />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Layout>
  );
};
export default AppRoutes;
