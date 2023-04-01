import React, {useState, useCallback, useMemo} from "react";
import {  useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import MainHeader from "../../components/MainHeader";
import PortalPopup from "../../components/PortalPopup";
import NotificationPopup from "../../components/NotificationPopup";
import UserGreetings from "../../components/UserGreetings";

import styled from "styled-components";
import SubDashboardNav from "../../components/SubDashboardNav";
import ProcurementAdminDashboardNavigationComponent from "./ProcurementAdminDashboardNavigationComponent";
import ReactTable from "../../components/ReactTable";
import SelectDropdown from "../../components/SelectDropdown";



const permissionSetData = [
    {
        accessorID: 1,
        permission: "Basic"
    },
    {
        accessorID: 2,
        permission: "Approver"
    },
    {
        accessorID: 3,
        permission: "Uploader"
    },
    {
        accessorID: 4,
        permission: "Sys Admin"
    },
    {
        accessorID: 5,
        permission: "Manager"
    },
    {
        accessorID: 6,
        permission: "Lead"
    },
    {
        accessorID: 4,
        permission: "Supervisor"
    },
]



const ProcurementAdminUserPermissions = () => {
    const columns = useMemo(() => [
            
            {
                Header: "Admin Users",
                accessor: "adminUsers"
            },
            {
                Header: "User role",
                accessor: "userRole"
            },
            {
                Header: "User Type",
                accessor: "userType"
            },
    ], [])

    const data = useMemo(() => [
        {
            adminUsers: "John Snow",
            userRole: "Basic",
            userType: "Vendor"
        },
        {
            adminUsers: "Bill Gate",
            userRole: "Approver",
            userType: "Vendor"
        },
        {
            adminUsers: "Jane Doe",
            userRole: "Uploader",
            userType: "Vendor"
        },
        {
            adminUsers: "Mark Henry",
            userRole: "Sys Admin",
            userType: "Vendor"
        },
        {
            adminUsers: "Alabi Tope",
            userRole: "Manager",
            userType: "Vendor"
        },
        {
            adminUsers: "Bello Fawaz",
            userRole: "Lead",
            userType: "Vendor"
        },
        {
            adminUsers: "Joke Ayo",
            userRole: "Supervisor",
            userType: "Vendor"
        },
    ], [])
    
    

    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [isDropdownDropped, setDropdownDropped] = useState(false)
    const [updateSelect, setUpdateSelect] = useState("");
    
    const navigate = useNavigate();

    const openNotification = useCallback(() => {
        setNotificationOpen(true);
      }, []);
    
      const closeNotification = useCallback(() => {
        setNotificationOpen(false);
      }, []);

      const onContainerClick = useCallback(() => {
        navigate("/");
      }, [navigate]);


    const openDropdown = useCallback(() => {
        setDropdownDropped(!isDropdownDropped);
    }, [isDropdownDropped]);

    const closeDropdown = useCallback(() => {
        setDropdownDropped(false);
    }, []);

    return(
        <>
            <ProcurementAdminUserPermissionsStyled>
                <MainHeader
                    dimensions="/group.svg"
                    dimensionsText="/vector2.svg"
                    dimensionsCode="/vector3.svg"
                    dimensionsCode2="/ellipse-6@2x.png"
                    dimensionsCode3="/arrowsmdown-1.svg"
                    dimensionsCode4="/frame.svg"
                    dimensionsCode5="/ellipse-61@2x.png"
                    dimensionsCode6="/arrowsmdown-11.svg"
                    openNotification={openNotification}
                    onContainerClick={onContainerClick}
                />
                 
                <div className="body page-container">
                        <UserGreetings />
                        <ProcurementAdminDashboardNavigationComponent settingsActive/>
                        <SubDashboardNav adminUser userRoles userPermissions userPermissionsActive/>
                        <InputParentStyled>
                            <div className="input">
                                <div className="permissionSet">Permission set:</div>
                                <div className="inputField" onClick={openDropdown}>
                                    <div className="pleaseSelect">Basic</div>
                                    <img className="frameIcon" alt="" src="/frame11.svg" />
                                    {
                                        isDropdownDropped && <SelectDropdown permissionsData={permissionSetData}/>
                                    }
                                </div>
                            </div>
                            <div className="buttonParent">
                                <div className="button">
                                    <div className="permissionSet">Import Permission set</div>
                                </div>
                                <div className="button">
                                    <div className="permissionSet">Export permission set</div>
                                </div>
                            </div>
                        </InputParentStyled>
                    <UserPermissionsStyled>
                        <ReactTable columns={columns} data={data} />
                    </UserPermissionsStyled>
                </div>
            </ProcurementAdminUserPermissionsStyled>

            {isNotificationOpen && (
                <PortalPopup
                
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
                onOutsideClick={closeNotification}
                >
                <NotificationPopup onClose={closeNotification} />
                </PortalPopup>
            )}
        </>
    )

    
}

const ProcurementAdminUserPermissionsStyled = styled.div``;

const UserPermissionsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--body-text-size);
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--white1);
    padding: var(--padding-xl) 0 0;
    gap: var(--gap-xl);
    text-align: left;
    font-family: var(--h21);
    
    table {
        width: 100%;
        border-spacing: 0;
        thead {
            .my-custom-row {
            
        }
        }
        thead {
            cursor: pointer;
            th {
                color: var(--grey-dark);
                font-style: normal;
                font-weight: 400;
                font-size: 1rem;

            }
        }
        th, td {
            border-bottom: 2px solid var(--grey-light);
            padding: 1rem;
        }
    }
`;

const InputParentStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .permissionSet,
    .pleaseSelect {
        position: relative;
        line-height: 19.2px;
    }

    .pleaseSelect {
        line-height: 14.4px;
    }
    .frameIcon {
        position: relative;
        width: 15px;
        height: 15px;
        flex-shrink: 0;
        overflow: hidden;
    }
    .inputField {
        border-radius: var(--br-8xs);
        border: 0.5px solid var(--grey-dark);
        box-sizing: border-box;
        width: 16.9rem;
        flex-shrink: 0;
        display: flex;
        flex-direction: row;
        padding: var(--padding-3xs);
        justify-content: space-between;
        cursor: pointer;
        font-size: var(--caption-size);
        position: relative;
        overflow: visible;
    }
    .button,
    .input,
    .inputField {
        align-items: center;
    }
    .input {
        height: 55px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: var(--gap-8xs);
    }
    .button {
        border-radius: var(--br-31xl);
        background-color: var(--white1);
        border: 1px solid var(--primary);
        box-sizing: border-box;
        width: 200px;
        height: 40px;
        flex-shrink: 0;
        padding: var(--padding-3xs);
        justify-content: center;
    }
    .button,
    .buttonParent,
    .inputParent {
        display: flex;
        flex-direction: row;
    }
    .buttonParent {
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-xl);
        color: var(--primary);
    }
    .inputParent {
        align-self: stretch;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        font-size: var(--body-text-size);
        color: var(--black1);
        font-family: var(--h21);
    }

`

export default ProcurementAdminUserPermissions;