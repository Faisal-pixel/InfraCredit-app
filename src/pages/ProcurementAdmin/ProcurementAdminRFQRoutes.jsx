import React from "react";
import { Route, Routes } from "react-router-dom";
import ProcurementAdminRFQ from "./ProcurementAdminRFQ";
import ProcurementAdminRFQTeamRequisitions from "./ProcurementAdminRFQTeamRequisitions";
import ProcurementAdminRFQOtherRequisitions from "./ProcurementAdminRFQOtherRequisitions";
import ProcurementAdminRFQMyRequisitionDetails from "./ProcurementAdminRFQMyRequisitionsDetails";
import ProcurementAdminRFQTeamRequisitionDetails from "./ProcurementAdminRFQTeamRequisitionsDetails";
import ProcurementAdminRFQOtherRequisitionDetails from "./ProcurementAdminRFQOtherRequisitionsDetails";

const ProcurementAdminRFQRoutes = () => {
    return <>
        <Routes>
            <Route  path="/my-requisitions" element={<ProcurementAdminRFQ />}/>
            <Route  path="/my-requisitions/details" element={<ProcurementAdminRFQMyRequisitionDetails />}/>
            <Route  path="/team-requisitions" element={<ProcurementAdminRFQTeamRequisitions />}/>
            <Route  path="/team-requisitions/details" element={<ProcurementAdminRFQTeamRequisitionDetails />}/>
            <Route  path="/other-requisitions" element={<ProcurementAdminRFQOtherRequisitions />}/>
            <Route  path="/other-requisitions/details" element={<ProcurementAdminRFQOtherRequisitionDetails />}/>
        </Routes>
    </>
}

export default ProcurementAdminRFQRoutes;