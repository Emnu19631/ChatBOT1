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
  document.getElementById('main-content').innerHTML = `
    <div class="card" style="grid-column: span 3;">
      <h2>Plan de Estudios</h2>
      <div style="overflow-x: auto;">
        <table class="academic-table">
          <thead>
            <tr>
              <th scope="col">Ciclo</th>
              <th scope="col">Código</th>
              <th scope="col">Asignatura</th>
              <th scope="col">Créditos</th>
              <th scope="col">Tipo</th>
              <th scope="col">Pre-Requisito</th>
            </tr>
          </thead>
          <tbody>
            <!-- Ciclo 1 -->
            <tr>
              <td>1</td>
              <td>202SW0101</td>
              <td>REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td>
              <td>3.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0102</td>
              <td>MÉTODOS DE ESTUDIOS UNIVERSITARIOS</td>
              <td>2.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0103</td>
              <td>DESARROLLO PERSONAL Y LIDERAZGO</td>
              <td>2.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0104</td>
              <td>CÁLCULO I</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0105</td>
              <td>BIOLOGÍA PARA CIENCIAS E INGENIERÍA</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0106</td>
              <td>ALGEBRA Y GEOMETRÍA ANALÍTICA I</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0107</td>
              <td>MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td>
              <td>3.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E01</td>
              <td>PROGRAMACIÓN Y COMPUTACIÓN</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E02</td>
              <td>EMPRENDIMIENTO E INNOVACIÓN</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E03</td>
              <td>FUNDAMENTOS DE RIESGOS DE DESASTRES Y CAMBIO CLIMÁTICO</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E04</td>
              <td>TALLER DE MÚSICA</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E05</td>
              <td>TALLER DE DANZA</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E08</td>
              <td>INGLÉS BÁSICO</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <tr>
              <td>1</td>
              <td>202SW0E09</td>
              <td>SEGURIDAD E HIGIENE OCUPACIONAL</td>
              <td>2.0</td>
              <td>E</td>
              <td>--</td>
            </tr>
            <!-- Ciclo 2 -->
            <tr>
              <td>2</td>
              <td>202SW0201</td>
              <td>REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA II</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td>
            </tr>
            <tr>
              <td>2</td>
              <td>202SW0202</td>
              <td>INVESTIGACIÓN FORMATIVA</td>
              <td>3.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>202SW0203</td>
              <td>REALIDAD NACIONAL Y MUNDIAL</td>
              <td>2.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>202SW0204</td>
              <td>CÁLCULO II</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0104 - CÁLCULO I</td>
            </tr>
            <tr>
              <td>2</td>
              <td>202SW0205</td>
              <td>FÍSICA I</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>202SW0206</td>
              <td>QUÍMICA GENERAL</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>202SW0207</td>
              <td>INTRODUCCIÓN A LAS CIENCIAS E INGENIERÍA</td>
              <td>2.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <!-- Ciclo 3 -->
            <tr>
              <td>3</td>
              <td>202SW0301</td>
              <td>ALGORÍTMICA I</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>202SW0302</td>
              <td>ESTADÍSTICA Y PROBABILIDADES</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>202SW0303</td>
              <td>FÍSICA ELÉCTRÓNICA</td>
              <td>3.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>202SW0304</td>
              <td>INGENIERÍA ECONÓMICA</td>
              <td>3.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>202SW0305</td>
              <td>INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>202SW0306</td>
              <td>MATEMÁTICA BÁSICA</td>
              <td>4.0</td>
              <td>O</td>
              <td>--</td>
            </tr>
            <!-- Ciclo 4 -->
            <tr>
              <td>4</td>
              <td>202SW0401</td>
              <td>ALGORÍTMICA II</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0301 - ALGORÍTMICA I</td>
            </tr>
            <tr>
              <td>4</td>
              <td>202SW0402</td>
              <td>CONTABILIDAD PARA LA GESTIÓN</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0304 - INGENIERÍA ECONÓMICA</td>
            </tr>
            <tr>
              <td>4</td>
              <td>202SW0403</td>
              <td>ORGANIZACIÓN Y ADMINISTRACIÓN</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0304 - INGENIERÍA ECONÓMICA</td>
            </tr>
            <tr>
              <td>4</td>
              <td>202SW0404</td>
              <td>MATEMÁTICA DISCRETA</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0306 - MATEMÁTICA BÁSICA</td>
            </tr>
            <tr>
              <td>4</td>
              <td>202SW0405</td>
              <td>ESTRUCTURA DE DATOS</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0301 - ALGORÍTMICA I</td>
            </tr>
            <tr>
              <td>4</td>
              <td>202SW0406</td>
              <td>PROCESOS DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0305 - INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>4</td>
              <td>202SW0407</td>
              <td>SISTEMAS DIGITALES</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0303 - FÍSICA ELÉCTRÓNICA</td>
            </tr>
            <!-- Ciclo 5 -->
            <tr>
              <td>5</td>
              <td>202SW0501</td>
              <td>ANÁLISIS Y DISEÑO DE ALGORITMOS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0401 - ALGORÍTMICA II</td>
            </tr>
            <tr>
              <td>5</td>
              <td>202SW0502</td>
              <td>ARQUITECTURA DE COMPUTADORAS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0407 - SISTEMAS DIGITALES</td>
            </tr>
            <tr>
              <td>5</td>
              <td>202SW0503</td>
              <td>BASE DE DATOS I</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0405 - ESTRUCTURA DE DATOS</td>
            </tr>
            <tr>
              <td>5</td>
              <td>202SW0504</td>
              <td>COMPUTACIÓN VISUAL</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0404 - MATEMÁTICA DISCRETA</td>
            </tr>
            <tr>
              <td>5</td>
              <td>202SW0505</td>
              <td>ECONOMÍA PARA LA GESTIÓN</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0402 - CONTABILIDAD PARA LA GESTIÓN</td>
            </tr>
            <tr>
              <td>5</td>
              <td>202SW0506</td>
              <td>INGENIERÍA DE REQUISITOS</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0406 - PROCESOS DE SOFTWARE</td>
            </tr>
            <tr>
              <td>5</td>
              <td>202SW0507</td>
              <td>LENGUAJES Y COMPILADORES</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0405 - ESTRUCTURA DE DATOS</td>
            </tr>
            <!-- Ciclo 6 -->
            <tr>
              <td>6</td>
              <td>202SW0601</td>
              <td>BASE DE DATOS II</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0503 - BASE DE DATOS I</td>
            </tr>
            <tr>
              <td>6</td>
              <td>202SW0602</td>
              <td>CALIDAD DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0506 - INGENIERÍA DE REQUISITOS</td>
            </tr>
            <tr>
              <td>6</td>
              <td>202SW0603</td>
              <td>DISEÑO DE SOFTWARE</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0506 - INGENIERÍA DE REQUISITOS, 202SW0503 - BASE DE DATOS I</td>
            </tr>
            <tr>
              <td>6</td>
              <td>202SW0604</td>
              <td>ÉTICA PROFESIONAL Y LEGISLACIÓN INFORMÁTICA</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0403 - ORGANIZACIÓN Y ADMINISTRACIÓN</td>
            </tr>
            <tr>
              <td>6</td>
              <td>202SW0605</td>
              <td>GESTIÓN DE PROYECTO DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0406 - PROCESOS DE SOFTWARE</td>
            </tr>
            <tr>
              <td>6</td>
              <td>202SW0606</td>
              <td>INTERACCIÓN HOMBRE COMPUTADOR</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0506 - INGENIERÍA DE REQUISITOS</td>
            </tr>
            <tr>
              <td>6</td>
              <td>202SW0607</td>
              <td>SISTEMAS OPERATIVOS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td>
            </tr>
            <!-- Ciclo 7 -->
            <tr>
              <td>7</td>
              <td>202SW0701</td>
              <td>ARQUITECTURA DE SOFTWARE</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0602 - CALIDAD DE SOFTWARE, 202SW0603 - DISEÑO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>7</td>
              <td>202SW0702</td>
              <td>EXPERIENCIA DE USUARIO Y USABILIDAD</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0603 - DISEÑO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>7</td>
              <td>202SW0703</td>
              <td>GESTIÓN DE LA CONFIGURACIÓN Y MANTENIMIENTO DEL SOFTWARE</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0602 - CALIDAD DE SOFTWARE, 202SW0603 - DISEÑO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>7</td>
              <td>202SW0704</td>
              <td>FORMACIÓN DE EMPRESAS DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>7</td>
              <td>202SW0705</td>
              <td>INTELIGENCIA ARTIFICIAL</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS, 202SW0601 - BASE DE DATOS II</td>
            </tr>
            <tr>
              <td>7</td>
              <td>202SW0706</td>
              <td>PRUEBAS DE SOFTWARE</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0602 - CALIDAD DE SOFTWARE, 202SW0603 - DISEÑO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>7</td>
              <td>202SW0707</td>
              <td>REDES Y TRANSMISIÓN DE DATOS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0607 - SISTEMAS OPERATIVOS</td>
            </tr>
            <!-- Ciclo 8 -->
            <tr>
              <td>8</td>
              <td>202SW0801</td>
              <td>AUTOMATIZACIÓN Y CONTROL DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0707 - REDES Y TRANSMISIÓN DE DATOS</td>
            </tr>
            <tr>
              <td>8</td>
              <td>202SW0802</td>
              <td>INTELIGENCIA DE NEGOCIOS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS, 202SW0601 - BASE DE DATOS II</td>
            </tr>
            <tr>
              <td>8</td>
              <td>202SW0803</td>
              <td>METODOLOGÍA DE LA INVESTIGACIÓN</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0701 - ARQUITECTURA DE SOFTWARE, 202SW0705 - INTELIGENCIA ARTIFICIAL</td>
            </tr>
            <tr>
              <td>8</td>
              <td>202SW0804</td>
              <td>MINERÍA DE DATOS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0601 - BASE DE DATOS II</td>
            </tr>
            <tr>
              <td>8</td>
              <td>202SW0805</td>
              <td>PROGRAMACIÓN CONCURRENTE Y PARALELA</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0607 - SISTEMAS OPERATIVOS</td>
            </tr>
            <tr>
              <td>8</td>
              <td>202SW0806</td>
              <td>TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0701 - ARQUITECTURA DE SOFTWARE, 202SW0601 - BASE DE DATOS II</td>
            </tr>
            <tr>
              <td>8</td>
              <td>202SW0807</td>
              <td>ASEGURAMIENTO DE LA CALIDAD DEL SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0602 - CALIDAD DE SOFTWARE</td>
            </tr>
            <!-- Ciclo 9 -->
            <tr>
              <td>9</td>
              <td>202SW0901</td>
              <td>DESARROLLO DE TESIS I</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0803 - METODOLOGÍA DE LA INVESTIGACIÓN</td>
            </tr>
            <tr>
              <td>9</td>
              <td>202SW0902</td>
              <td>GESTIÓN DE RIESGO DEL SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>9</td>
              <td>202SW0903</td>
              <td>GERENCIA DE TECNOLOGÍA DE LA INFORMACIÓN</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td>
            </tr>
            <tr>
              <td>9</td>
              <td>202SW0904</td>
              <td>SEGURIDAD DEL SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0707 - REDES Y TRANSMISIÓN DE DATOS</td>
            </tr>
            <tr>
              <td>9</td>
              <td>202SW0905</td>
              <td>INTERNET DE LAS COSAS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0801 - AUTOMATIZACIÓN Y CONTROL DE SOFTWARE</td>
            </tr>
            <tr>
              <td>9</td>
              <td>202SW0906</td>
              <td>TALLER DE CONSTRUCCIÓN DE SOFTWARE MÓVIL</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0806 - TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td>
            </tr>
            <tr>
              <td>9</td>
              <td>202SW0907</td>
              <td>SOFTWARE INTELIGENTE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0705 - INTELIGENCIA ARTIFICIAL</td>
            </tr>
            <!-- Ciclo 10 -->
            <tr>
              <td>10</td>
              <td>202SW1001</td>
              <td>ANALÍTICA DE DATOS</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0802 - INTELIGENCIA DE NEGOCIOS, 202SW0907 - SOFTWARE INTELIGENTE</td>
            </tr>
            <tr>
              <td>10</td>
              <td>202SW1002</td>
              <td>DESARROLLO DE TESIS II</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0901 - DESARROLLO DE TESIS I</td>
            </tr>
            <tr>
              <td>10</td>
              <td>202SW1003</td>
              <td>PRÁCTICA PRE PROFESIONAL</td>
              <td>4.0</td>
              <td>O</td>
              <td>202SW0806 - TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td>
            </tr>
            <tr>
              <td>10</td>
              <td>202SW1004</td>
              <td>TALLER DE APLICACIONES SOCIALES</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0907 - SOFTWARE INTELIGENTE</td>
            </tr>
            <tr>
              <td>10</td>
              <td>202SW1005</td>
              <td>INNOVACIÓN, TECNOLOGÍA Y EMPRENDIMIENTO</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0906 - TALLER DE CONSTRUCCIÓN DE SOFTWARE MÓVIL</td>
            </tr>
            <tr>
              <td>10</td>
              <td>202SW1006</td>
              <td>TENDENCIAS EN INGENIERÍA DE SOFTWARE</td>
              <td>3.0</td>
              <td>O</td>
              <td>202SW0903 - GERENCIA DE TECNOLOGÍA DE LA INFORMACIÓN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
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
    <div class="card" style="grid-column: span 3;">
      <h2>Historial Académico</h2>
      <div style="overflow-x: auto;">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Período</th>
              <th>Asignatura</th>
              <th>Calificación</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021-2022</td>
              <td>Matemáticas I</td>
              <td>A+</td>
              <td>9.5</td>
            </tr>
            <tr>
              <td>2021-2022</td>
              <td>Física I</td>
              <td>A</td>
              <td>9.0</td>
            </tr>
            <tr>
              <td>2022-2023</td>
              <td>Matemáticas II</td>
              <td>A</td>
              <td>8.8</td>
            </tr>
            <tr>
              <td>2022-2023</td>
              <td>Programación I</td>
              <td>B+</td>
              <td>8.5</td>
            </tr>
            <tr>
              <td>2023-2024</td>
              <td>Estadística</td>
              <td>A-</td>
              <td>8.7</td>
            </tr>
            <tr>
              <td>2023-2024</td>
              <td>Química General</td>
              <td>B</td>
              <td>8.0</td>
            </tr>
          </tbody>
        </table>
      </div>
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
    <div class="card" style="grid-column: span 3;">
      <h2>Reporte de Evaluaciones</h2>
      <div style="overflow-x: auto;">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Asignatura</th>
              <th>Fecha de Evaluaciones</th>
              <th>Evaluación Continua 1</th>
              <th>Evaluación Continua 2</th>
              <th>Examen Parcial</th>
              <th>Examen Final</th>
              <th>Pesos de Evaluación</th>
              <th>Promedio Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matemáticas I</td>
              <td>2021-10-15 / 2021-12-10</td>
              <td>17.0</td>
              <td>18.0</td>
              <td>18.4</td>
              <td>19.6</td>
              <td>20% / 20% / 30% / 30%</td>
              <td>18.5</td>
            </tr>
            <tr>
              <td>Física I</td>
              <td>2021-10-20 / 2021-12-15</td>
              <td>15.6</td>
              <td>16.4</td>
              <td>17.0</td>
              <td>18.0</td>
              <td>15% / 15% / 35% / 35%</td>
              <td>17.2</td>
            </tr>
            <tr>
              <td>Programación I</td>
              <td>2022-03-05 / 2022-05-10</td>
              <td>16.0</td>
              <td>15.0</td>
              <td>16.6</td>
              <td>17.4</td>
              <td>25% / 25% / 25% / 25%</td>
              <td>16.3</td>
            </tr>
            <tr>
              <td>Estadística</td>
              <td>2022-09-12 / 2022-11-08</td>
              <td>18.0</td>
              <td>17.6</td>
              <td>17.0</td>
              <td>18.4</td>
              <td>20% / 20% / 30% / 30%</td>
              <td>17.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function mostrarDeudas() {
  document.getElementById("main-content").innerHTML = `
    <div class="card" style="grid-column: span 3;">
      <h2>Reporte de Deudas</h2>
      <div style="overflow-x: auto;">
        <table class="academic-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Tipo de Matrícula</th>
              <th>Ciclo/Año</th>
              <th>Código</th>
              <th>Nombre</th>
              <th>Monto de Deuda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-06-15</td>
              <td>Juan Pérez</td>
              <td>Regular</td>
              <td>I/2023</td>
              <td>2023001</td>
              <td>Matrícula Anual</td>
              <td>S/ 1500.00</td>
            </tr>
            <tr>
              <td>2023-07-20</td>
              <td>Juan Pérez</td>
              <td>Penalidad</td>
              <td>I/2023</td>
              <td>2023002</td>
              <td>No participación en elecciones</td>
              <td>S/ 200.00</td>
            </tr>
            <tr>
              <td>2024-01-10</td>
              <td>Juan Pérez</td>
              <td>Extraordinaria</td>
              <td>Verano/2024</td>
              <td>2024001</td>
              <td>Curso de Verano - Matemáticas</td>
              <td>S/ 800.00</td>
            </tr>
            <tr>
              <td>2024-03-05</td>
              <td>Juan Pérez</td>
              <td>Penalidad</td>
              <td>I/2024</td>
              <td>2024002</td>
              <td>No participación en elecciones</td>
              <td>S/ 250.00</td>
            </tr>
            <tr>
              <td>2024-02-15</td>
              <td>Juan Pérez</td>
              <td>Extraordinaria</td>
              <td>Verano/2024</td>
              <td>2024003</td>
              <td>Curso de Verano - Física</td>
              <td>S/ 750.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
