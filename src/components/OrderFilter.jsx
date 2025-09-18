const STATUS = ["pending", "shipped", "delivered"];

export default function OrderFilter({ status, setStatus }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <label style={{ fontWeight: "bold", marginRight: 8 }}>Filtrar por estado:</label>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">Todos</option>
        {STATUS.map(st => (
          <option key={st} value={st}>
            {st.charAt(0).toUpperCase() + st.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}