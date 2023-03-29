import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminSettings from "./ProcurementAdminSettings";

const ProcurementAdminSettingsRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/admin-user" element={<ProcurementAdminSettings />}/>
            </Routes>
        </>
    )
}

export default ProcurementAdminSettingsRoutes;