export const initialOrders = [
    {
      id: 1,
      customer: "Juan Perez",
      date: "2025-09-18",
      status: "pending",
      products: [
        { 
          name: "Remera", 
          quantity: 2, 
          price: 1500,
          images: [
            { preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMCAxNUgyMFYyNUgxMFYxNVoiIGZpbGw9IiM2NjdFRUEiLz4KPHBhdGggZD0iTTEyIDE3SDE4VjIzSDEyVjE3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" }
          ]
        },
        { 
          name: "Pantalón", 
          quantity: 1, 
          price: 3500,
          images: [
            { preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNSAxMEgyNVYzMEgxNVYxMFoiIGZpbGw9IiM3NjRCQTIiLz4KPHBhdGggZD0iTTE3IDEySDIzVjI4SDE3VjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" }
          ]
        }
      ]
    },
    {
      id: 2,
      customer: "Ana López",
      date: "2025-09-17",
      status: "shipped",
      products: [
        { 
          name: "Zapatillas", 
          quantity: 1, 
          price: 7200,
          images: [
            { preview: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMCAyMEgzMEwyOCAxNUgxMlYyMFoiIGZpbGw9IiM0RUE5N0EiLz4KPHBhdGggZD0iTTEyIDE3SDI2VjE5SDEyVjE3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" }
          ]
        }
      ]
    }
  ];