const STATUS = ["pending", "shipped", "delivered"];
import React from "react";
export default function OrderFilter({ status, setStatus }) {
  return (
    <div className="filter-container">
      <label>Filtrar por estado:</label>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">Todos los pedidos</option>
        {STATUS.map(st => (
          <option key={st} value={st}>
            {st.charAt(0).toUpperCase() + st.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}