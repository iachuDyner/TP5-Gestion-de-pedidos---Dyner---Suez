export default function OrderStats({ orders }) {
    const total = orders.length;
    const byStatus = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});
  
    return (
      <div className="order-stats">
        <h4>Estadísticas</h4>
        <p>Total de pedidos: <b>{total}</b></p>
        <ul>
          {["pending", "shipped", "delivered"].map(status => (
            <li key={status}>
              <span style={{ color: status === "pending" ? "#f39c12" : status === "shipped" ? "#3498db" : "#27ae60" }}>
                {status.charAt(0).toUpperCase() + status.slice(1)}: {byStatus[status] || 0}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }