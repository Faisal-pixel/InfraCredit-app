import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GeneralButton from "./GeneralButton";


import styles from "./SubDashboardNav.module.css";

const SubDashboardNav = ({adminUser, adminUserActive, userRoles, userRolesActive, userPermissions, userPermissionsActive, buttonName, shouldIncludeButton}) => {
    const navigate = useNavigate();
    // const onRequestForQuotesClick = useCallback(() => {
    //     navigate("/bidder-dashboard/bidder-request-for-quotes")
    // }, [navigate])
    const onAdminUsers = useCallback(() => {
        navigate("/procurement-admin/settings/admin-user")
    }, [navigate])
    const onUserRolesClick = useCallback(() => {
        navigate("/procurement-admin/settings/user-roles")
    }, [navigate])
    const onUserPermissionsClick = useCallback(() => {
        navigate("/procurement-admin/settings/user-permissions")
    }, [navigate])
    // const teamRequisitionsClick = useCallback(() => {
    //     navigate("/basic-requestor/team-requisitions")
    // }, [navigate])
    // const myPurchaseContractsClick = useCallback(() => {
    //     navigate("/basic-requestor/purchase-contracts")
    // }, [navigate])
    // const onSettingsClick = useCallback(() => {
    //     navigate("/procurement-admin/settings/admin-user")
    // }, [navigate])

    return (
        <div className={styles.tabMenu}>
            <div className={styles.topMenu}>
              <div onClick={onAdminUsers} className={`${adminUser ? styles.div5 : styles.div} ${adminUserActive && styles.div7}`}>
                <div className={styles.dashboard}>Admin Users</div>
                <div className={styles.child} />
              </div>
              <div onClick={onUserRolesClick} className={`${userRoles ? styles.div5 : styles.div} ${userRolesActive && styles.div7}`}>
                <div className={styles.dashboard}>User Roles</div>
                <div className={styles.child} />
              </div>
              <div onClick={onUserPermissionsClick} className={`${userPermissions ? styles.div5 : styles.div} ${userPermissionsActive && styles.div7}`}>
                <div className={styles.dashboard}>User Permissions</div>
                <div className={styles.child} />
              </div>
              <div className={styles.buttonContainer}>
                {
                  shouldIncludeButton && <GeneralButton buttonName={buttonName}/>
                }
              </div>
            </div>
            <div className={styles.tabMenuChild} />
          </div>
    )
}

export default SubDashboardNav;