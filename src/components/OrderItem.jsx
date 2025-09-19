import React from "react";


export default function OrderItem({ order }) {
    // Validaciones internas
    if (!order.customer || order.customer.length < 3) return null;
    if (!Array.isArray(order.products) || order.products.some(p => p.quantity <= 0)) return null;

    // Calcular total del pedido
    const orderTotal = order.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  
    const statusColor = {
      pending: "#f39c12",
      shipped: "#3498db",
      delivered: "#27ae60"
    };
  
    return (
      <div className="order-item">
        <div className="order-header">
          <h3>Pedido #{order.id}</h3>
          <p><b>Cliente:</b> {order.customer}</p>
          <p><b>Fecha:</b> {order.date}</p>
          <p>
            <b>Estado:</b> <span className={`status-badge status-${order.status}`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </p>
        </div>
        
        <div className="order-products">
          {order.products.map((p, idx) => (
            <div key={idx} className="product-card">
              <div className="product-details">
                <div className="product-name">{p.name}</div>
                <div className="product-info">
                  <span>Cantidad: {p.quantity}</span>
                  <span>Precio unitario: ${p.price}</span>
                </div>
                <div className="product-subtotal">
                  Subtotal: ${(p.quantity * p.price).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Resumen total del pedido */}
        <div className="order-total-summary">
          <div className="total-summary">
            <span className="total-label">Total del Pedido:</span>
            <span className="total-amount">${orderTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }