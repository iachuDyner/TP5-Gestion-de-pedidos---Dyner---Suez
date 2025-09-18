import { useState } from "react";
import { initialOrders } from "../data/orders";
import OrderList from "./OrderList";
import OrderFilter from "./OrderFilter";
import OrderStats from "./OrderStats";
import OrderForm from "./OrderForm";
import React from "react";
export default function Dashboard() {
  const [orders, setOrders] = useState(initialOrders);
  const [status, setStatus] = useState("");

  // Filtro por estado
  const filteredOrders = status ? orders.filter(o => o.status === status) : orders;

  // Agregar nuevo pedido
  function addOrder(order) {
    setOrders([order, ...orders]);
  }

  return (
    <>
      <div className="flex-row">
        <OrderForm addOrder={addOrder} />
        <OrderStats orders={orders} />
      </div>
      <OrderFilter status={status} setStatus={setStatus} />
      <div className="order-list">
        <OrderList orders={filteredOrders} />
      </div>
    </>
  );
}
