import React from "react";
import { Route, Routes } from "react-router-dom";
import BidderDashboard from "./BidderDashboard";
import BidderPurchaseContracts from "./BidderPurchaseContracts";
import BidderRequestForQuotes from "./BidderRequestForQuotes";
import BidDetails from "./BidDetails";

const BidderDashboardHome = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BidderDashboard />} />
                <Route path="/bidder-request-for-quotes" element={<BidderRequestForQuotes />} />
                <Route path="/bidder-purchase-contracts" element={<BidderPurchaseContracts />} />
                <Route path="/bid-details" element={<BidDetails />} />
            </Routes>
        </>
    )
}

export default BidderDashboardHome;