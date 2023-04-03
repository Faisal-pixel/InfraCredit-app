import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminSettings from "./ProcurementAdminSettings";
import ProcurementAdminSettingsUserRole from "./ProcurementAdminSettingsUserRole";
import ProcurementAdminUserPermissions from "./ProcurementAdminUserPermissions";

const ProcurementAdminSettingsRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/admin-user" element={<ProcurementAdminSettings />}/>
                <Route  path="/user-roles" element={<ProcurementAdminSettingsUserRole />}/>
                <Route  path="/user-permissions" element={<ProcurementAdminUserPermissions />}/>
            </Routes>
        </>
    )
}

export default ProcurementAdminSettingsRoutes;