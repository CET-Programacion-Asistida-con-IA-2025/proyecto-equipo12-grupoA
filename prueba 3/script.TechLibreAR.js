// Función para cambiar entre tabs
function showTab(tabName) {
    console.log('Cambiando a tab:', tabName);
    
    // Ocultar todos los contenidos de tabs
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remover clase active de todos los botones
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Mostrar el tab seleccionado
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
        console.log('Tab mostrado:', tabName);
    } else {
        console.error('No se encontró el tab:', tabName);
    }
    
    // Agregar clase active al botón correspondiente
    const activeButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
        console.log('Botón activado');
    } else {
        console.error('No se encontró el botón para:', tabName);
    }
}

// Función para buscar cursos
function searchCourses() {
    const area = document.getElementById('area').value;
    const tipo = document.getElementById('tipo').value;
    
    console.log('Buscando cursos:', { area, tipo });
    alert('Búsqueda realizada con los filtros seleccionados');
}

// Función para agregar nueva consulta en el foro
function addPost() {
    const title = prompt('Título de tu consulta:');
    if (title) {
        const content = prompt('Describe tu consulta:');
        if (content) {
            console.log('Nueva consulta:', { title, content });
            alert('¡Consulta agregada exitosamente!');
        }
    }
}

// Inicialización cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    console.log('TechLearn cargado correctamente');
});