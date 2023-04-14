import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagementRFQMyRequisitions from "./ManagementRFQMyRequisitions";
import ManagementRFQTeamRequisitions from "./ManagementRFQTeamRequisitions";
import ManagementRFQOtherRequisitions from "./ManagementRFQOtherRequisitions";

const ManagementRFQRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/my-requisitions" element={<ManagementRFQMyRequisitions />}/>
                <Route  path="/team-requisitions" element={<ManagementRFQTeamRequisitions />}/>
                <Route  path="/other-requisitions" element={<ManagementRFQOtherRequisitions />}/>
            </Routes>
        </>
    )
}

export default ManagementRFQRoutes;