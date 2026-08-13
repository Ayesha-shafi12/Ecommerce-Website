import { Link } from "react-router-dom";
import { PackageCheck } from "lucide-react";

import { useOrders } from "../contexts/OrderContext";

const Orders = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <section className="flex min-h-[65vh] items-center justify-center px-4">
        <div className="text-center">
          <PackageCheck size={55} className="mx-auto mb-4 text-gray-300" />

          <h1 className="text-2xl font-bold">No orders yet</h1>

          <p className="mt-2 text-gray-500">
            Your completed orders will appear here.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="mb-8 text-3xl font-bold">My Orders</h1>

        <div className="space-y-5">
          {orders.map((order) => (
            <article
              key={order.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-3 border-b pb-4 sm:flex-row">
                <div>
                  <p className="font-bold">{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
                  {order.status}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>

                    <span>
                      Rs {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t pt-4 text-right">
                <span className="font-bold">
                  Total: Rs {order.total.toLocaleString()}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
