const currentPage = window.location.pathname.split('/').pop();

// Ocultar el enlace correspondiente a la página actual
if (currentPage === 'index.html') {
    document.getElementById('inicio-link').style.display = 'none';
} 