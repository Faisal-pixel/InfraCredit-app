import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminRFQ from "./ProcurementAdminRFQ";

const ProcurementAdminRFQRoutes = () => {
    return <>
        <Routes>
            <Route  path="/my-requisitions" element={<ProcurementAdminRFQ />}/>
        </Routes>
    </>
}

export default ProcurementAdminRFQRoutes;