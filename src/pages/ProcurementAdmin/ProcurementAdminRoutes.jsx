import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminDashboard from "./ProcurementAdminDashboard";
import ProcurementAdminRequisitionDetails from "./ProcurementAdminRecentRequisitionsDetails";
import ProcurementAdminSettingsRoutes from "./ProcurementAdminSettingsRoutes";

const ProcurementAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ProcurementAdminDashboard />} />
                <Route  path="/requisition-details" element={<ProcurementAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ProcurementAdminSettingsRoutes />}>

                </Route>
            </Routes>
        </>
    )
}

export default ProcurementAdminRoutes;