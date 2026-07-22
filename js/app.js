// Variable global para almacenar los datos en memoria en el navegador
let ordenesDeCompra = []; 

// Función inicializadora
document.addEventListener('DOMContentLoaded', () => {
    fetchOrdenes();
});

// Función para simular/obtener los datos (La "memoria")
async function fetchOrdenes() {
    const loader = document.getElementById('loader');
    const tbody = document.getElementById('tableBody');
    
    loader.style.display = 'block';
    tbody.innerHTML = '';

    try {
        // En el futuro, esto apuntará a tu archivo data.json generado por Power Automate
        // Por ahora, simulamos una respuesta
        // const response = await fetch('data/ordenes.json');
        // ordenesDeCompra = await response.json();
        
        ordenesDeCompra = [
            { id: "PO-001", vendor: "Proveedor A", date: "2026-07-20", status: "completed", total: 1500 },
            { id: "PO-002", vendor: "Proveedor B", date: "2026-07-21", status: "pending", total: 3200 }
        ];

        renderTable(ordenesDeCompra);
    } catch (error) {
        console.error("Error cargando los datos:", error);
    } finally {
        loader.style.display = 'none';
    }
}

// Función para pintar la tabla
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach(orden => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${orden.id}</td>
            <td>${orden.vendor}</td>
            <td>${orden.date}</td>
            <td>${orden.status === 'completed' ? 'Completada' : 'Pendiente'}</td>
            <td>$${orden.total}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Función para los filtros
function applyFilters() {
    const status = document.getElementById('statusFilter').value;
    
    if (status === 'all') {
        renderTable(ordenesDeCompra);
    } else {
        const filtradas = ordenesDeCompra.filter(orden => orden.status === status);
        renderTable(filtradas);
    }
}

function loadView(viewName) {
    console.log(`Cambiando a la vista: ${viewName}`);
    // Aquí agregaremos la lógica para cambiar de pantallas en el futuro
}
