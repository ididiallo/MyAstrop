// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { fetchRevenue } from "../lib/data";
import { fetchLatestInvoices } from "../lib/data";
import { fetchCardData } from "../lib/data";

const Dashboard = ({ cardData, revenue }) => {
  const latestInvoices = fetchLatestInvoices();
  console.log("dashboard", revenue)
  return (
    <div class="flex-grow p-6 md:overflow-y-auto md:p-12">
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
