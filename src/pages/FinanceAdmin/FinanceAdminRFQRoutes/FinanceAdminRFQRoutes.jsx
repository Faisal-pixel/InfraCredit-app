import React from "react";
import { Route, Routes } from "react-router-dom";
import FinanceAdminRFQMyRequisitions from "./FinanceAdminRFQMyRequisitions";
import FinanceAdminRFQTeamRequisitions from "./FinanceAdminRFQTeamRequisitions";
import FinanceAdminRFQOtherRequisitions from "./FinanceAdminRFQOtherRequisitions";

const FinanceAdminRFQRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/my-requisitions" element={<FinanceAdminRFQMyRequisitions />}/>
                <Route  path="/team-requisitions" element={<FinanceAdminRFQTeamRequisitions />}/>
                <Route  path="/other-requisitions" element={<FinanceAdminRFQOtherRequisitions />}/>
            </Routes>
        </>
    )
}

export default FinanceAdminRFQRoutes;