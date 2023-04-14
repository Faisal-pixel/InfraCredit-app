import React from "react";
import { Route, Routes } from "react-router-dom";
import FinanceAdminDashboard from "./FinanceAdminDashboard";

const FinanceAdminDashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<FinanceAdminDashboard/>}/>
            </Routes>
        </>
    )
}

export default FinanceAdminDashboardRoutes;