import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicRequestorDashboard from "./BasicRequestorDashboard";
import BasicRequestorPurchaseContracts from "./BasicRequestorPurchaseContracts";
import BasicRequestorRequisitionDetails from "./BasicRequestorRequisitionDetails";
import BasicRequestorTeamRequisitions from "./BasicRequestorTeamRequisitions";

const BasicRequestorRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BasicRequestorDashboard />} />
                <Route path="/team-requisitions" element={<BasicRequestorTeamRequisitions />} />
                <Route path="/requisition-details" element={<BasicRequestorRequisitionDetails />} />
                <Route path="/purchase-contracts" element={<BasicRequestorPurchaseContracts />} />
            </Routes>
        </>
    )
}

export default BasicRequestorRoutes;