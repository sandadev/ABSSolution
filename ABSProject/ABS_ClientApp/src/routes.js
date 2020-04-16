import Dashboard from './components/pages/Dashboard';
import Stocks from './components/pages/Stocks';
import Purchases from './components/pages/Purchases';
import Reports from './components/pages/Reports';
// import BankLedgers from './components/bank-ledger'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/stocks",
    name: "Stocks",
    icon: "pe-7s-user",
    component: Stocks
  },
  {
    path: "/purchases",
    name: "Purchases",
    icon: "pe-7s-note2",
    component: Purchases
  },
  // {
  //   path: "/bankledgers",
  //   name: "Bank Ledgers",
  //   icon: "pe-7s-news-paper",
  //   component: BankLedgers
  // },
  {
    path: "/reports",
    name: "Reports",
    icon: "pe-7s-science",
    component: Reports
  }
];

export default dashboardRoutes;
