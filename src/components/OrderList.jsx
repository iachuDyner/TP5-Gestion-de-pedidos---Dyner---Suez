import OrderItem from "./OrderItem";
import React from "react";
export default function OrderList({ orders }) {
  if (orders.length === 0)
    return <div className="empty-state">No hay pedidos para mostrar</div>;
  return (
    <>
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </>
  );
}