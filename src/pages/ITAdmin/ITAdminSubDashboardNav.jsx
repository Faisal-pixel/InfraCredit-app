import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GeneralButton from "../../components/GeneralButton";


import styles from "../../components/SubDashboardNav.module.css";

const ITAdminSubDashboardNav = ({adminUser, adminUserActive, userRoles, userRolesActive, userPermissions, userPermissionsActive, myRequisitions, myRequisitionsActive, teamRequisitions, teamRequisitionsActive, otherRequistions, otherRequistionsActive, buttonName, shouldIncludeButton}) => {
    const navigate = useNavigate();
    // const onRequestForQuotesClick = useCallback(() => {
    //     navigate("/bidder-dashboard/bidder-request-for-quotes")
    // }, [navigate])
    const onAdminUsers = useCallback(() => {
        navigate("/it-admin/settings/admin-users")
    }, [navigate])
    const onUserRolesClick = useCallback(() => {
        navigate("/it-admin/settings/user-roles")
    }, [navigate])
    const onUserPermissionsClick = useCallback(() => {
        navigate("/it-admin/settings/user-permissions")
    }, [navigate])
    const onMyRequisitionsClick = useCallback(() => {
        navigate("/it-admin/request-for-quotes/my-requisitions")
    }, [navigate])
    const onTeamRequisitionsClick = useCallback(() => {
        navigate("/it-admin/request-for-quotes/team-requisitions")
    }, [navigate])
    
    const onOtherRequisitionsClick = useCallback(() => {
        navigate("/it-admin/request-for-quotes/other-requisitions")
    }, [navigate])

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
              {/* PROCUREMENT ADMIN REQUEST FOR QUOTES SUB NAV */}
              <div onClick={onMyRequisitionsClick} className={`${myRequisitions ? styles.div5 : styles.div} ${myRequisitionsActive && styles.div7}`}>
                <div className={styles.dashboard}>My Requisitions</div>
                <div className={styles.child} />
              </div>
              <div onClick={onTeamRequisitionsClick} className={`${teamRequisitions ? styles.div5 : styles.div} ${teamRequisitionsActive && styles.div7}`}>
                <div className={styles.dashboard}>Team Requisitions</div>
                <div className={styles.child} />
              </div>
              <div onClick={onOtherRequisitionsClick} className={`${otherRequistions ? styles.div5 : styles.div} ${otherRequistionsActive && styles.div7}`}>
                <div className={styles.dashboard}>Other Requisitions</div>
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

export default ITAdminSubDashboardNav;