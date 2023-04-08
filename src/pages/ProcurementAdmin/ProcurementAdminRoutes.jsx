import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminBidders from "./ProcurementAdminBidders";
import ProcurementAdminDashboard from "./ProcurementAdminDashboard";
import ProcurementAdminRequisitionDetails from "./ProcurementAdminRecentRequisitionsDetails";
import ProcurementAdminSettingsRoutes from "./ProcurementAdminSettingsRoutes";
import ProcurementAdminRFQRoutes from "./ProcurementAdminRFQRoutes";
import ProcurementAdminPurchaseContracts from "./ProcurementAdminPurchaseContracts";
import ProcurementAdminPurchaseContractsDetails from "./ProcurementAdminPurchaseContractsDetails";

const ProcurementAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ProcurementAdminDashboard />} />
                <Route  path="/requisition-details" element={<ProcurementAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ProcurementAdminSettingsRoutes />} />
                <Route  path="/bidders" element={<ProcurementAdminBidders />} />
                <Route  path="/request-for-quotes/*" element={<ProcurementAdminRFQRoutes />} />
                <Route  path="/purchase-contracts" element={<ProcurementAdminPurchaseContracts />} />
                <Route  path="/purchase-contracts/details" element={<ProcurementAdminPurchaseContractsDetails />} />
            </Routes>
        </>
    )
}

export default ProcurementAdminRoutes;