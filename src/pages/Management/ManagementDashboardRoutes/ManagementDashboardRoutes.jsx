import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagementDashboard from "./ManagementDashboard";

const ManagementDashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ManagementDashboard />}/>
            </Routes>
        </>
    )
}

export default ManagementDashboardRoutes;