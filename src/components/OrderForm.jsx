import { useState, useRef } from "react";
import React from "react";

export default function OrderForm({ addOrder }) {
  const [customer, setCustomer] = useState("");
  const [products, setProducts] = useState([{ name: "", quantity: 1, price: 0, images: [] }]);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  function handleProductChange(idx, field, value) {
    const copy = [...products];
    copy[idx][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setProducts(copy);
  }

  function addProduct() {
    setProducts([...products, { name: "", quantity: 1, price: 0, images: [] }]);
  }

  function handleImageUpload(idx, files) {
    const copy = [...products];
    const newImages = Array.from(files).map(file => {
      console.log('Uploading file:', file.name, file.type);
      return {
        file,
        preview: URL.createObjectURL(file)
      };
    });
    copy[idx].images = [...copy[idx].images, ...newImages];
    setProducts(copy);
  }

  function removeImage(productIdx, imageIdx) {
    const copy = [...products];
    URL.revokeObjectURL(copy[productIdx].images[imageIdx].preview);
    copy[productIdx].images.splice(imageIdx, 1);
    setProducts(copy);
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  }

  function handleDrop(e, productIdx) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(productIdx, files);
    }
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

    // Limpiar todas las imágenes antes de reiniciar
    products.forEach(product => {
      if (product.images) {
        product.images.forEach(img => {
          URL.revokeObjectURL(img.preview);
        });
      }
    });
    
    setCustomer("");
    setProducts([{ name: "", quantity: 1, price: 0, images: [] }]);
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
              type="number"
              placeholder="Cantidad"
              value={p.quantity}
              min="1"
              onChange={e => handleProductChange(idx, "quantity", e.target.value)}
              required
            />
            <small style={{ color: "#555" }}>
              Ingresá la cantidad de unidades que querés agregar de este producto.
            </small>
          </label>
          <label>
            Precio por unidad
            <input
              type="number"
              placeholder="Precio"
              value={p.price}
              min="0"
              step="any"
              onChange={e => handleProductChange(idx, "price", e.target.value)}
              required
            />
            <small style={{ color: "#555" }}>
              Ingresá el precio de cada unidad. Podés escribir el valor manualmente.
            </small>
          </label>
          
          <label>
            Imágenes del producto
            <div 
              className="image-upload"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, idx)}
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.multiple = true;
                input.accept = 'image/*';
                input.onchange = (e) => handleImageUpload(idx, e.target.files);
                input.click();
              }}
            >
              <div style={{ fontWeight: '500', marginBottom: '4px' }}>
                Haz clic para subir imágenes o arrastra aquí
              </div>
              <small style={{ color: '#666666' }}>
                JPG, PNG, GIF hasta 10MB cada una
              </small>
            </div>
            
            {p.images && p.images.length > 0 && (
              <div className="image-preview">
                {p.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="image-preview-item">
                    <img src={img.preview} alt={`Preview ${imgIdx}`} />
                    <button
                      type="button"
                      className="remove-image"
                      onClick={() => removeImage(idx, imgIdx)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </label>
          
          <hr style={{ width: "100%", margin: "10px 0" }} />
        </div>
      ))}
      <button type="button" onClick={addProduct}>Agregar otro producto</button>
      <small style={{ color: "#555", display: "block", marginBottom: "10px" }}>
        Podés agregar más de un producto usando este botón.
      </small>
      <button type="submit">Agregar pedido</button>
      {message && <div style={{ color: "#1976d2", marginTop: 8 }}>{message}</div>}
    </form>
  );
}