import React from "react";
import { Route, Routes } from "react-router-dom";
import ITAdminSettingsAdminUsers from "./ITAdminSettingsAdminUsers";
import ITAdminSettingsUserRole from "./ITAdminSettingsUserRole";
import ITAdminSettingsUserPermissions from "./ITAdminSettingsUserPermissions";

const ITAdminSettingsRoutes = () => {
    return (
        <>
            <Routes>
                <Route  path="/admin-users" element={<ITAdminSettingsAdminUsers />}/>
                <Route  path="/user-roles" element={<ITAdminSettingsUserRole />}/>
                <Route  path="/user-permissions" element={<ITAdminSettingsUserPermissions/>}/>
            </Routes>
        </>
    )
}

export default ITAdminSettingsRoutes;