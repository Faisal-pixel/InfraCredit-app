import React from "react";
import { Route, Routes } from "react-router-dom";
import ITAdminRFQMyRequisitions from "./ITAdminRFQMyRequisitions";
import ITAdminRFQTeamRequisitions from "./ITAdminRFQTeamRequisitions";
import ITAdminRFQOtherRequisitions from "./ITAdminRFQOtherRequisitions";

const ITAdminRFQRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/my-requisitions" element={<ITAdminRFQMyRequisitions />}/>
                <Route  path="/team-requisitions" element={<ITAdminRFQTeamRequisitions />}/>
                <Route  path="/other-requisitions" element={<ITAdminRFQOtherRequisitions />}/>
            </Routes>
        </>
    )
}

export default ITAdminRFQRoutes;