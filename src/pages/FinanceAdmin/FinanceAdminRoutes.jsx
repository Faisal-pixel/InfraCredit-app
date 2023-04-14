import React from "react";
import { Route, Routes } from "react-router-dom";
import FinanceAdminDashboardRoutes from "./FinanceAdminDashboardRoutes/FinanceAdmindDashboardRoutes";
import FinanceAdminRFQRoutes from "./FinanceAdminRFQRoutes/FinanceAdminRFQRoutes";
import FinanceAdminPurchaseContracts from "./ITAdminPurchaseContracts";

const FinanceAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/dashboard/*" element={<FinanceAdminDashboardRoutes />} />
                <Route  path="/request-for-quotes/*" element={<FinanceAdminRFQRoutes />} />
                <Route  path="/purchase-contracts" element={<FinanceAdminPurchaseContracts />} />
            </Routes>
        </>
    )
}

export default FinanceAdminRoutes;