import React from "react";
import DashboardNavigation from "../../../components/DashboardNavigation";

const ManagementDashboardNavigationComponent = ({
    dashboardActive = false,
    requestForQuotesActive = false,
    purchaseContractsActive = false,
    biddersActive = false,
    purchaseDocumentsActive = false,
  }) => {
    return <>
        <DashboardNavigation dashboard dashboardActive={dashboardActive} dashboardGoTo="/management/dashboard" bidders biddersActive={biddersActive} biddersGoTo="/management/bidders"  requestForQuotes requestForQuotesActive={requestForQuotesActive} requestForQuotesGoTo="/management/request-for-quotes/my-requisitions" purchaseContracts purchaseContractsGoTo="/management/purchase-contracts" purchaseContractsActive={purchaseContractsActive} purchaseDocuments/>
    </>
}

export default ManagementDashboardNavigationComponent;