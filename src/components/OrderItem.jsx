import React from "react";


export default function OrderItem({ order }) {
    // Validaciones internas
    if (!order.customer || order.customer.length < 3) return null;
    if (!Array.isArray(order.products) || order.products.some(p => p.quantity <= 0)) return null;
  
    const statusColor = {
      pending: "#f39c12",
      shipped: "#3498db",
      delivered: "#27ae60"
    };
  
    return (
      <div className="order-item">
        <h3>Pedido #{order.id}</h3>
        <p><b>Cliente:</b> {order.customer}</p>
        <p><b>Fecha:</b> {order.date}</p>
        <p>
          <b>Estado:</b> <span style={{ color: statusColor[order.status] }}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
        </p>
        <ul>
          {order.products.map((p, idx) => (
            <li key={idx}>
              <b>{p.name}</b> &mdash; Cantidad: {p.quantity} &mdash; Precio: ${p.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }