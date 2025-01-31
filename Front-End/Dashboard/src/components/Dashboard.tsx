import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";

const Dashboard = ({ cardData, revenue, latestInvoices }) => {
  return (
    <div className="flex-1 px-3 py-4 md:px-2">
      <main>
        {/* <h1 class="__className_712214 mb-4 text-xl md:text-2xl">
        Dashboard
      </h1> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Collected"
            value={cardData.totalPaidInvoices}
            type="collected"
          />
          <Card
            title="Pending"
            value={cardData.totalPendingInvoices}
            type="pending"
          />
          <Card
            title="Total Invoices"
            value={cardData.numberOfInvoices}
            type="invoices"
          />
          <Card
            title="Total Customers"
            value={cardData.numberOfCustomers}
            type="customers"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart revenue={revenue} />
          <LatestInvoices latestInvoices={latestInvoices} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
