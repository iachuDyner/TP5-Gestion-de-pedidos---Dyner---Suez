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
          <b>Estado:</b> <span className={`status-badge status-${order.status}`}>
            {order.status === 'pending' && '⏳'}
            {order.status === 'shipped' && '🚚'}
            {order.status === 'delivered' && '✅'}
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </p>
        <ul>
          {order.products.map((p, idx) => (
            <li key={idx}>
              <div className="product-info">
                {p.images && p.images.length > 0 && (
                  <img 
                    src={p.images[0].preview} 
                    alt={p.name}
                    className="product-image"
                  />
                )}
                <div className="product-details">
                  <div><b>{p.name}</b></div>
                  <div style={{ fontSize: '0.9rem', color: '#718096' }}>
                    Cantidad: {p.quantity} &mdash; Precio: ${p.price}
                  </div>
                  {p.images && p.images.length > 1 && (
                    <small style={{ color: '#a0aec0' }}>
                      +{p.images.length - 1} imagen{p.images.length - 1 !== 1 ? 'es' : ''} más
                    </small>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }