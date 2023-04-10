import React from "react";
import { Route, Routes } from "react-router-dom";
import ITAdminDashboard from "./ITAdminDashboard";

const ITAdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<ITAdminDashboard />} />
            </Routes>
        </>
    )
}

export default ITAdminRoutes;