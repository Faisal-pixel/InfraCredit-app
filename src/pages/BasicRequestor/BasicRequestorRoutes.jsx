import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicRequestorDashboard from "./BasicRequestorDashboard";
import BasicRequestorTeamRequisitions from "./BasicRequestorTeamRequisitions";

const BasicRequestorRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BasicRequestorDashboard />} />
                <Route path="/team-requisitions" element={<BasicRequestorTeamRequisitions />} />
            </Routes>
        </>
    )
}

export default BasicRequestorRoutes;