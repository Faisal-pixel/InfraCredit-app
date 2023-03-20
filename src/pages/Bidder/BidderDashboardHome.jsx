import React from "react";
import { Route, Routes } from "react-router-dom";
import BidderDashboard from "./BidderDashboard";
import BidderPurchaseContracts from "./BidderPurchaseContracts";
import BidderRequestForQuotes from "./BidderRequestForQuotes";

const BidderDashboardHome = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BidderDashboard />} />
                <Route path="/bidder-request-for-qoutes" element={<BidderRequestForQuotes />} />
                <Route path="/bidder-purchase-contracts" element={<BidderPurchaseContracts />} />
            </Routes>
        </>
    )
}

export default BidderDashboardHome;