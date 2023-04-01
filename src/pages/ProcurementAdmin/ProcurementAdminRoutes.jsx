import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminDashboard from "./ProcurementAdminDashboard";
import ProcurementAdminRequisitionDetails from "./ProcurementAdminRecentRequisitionsDetails";
import ProcurementAdminUserPermissions from "./ProcurementAdminUserPermissions";

const ProcurementAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ProcurementAdminDashboard />} />
                <Route  path="/requisition-details" element={<ProcurementAdminRequisitionDetails />} />
                <Route  path="/settings/*" element={<ProcurementAdminUserPermissions />}>

                </Route>
            </Routes>
        </>
    )
}

export default ProcurementAdminRoutes;