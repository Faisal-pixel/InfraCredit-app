import React from "react";
import { Route, Routes } from "react-router-dom";
import ITAdminDashboard from "./ITAdminDashboard";
import ITAdminRequisitionDetails from "./ITAdminRecentRequisitionsDetails";
import ITAdminSettingsRoutes from "./ITAdminSettingsRoutes";

const ITAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ITAdminDashboard />} />
                <Route  path="/dashboard/requisitions/details" element={<ITAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ITAdminSettingsRoutes />} />
            </Routes>
        </>
    )
}

export default ITAdminRoutes;