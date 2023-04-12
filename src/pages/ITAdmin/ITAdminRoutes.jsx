import React from "react";
import { Route, Routes } from "react-router-dom";
import ITAdminDashboard from "./ITAdminDashboard";
import ITAdminRequisitionDetails from "./ITAdminRecentRequisitionsDetails";
import ITAdminSettingsRoutes from "./ITAdminSettingsRoutes";
import ITAdminBidders from "./ITAdminBidders";
import ITAdminRFQRoutes from "./ITAdminRFQRoutes";
import ITAdminPurchaseContracts from "./ITAdminPurchaseContracts";

const ITAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ITAdminDashboard />} />
                <Route  path="/dashboard/requisitions/details" element={<ITAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ITAdminSettingsRoutes />} />
                <Route  path="/bidders" element={<ITAdminBidders />} />
                <Route  path="/request-for-quotes/*" element={<ITAdminRFQRoutes />} />
                <Route  path="/purchase-contracts" element={<ITAdminPurchaseContracts />} />
            </Routes>
        </>
    )
}

export default ITAdminRoutes;