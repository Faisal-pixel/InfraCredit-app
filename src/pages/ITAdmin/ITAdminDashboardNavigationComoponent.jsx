import React from "react";
import DashboardNavigation from "../../components/DashboardNavigation";

const ITAdminDashboardNavigationComponent = ({
    dashboardActive = false,
    settingsActive = false,
    biddersActive = false,
    requestForQuotesActive = false,
    purchaseContractsActive = false,
    purchaseDocumentsActive = false,
  }) => {
    return <>
        <DashboardNavigation dashboard dashboardActive={dashboardActive} dashboardGoTo="/it-admin" settings settingsGoTo="/it-admin/settings/admin-users" settingsActive={settingsActive} bidders biddersActive={biddersActive} biddersGoTo="/it-admin/bidders" requestForQuotes requestForQuotesActive={requestForQuotesActive} requestForQuotesGoTo="/it-admin/request-for-quotes/my-requisitions" purchaseContracts purchaseContractsGoTo="/it-admin/purchase-contracts" purchaseContractsActive={purchaseContractsActive} purchaseDocuments/>
    </>
}

export default ITAdminDashboardNavigationComponent;