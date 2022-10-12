import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import { Template } from "../Template";
import Profile from "./profile";
import Provider from "./provider";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Provider />} />
        <Route path="/" element={<Provider />} />
        <Route path="profile" element={<Profile />} />
        <Route path="template" element={<Template />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Layout>
  );
};
export default AppRoutes;
