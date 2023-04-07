import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminRFQ from "./ProcurementAdminRFQ";
import ProcurementAdminRFQTeamRequisitions from "./ProcurementAdminRFQTeamRequisitions";
import ProcurementAdminRFQOtherRequisitions from "./ProcurementAdminRFQOtherRequisitions";

const ProcurementAdminRFQRoutes = () => {
    return <>
        <Routes>
            <Route  path="/my-requisitions" element={<ProcurementAdminRFQ />}/>
            <Route  path="/team-requisitions" element={<ProcurementAdminRFQTeamRequisitions />}/>
            <Route  path="/other-requisitions" element={<ProcurementAdminRFQOtherRequisitions />}/>
        </Routes>
    </>
}

export default ProcurementAdminRFQRoutes;