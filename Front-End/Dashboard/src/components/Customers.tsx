import { pool } from "../lib/db";
import { useState, useEffect } from "react";

type CustomerField = {
  id: string;
  name: string;
};

const fetchCustomers = async () => {
  const data =
    await pool.sql<CustomerField>`SELECT id, name FROM customers ORDER BY name ASC`;
  const customers = data.rows;

  return customers;
};

const Customers = () => {
  const [customers, setCusomers] = useState<CustomerField[] | null>(null);

  /**
   * Or you can setup TanStack Query and do something like this
   * const { isLoading, data } = useQuery({ ... })
   */
  useEffect(() => {
    const execute = async () => {
      const data = await fetchCustomers();
      setCusomers(data);
    };

    execute();
  }, []);

  if (customers === null) {
    return <p>Fetching customers....</p>;
  }

  if (customers.length === 0) {
    return <p>Nothing to show</p>;
  }

  return (
    <table className="hidden min-w-full rounded-md text-gray-900 md:table">
      <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Name
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            {" "}
            Email{" "}
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Total Invoices
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Total Pending
          </th>
          <th scope="col" className="px-4 py-5 font-medium">
            Total Paid
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 text-gray-900">
        {customers.map((customer) => {
          return (
            <tr key={customer.id}>
              <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                <div className="flex items-center gap-3">
                  <p>{customer.name}</p>
                </div>
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                customer.email
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                customer.total_invoices
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                customer.total_pending
              </td>
              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                customer.total_paid
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Customers;
