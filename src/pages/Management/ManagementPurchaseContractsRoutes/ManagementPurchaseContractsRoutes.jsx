import React from "react";
import { Route, Routes } from "react-router-dom";
import ManagementPurchaseContracts from "./ManagementPurchaseContracts";

const ManagementPurchaseContractsRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ManagementPurchaseContracts />}/>
            </Routes>
        </>
    )
}

export default ManagementPurchaseContractsRoutes;