import { useState } from "react";
import React from "react";

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
    setProducts([...products, { name: "", quantity: 0, price: 0 }]);
  }

  function calculateTotal() {
    return products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
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
    setProducts([{ name: "", quantity: 0, price: 0 }]);
    setMessage("Pedido agregado correctamente.");
    setTimeout(() => setMessage(""), 1600);
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h4>Nuevo Pedido</h4>
      <label>
        Nombre del cliente
        <input
          type="text"
          placeholder="Cliente"
          value={customer}
          onChange={e => setCustomer(e.target.value)}
          required
        />
        <small style={{ color: "#555" }}>
          Escribí el nombre del cliente que realiza el pedido (mínimo 3 caracteres).
        </small>
      </label>
      <h5>Productos</h5>
      {products.map((p, idx) => (
        <div className="product-row" key={idx} style={{ flexDirection: "column", alignItems: "start" }}>
          <label>
            Nombre del producto
            <input
              type="text"
              placeholder="Nombre"
              value={p.name}
              onChange={e => handleProductChange(idx, "name", e.target.value)}
              required
            />
            <small style={{ color: "#555" }}>
              Escribí el nombre del producto que vas a agregar.
            </small>
          </label>
          <label>
            Cantidad
            <input
              type="text"
              placeholder="1"
              value={p.quantity === 0 ? "" : p.quantity}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                handleProductChange(idx, "quantity", value === "" ? 0 : parseInt(value) || 0);
              }}
              required
            />
            <small style={{ color: "#555" }}>
              Ingresá la cantidad de unidades que querés agregar de este producto.
            </small>
          </label>
          <label>
            Precio por unidad
            <input
              type="text"
              placeholder="0"
              value={p.price === 0 ? "" : p.price}
              onChange={e => {
                const value = e.target.value.replace(/[^0-9.]/g, '');
                handleProductChange(idx, "price", value === "" ? 0 : parseFloat(value) || 0);
              }}
              required
            />
            <small style={{ color: "#555" }}>
              Ingresá el precio de cada unidad. Podés escribir el valor manualmente.
            </small>
          </label>
          
          <hr style={{ width: "100%", margin: "10px 0" }} />
        </div>
      ))}
      <button type="button" onClick={addProduct}>Agregar otro producto</button>
      <small style={{ color: "#555", display: "block", marginBottom: "10px" }}>
        Podés agregar más de un producto usando este botón.
      </small>
      
      {/* Resumen de cuenta */}
      <div className="order-summary">
        <h5>Resumen del Pedido</h5>
        <div className="summary-items">
          {products.map((product, idx) => (
            product.name && product.price > 0 && (
              <div key={idx} className="summary-item">
                <span className="item-name">{product.name}</span>
                <span className="item-details">
                  {product.quantity} x ${product.price}
                </span>
                <span className="item-total">
                  ${(product.quantity * product.price).toLocaleString()}
                </span>
              </div>
            )
          ))}
        </div>
        <div className="summary-total">
          <span className="total-label">Total:</span>
          <span className="total-amount">${calculateTotal().toLocaleString()}</span>
        </div>
      </div>
      
      <button type="submit">Agregar pedido</button>
      {message && <div style={{ color: "#1976d2", marginTop: 8 }}>{message}</div>}
    </form>
  );
}