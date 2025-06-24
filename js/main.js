function confirmarSalida(event) {
  event.preventDefault();
  const confirmacion = confirm("¿Seguro que quieres salir?");
  if (confirmacion) {
    window.location.href = "../pages/login.html";
  }
}

function mostrarAsistencias() {
  cambiarContenido(`
    <h2>Mis Asistencias</h2>
    <p>Aquí puedes agregar información sobre las asistencias, fechas y horarios de clases asistidas.</p>
  `);
}

function mostrarTutoria() {
  cambiarContenido(`
    <h2>Mi Tutoría</h2>
    <p>Aquí puedes mostrar detalles sobre tu tutor, fechas de reuniones y progreso académico.</p>
  `);
}

function mostrarPlan() {
  cambiarContenido(`
    <h2>Plan de Estudios</h2>
    <p>Aquí puedes agregar información sobre el plan de estudios, los cursos requeridos y otros detalles relevantes.</p>
  `);
}

function restablecerPagina() {
  cambiarContenido(`
    <div class="card">
      <h2>Información Personal Académica</h2>
      <ul>
        <li>Nombre, Fecha y Lugar de Nacimiento, Estado Civil, Sexo</li>
        <li>Domicilio, Teléfono y Correo Electrónico</li>
        <li>Facultad, Programa Académico, Especialidad</li>
        <li>Plan de Estudios, Año y Modalidad de Ingreso</li>
        <li>Situación Académica y Estado de Permanencia</li>
        <li>Promedio Ponderado, Número de Períodos Matriculados</li>
      </ul>
      <button class="btn-vermas" onclick="mostrarPerfil()">Ver más... →</button>
    </div>
    <div class="card">
      <h2>Matrícula Vía Internet</h2>
      <ul>
        <li>Período Académico Vigente</li>
        <li>Fecha, Usuario, Tipo de Matrícula</li>
        <li>Ciclo/Año, Código, Nombre, Tipo Asignatura</li>
        <li>Sección Matriculada, Docente</li>
        <li>Total de Cursos y Créditos Matriculados</li>
      </ul>
      <button class="btn-vermas" onclick="mostrarMatriculaInternet()">Ver más... →</button>
    </div>
    <div class="card">
      <h2>Reporte Pre-Matrícula</h2>
      <ul>
        <li>Prioridad de Matrícula</li>
        <li>Plan, Código y Nombre Descriptivo, Ciclo, Creditaje y Repitencias de la Asignatura</li>
        <li>Etapa del Proceso de Matrícula</li>
      </ul>
      <button class="btn-vermas" onclick="mostrarPreMatricula()">Ver más... →</button>
    </div>
    <div class="card">
      <h2>Reporte de Deudas</h2>
      <ul>
        <li>Relación de deudas</li>
        <li>Fecha, Usuario, Tipo de Matrícula</li>
        <li>Ciclo/Año, Código, Nombre</li>
        <li>Monto de deuda</li>
      </ul>
      <button class="btn-vermas" onclick="mostrarDeudas()">Ver más... →</button>
    </div>
    <div class="card">
      <h2>Programación de Asignaturas</h2>
      <ul>
        <li>Asignatura, Creditaje, Horas Teoría, Práctica, Laboratorio</li>
        <li>Sección, Docente, Turno, Aula, Horario</li>
      </ul>
      <button class="btn-vermas" onclick="mostrarProgramacion()">Ver más... →</button>
    </div>
    <div class="card">
      <h2>Historial Académico y Calificaciones</h2>
      <ul>
        <li>Períodos Académicos Matriculados, Plan de Estudios</li>
        <li>Ciclo, Asignatura, Creditaje, Tipo Asignatura</li>
        <li>Calificación, Sección, tipo y Número de Acta</li>
      </ul>
      <button class="btn-vermas" onclick="mostrarHistorial()">Ver más... →</button>
    </div>
  `);
}

function cambiarContenido(contenido) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = contenido;
}

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function mostrarPerfil() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Mi Perfil</h2>
      <ul>
        <li>Nombre: Juan Pérez</li>
        <li>Fecha de Nacimiento: 01/01/2000</li>
        <li>Dirección: Calle Ficticia 123</li>
        <li>Teléfono: 123-456-789</li>
        <li>Correo: juan.perez@example.com</li>
      </ul>
    </div>
  `;
}

function mostrarHistorial() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Historial Académico</h2>
      <ul>
        <li>Período: 2021-2022</li>
        <li>Asignatura: Matemáticas I</li>
        <li>Calificación: A+</li>
        <li>Promedio: 9.5</li>
      </ul>
    </div>
  `;
}

function mostrarMatriculaInternet() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Matrícula Vía Internet</h2>
      <ul>
        <li>Período Académico Vigente</li>
        <li>Fecha, Usuario, Tipo de Matrícula</li>
        <li>Ciclo/Año, Código, Nombre, Tipo Asignatura</li>
        <li>Sección Matriculada, Docente</li>
        <li>Total de Cursos y Créditos Matriculados</li>
      </ul>
    </div>
  `;
}

function mostrarProgramacion() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Programación de Asignaturas</h2>
      <ul>
        <li>Asignatura, Creditaje, Horas Teoría, Práctica, Laboratorio</li>
        <li>Sección, Docente, Turno, Aula, Horario</li>
      </ul>
    </div>
  `;
}

function mostrarPreMatricula() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Reporte de Pre-Matrícula</h2>
      <ul>
        <li>Prioridad de Matrícula</li>
        <li>Plan, Código y Nombre Descriptivo, Ciclo, Creditaje y Repitencias de la Asignatura</li>
        <li>Etapa del Proceso de Matrícula</li>
      </ul>
    </div>
  `;
}

function mostrarMatriculaReporte() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Reporte de Matrícula</h2>
      <ul>
        <li>Fecha de Matrícula</li>
        <li>Ciclo/Año, Código, Nombre de Asignatura</li>
        <li>Estado de Matrícula</li>
      </ul>
    </div>
  `;
}

function mostrarEvaluaciones() {
  document.getElementById('main-content').innerHTML = `
    <div class="card">
      <h2>Reporte de Evaluaciones</h2>
      <ul>
        <li>Asignatura, Fecha de Evaluación, Tipo de Evaluación</li>
        <li>Calificación, Observaciones</li>
      </ul>
    </div>
  `;
}

function mostrarDeudas() {
  document.getElementById("main-content").innerHTML = `
    <div class="card">
      <h2>Reporte de Deudas</h2>
      <ul>
        <li>Relación de deudas</li>
        <li>Fecha, Usuario, Tipo de Matrícula</li>
        <li>Ciclo/Año, Código, Nombre</li>
        <li>Monto de deuda</li>
      </ul>
    </div>
  `;
}
