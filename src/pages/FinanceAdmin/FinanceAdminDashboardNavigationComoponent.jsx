import React from "react";
import DashboardNavigation from "../../components/DashboardNavigation";

const FinanceAdminDashboardNavigationComponent = ({
    dashboardActive = false,
    requestForQuotesActive = false,
    purchaseContractsActive = false,
    purchaseDocumentsActive = false,
  }) => {
    return <>
        <DashboardNavigation dashboard dashboardActive={dashboardActive} dashboardGoTo="/finance-admin/dashboard" requestForQuotes requestForQuotesActive={requestForQuotesActive} requestForQuotesGoTo="/finance-admin/request-for-quotes/my-requisitions" purchaseContracts purchaseContractsGoTo="/finance-admin/purchase-contracts" purchaseContractsActive={purchaseContractsActive} purchaseDocuments/>
    </>
}

export default FinanceAdminDashboardNavigationComponent;