import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminBidders from "./ProcurementAdminBidders";
import ProcurementAdminDashboard from "./ProcurementAdminDashboard";
import ProcurementAdminRequisitionDetails from "./ProcurementAdminRecentRequisitionsDetails";
import ProcurementAdminSettingsRoutes from "./ProcurementAdminSettingsRoutes";
import ProcurementAdminRFQRoutes from "./ProcurementAdminRFQRoutes";

const ProcurementAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ProcurementAdminDashboard />} />
                <Route  path="/requisition-details" element={<ProcurementAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ProcurementAdminSettingsRoutes />} />
                <Route  path="/bidders" element={<ProcurementAdminBidders />} />
                <Route  path="/request-for-quotes/*" element={<ProcurementAdminRFQRoutes />} />
            </Routes>
        </>
    )
}

export default ProcurementAdminRoutes;