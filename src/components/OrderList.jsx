import OrderItem from "./OrderItem";
import React from "react";
export default function OrderList({ orders }) {
  if (orders.length === 0)
    return <div style={{ color: "#888", marginTop: 20 }}>No hay pedidos para mostrar.</div>;
  return (
    <>
      {orders.map(order => (
        <OrderItem key={order.id} order={order} />
      ))}
    </>
  );
}