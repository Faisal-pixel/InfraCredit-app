import React from "react";
import { Route, Routes } from "react-router-dom";
import BidderDashboard from "./BidderDashboard";
import BidderRequestForQuotes from "./BidderRequestForQuotes";

const BidderDashboardHome = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<BidderDashboard />} />
                <Route path="/bidder-request-for-qoutes" element={<BidderRequestForQuotes />} />
            </Routes>
        </>
    )
}

export default BidderDashboardHome;