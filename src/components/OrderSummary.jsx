import React from "react";

export default function OrderSummary({ orders }) {
  // Calcular total de cada pedido
  const ordersWithTotals = orders.map(order => {
    const total = order.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    return { ...order, total };
  });

  return (
    <div className="orders-summary">
      <h4>Resumen de Pedidos</h4>
      <div className="summary-grid">
        {ordersWithTotals.map(order => (
          <div key={order.id} className="summary-card">
            <div className="order-header">
              <span className="order-code">#{order.id}</span>
              <span className="order-total">${order.total.toLocaleString()}</span>
            </div>
            <div className="order-customer">
              <span className="customer-label">Cliente:</span>
              <span className="customer-name">{order.customer}</span>
            </div>
            <div className="order-products">
              {order.products.map((product, idx) => (
                <div key={idx} className="product-summary">
                  <span className="product-name">{product.name}</span>
                  <span className="product-quantity">x{product.quantity}</span>
                </div>
              ))}
            </div>
            <div className="order-status">
              <span className={`status-badge status-${order.status}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
