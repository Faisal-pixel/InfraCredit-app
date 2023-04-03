import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminBidders from "./ProcurementAdminBidders";
import ProcurementAdminDashboard from "./ProcurementAdminDashboard";
import ProcurementAdminRequisitionDetails from "./ProcurementAdminRecentRequisitionsDetails";
import ProcurementAdminSettingsRoutes from "./ProcurementAdminSettingsRoutes";
import ProcurementAdminPurchaseContracts from "./ProcurementAdminPurchaseContracts";

const ProcurementAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ProcurementAdminDashboard />} />
                <Route  path="/requisition-details" element={<ProcurementAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ProcurementAdminSettingsRoutes />} />
                <Route  path="/bidders" element={<ProcurementAdminBidders />} />
                <Route  path="/purchase-contracts" element={<ProcurementAdminPurchaseContracts />} />
            </Routes>
        </>
    )
}

export default ProcurementAdminRoutes;