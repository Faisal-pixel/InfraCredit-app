import React from "react";
import DashboardNavigation from "../../components/DashboardNavigation";

const ProcurementAdminDashboardNavigationComponent = ({
    dashboardActive = false,
    settingsActive = false,
    biddersActive = false,
    requestForQuotesActive = false,
    purchaseContractsActive = false,
    purchaseDocumentsActive = false,
  }) => {
    return <>
        <DashboardNavigation dashboard dashboardActive={dashboardActive} dashboardGoTo="/procurement-admin" settings settingsGoTo="/procurement-admin/settings/admin-user" settingsActive={settingsActive} bidders biddersActive={biddersActive} biddersGoTo="/procurement-admin/bidders" requestForQuotes requestForQuotesActive={requestForQuotesActive} requestForQuotesGoTo="/procurement-admin/request-for-quotes/my-requisitions" purchaseContracts purchaseContractsGoTo="/procurement-admin/purchase-contracts" purchaseContractsActive={purchaseContractsActive} purchaseDocuments/>
    </>
}

export default ProcurementAdminDashboardNavigationComponent;