import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagementDashboardRoutes from "./ManagementDashboardRoutes/ManagementDashboardRoutes";
import ManagementBidders from "./ManagementBidders";
import ManagementRFQRoutes from "./ManagementRFQRoutes/ManagementRFQRoutes";
import ManagementPurchaseContractsRoutes from "./ManagementPurchaseContractsRoutes/ManagementPurchaseContractsRoutes";

const ManagementRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/dashboard/*" element={<ManagementDashboardRoutes />} />
                <Route  path="/bidders" element={<ManagementBidders />} />
                <Route  path="/request-for-quotes/*" element={<ManagementRFQRoutes />} />
                <Route  path="/purchase-contracts/*" element={<ManagementPurchaseContractsRoutes />} />
            </Routes>
        </>
    )
}

export default ManagementRoutes;