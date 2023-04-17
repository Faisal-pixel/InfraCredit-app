import React from "react";
import { Route, Routes } from "react-router-dom";
import ITAdminRFQMyRequisitions from "./ITAdminRFQMyRequisitions";
import ITAdminRFQTeamRequisitions from "./ITAdminRFQTeamRequisitions";
import ITAdminRFQOtherRequisitions from "./ITAdminRFQOtherRequisitions";
import ITAdminRFQMyRequisitionDetails from "./ITAdminRFQMyRequisitionsDetails";
import ITAdminRFQTeamRequisitionDetails from "./ITAdminRFQTeamRequisitionsDetails";
import ITAdminRFQOtherRequisitionDetails from "./ITAdminRFQOtherRequisitionsDetails";

const ITAdminRFQRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/my-requisitions" element={<ITAdminRFQMyRequisitions />}/>
                <Route  path="/my-requisitions/details" element={<ITAdminRFQMyRequisitionDetails />}/>
                <Route  path="/team-requisitions" element={<ITAdminRFQTeamRequisitions />}/>
                <Route  path="/team-requisitions/details" element={<ITAdminRFQTeamRequisitionDetails />}/>
                <Route  path="/other-requisitions" element={<ITAdminRFQOtherRequisitions />}/>
                <Route  path="/other-requisitions/details" element={<ITAdminRFQOtherRequisitionDetails />}/>
            </Routes>
        </>
    )
}

export default ITAdminRFQRoutes;