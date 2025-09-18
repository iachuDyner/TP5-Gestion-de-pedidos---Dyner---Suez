export const initialOrders = [
    {
      id: 1,
      customer: "Juan Perez",
      date: "2025-09-16",
      status: "pending",
      products: [
        { name: "Remera", quantity: 2, price: 1500 },
        { name: "Pantalón", quantity: 1, price: 3500 }
      ]
    },
    {
      id: 2,
      customer: "Ana López",
      date: "2025-09-15",
      status: "shipped",
      products: [
        { name: "Zapatillas", quantity: 1, price: 7200 }
      ]
    },
    {
      id: 3,
      customer: "Mario Rossi",
      date: "2025-09-14",
      status: "delivered",
      products: [
        { name: "Campera", quantity: 1, price: 6400 }
      ]
    }
  ];