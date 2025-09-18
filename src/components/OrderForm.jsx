import { useState } from "react";

export default function OrderForm({ addOrder }) {
  const [customer, setCustomer] = useState("");
  const [products, setProducts] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [message, setMessage] = useState("");

  function handleProductChange(idx, field, value) {
    const copy = [...products];
    copy[idx][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setProducts(copy);
  }

  function addProduct() {
    setProducts([...products, { name: "", quantity: 1, price: 0 }]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    // Validaciones
    if (customer.length < 3) {
      setMessage("El nombre del cliente debe tener al menos 3 caracteres.");
      return;
    }
    if (products.some(p => !p.name || p.quantity <= 0 || p.price < 0)) {
      setMessage("Completa correctamente los campos de cada producto.");
      return;
    }

    addOrder({
      id: Math.floor(Math.random() * 100000),
      customer,
      date: new Date().toISOString().slice(0, 10),
      status: "pending",
      products
    });

    setCustomer("");
    setProducts([{ name: "", quantity: 1, price: 0 }]);
    setMessage("Pedido agregado correctamente.");
    setTimeout(() => setMessage(""), 1600);
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h4>Nuevo Pedido</h4>
      <input
        type="text"
        placeholder="Cliente"
        value={customer}
        onChange={e => setCustomer(e.target.value)}
        required
      />
      <h5>Productos</h5>
      {products.map((p, idx) => (
        <div className="product-row" key={idx}>
          <input
            type="text"
            placeholder="Nombre"
            value={p.name}
            onChange={e => handleProductChange(idx, "name", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={p.quantity}
            min="1"
            onChange={e => handleProductChange(idx, "quantity", e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={p.price}
            min="0"
            onChange={e => handleProductChange(idx, "price", e.target.value)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={addProduct}>Agregar producto</button>
      <button type="submit">Agregar pedido</button>
      {message && <div style={{ color: "#1976d2", marginTop: 8 }}>{message}</div>}
    </form>
  );
}