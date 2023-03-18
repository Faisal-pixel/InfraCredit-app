import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginOptions from "./pages/LoginOptions";
import { useEffect } from "react";
import "./App.css"
import BidderDashboardHome from "./pages/Bidder/BidderDashboardHome";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bidder-dashboard":
        title = "InfraCredit Bidder Dashboard";
        metaDescription = "";
        break;
      case "/basic-requestor-dashboardpurchase-contracts-details":
        title = "";
        metaDescription = "";
        break;
      case "/basic-requestor-dashboardpurchase-contracts":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminpurchase-contracts-details":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminpurchase-contracts":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminbidders":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminsettingsuser-permissions":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminsettingsuser-role":
        title = "";
        metaDescription = "";
        break;
      case "/add-new-user":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminsettingsadmin-user":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequisitionsdetails":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequisitionsdetails1":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequest-for-quoteother-requisitions":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequest-for-quoteteam-requisitions":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequisitionsdetails2":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequest-for-quotemy-requisitions":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-adminrequisitionsdetails3":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-admindashboardall-records":
        title = "";
        metaDescription = "";
        break;
      case "/procurement-admindashboardmy-records":
        title = "";
        metaDescription = "";
        break;
      case "/basic-requestor-dashboardteam-requisitionsdetails":
        title = "";
        metaDescription = "";
        break;
      case "/basic-requestor-dashboardmy-requisitionsdetails":
        title = "";
        metaDescription = "";
        break;
      case "/basic-requestor-dashboardteam-requisitions":
        title = "";
        metaDescription = "";
        break;
      case "/basic-requestor-dashboardmy-requisitions":
        title = "";
        metaDescription = "";
        break;
      case "/microsoft-login-password":
        title = "";
        metaDescription = "";
        break;
      case "/microsoft-login-email":
        title = "";
        metaDescription = "";
        break;
      default:
        title="";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginOptions />} />
      <Route path="/bidder-dashboard/*" element={<BidderDashboardHome />} />
    </Routes>
  );
}
export default App;
