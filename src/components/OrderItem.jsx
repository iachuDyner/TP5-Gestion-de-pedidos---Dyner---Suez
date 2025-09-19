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
              <div className="product-image-container">
                {p.images && p.images.length > 0 ? (
                  <img 
                    src={p.images[0].preview} 
                    alt={p.name}
                    className="product-image"
                  />
                ) : (
                  <div style={{ 
                    color: '#999', 
                    fontSize: '0.9rem',
                    textAlign: 'center'
                  }}>
                    Sin imagen
                  </div>
                )}
              </div>
              <div className="product-details">
                <div className="product-name">{p.name}</div>
                <div className="product-price">${p.price}</div>
                <div className="product-info">Cantidad: {p.quantity}</div>
                {p.images && p.images.length > 1 && (
                  <div className="product-info" style={{ color: '#999', fontSize: '0.8rem' }}>
                    +{p.images.length - 1} imagen{p.images.length - 1 !== 1 ? 'es' : ''} más
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }