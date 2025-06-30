function confirmarSalida(event) {
  event.preventDefault();
  const confirmacion = confirm("¿Seguro que quieres salir?");
  if (confirmacion) {
    window.location.href = "../pages/login.html";
  }
}

function mostrarAsistencias() {
  cambiarContenido(`
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 550px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 300px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

      td:nth-child(4), td:nth-child(5) {
            text-align: center;
        }
    </style>

    <div class="overlay-text">Mis Asistencias</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 14%;">Sección</th>
            <th style="width: 14%;"># Clases</th>
            <th style="width: 14%;">( % )</th>
            <th style="width: 14%;">( % )</th>
            <th style="width: 14%;">( % )</th>
          </tr>
        </thead>
        <tr><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td>  <td>2</td><td>32</td><td>10</td><td>0</td><td>1</td></tr>
        <tr><td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td>     <td>1</td><td>32</td><td>14</td><td>0</td><td>1</td></tr>
        <tr><td>202SW0503 - BASE DE DATOS I</td>                  <td>2</td><td>32</td><td>2</td><td>0</td><td>0</td></tr>
        <tr><td>202SW0504 - COMPUTACIÓN VISUAL</td>               <td>2</td><td>32</td><td>0</td><td>0</td><td>0</td></tr>
        <tr><td>202SW0505 - ECONOMÍA PARA LA GESTIÓN</td>         <td>1</td><td>32</td><td>9</td><td>0</td><td>2</td></tr>
        <tr><td>202SW0506 - INGENIERÍA DE REQUISITOS</td>         <td>1</td><td>32</td><td>14</td><td>0</td><td>3</td></tr>
    </div>
  `);
}

function mostrarTutoria() {
  cambiarContenido(`
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 550px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 130px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

    </style>

    <div class="overlay-text">Mis Tutorias</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 20%;">Docente</th>
            <th style="width: 20%;">Cod. Asignatura.</th>
            <th style="width: 20%;">Resolución</th>
            <th style="width: 10%;">Fecha</th>
            <th style="width: 20%;">Observación</th>
            <th style="width: 10%;">Acción</th>
          </tr>
          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">
              No hay tutorías registradas.
            </td>
          </tr>
        </thead>
    </div>
  `);
}

function mostrarPlan() {
  cambiarContenido(`
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 530px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 3300px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }
      
      .tabla-excel td:nth-child(2), /* Asignatura */
      .tabla-excel td:nth-child(6) { /* Pre-Requisito */
        text-align: left;
      }

      /* Mantén las otras columnas centradas */
      .tabla-excel td:nth-child(1),
      .tabla-excel td:nth-child(3),  /* Créd. */
      .tabla-excel td:nth-child(4),  /* Tipo */
      .tabla-excel td:nth-child(5),  /* Grupo */
      .tabla-excel td:nth-child(7) { /* Grupo */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

    </style>

    <div class="overlay-text">Plan de Estudios</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 8%;">Esp.</th>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 8%;">Créd.</th>
            <th style="width: 8%;">Tipo</th>
            <th style="width: 8%;">Grupo</th>
            <th style="width: 30%;">Pre-Requisito</th>
            <th style="width: 8%;">Grupo</th>
          </tr>
          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 1
            </td>
          </tr>
        </thead>
        <tbody>
          <tr><td>0</td><td>202SW0101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td><td>3</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0102 - MÉTODOS DE ESTUDIOS UNIVERSITARIOS</td><td>2</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0103 - DESARROLLO PERSONAL Y LIDERAZGO</td><td>2</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0104 - CÁLCULO I</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0105 - BIOLOGÍA PARA CIENCIAS E INGENIERÌA</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0106 - ALGEBRA Y GEOMETRÍA ANALÍTICA I</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0107 - MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td><td>3</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E01 - PROGRAMACIÓN Y COMPUTACIÓN</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E02 - EMPRENDIMIENTO E INNOVACIÓN</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E03 - FUNDAMENTOS DE RIESGOS DE DESASTRES Y CAMBIO CLIMÁTICO</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E04 - TALLER DE MÚSICA</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E05 - TALLER DE DANZA</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E08 - INGLES BASICO</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
          <tr><td>0</td><td>202SW0E09 - SEGURIDAD E HIGIENE OCUPACIONAL</td><td>2</td><td>E</td><td>GE</td><td>--</td><td>--</td></tr>
        </tbody>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            Ciclo 2
          </td>
        </tr>
        <tr><td>0</td><td>202SW0201 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA II</td><td>3</td><td>O</td><td>--</td><td>202SW0101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0202 - INVESTIGACIÓN FORMATIVA</td><td>3</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0203 - REALIDAD NACIONAL Y MUNDIAL</td><td>2</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0204 - CÁLCULO II</td><td>4</td><td>O</td><td>--</td><td>202SW0104 - CÁLCULO I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0205 - FÍSICA I</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0206 - QUÍMICA GENERAL</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0207 - INTRODUCCIÓN A LAS CIENCIAS E INGENIERÍA</td><td>2</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            Ciclo 3
          </td>
        </tr>
        <tr><td>0</td><td>202SW0301 - ALGORÍTMICA I</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0302 - ESTADÍSTICA Y PROBABILIDADES</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0303 - FISICA ELÉCTRÓNICA</td><td>3</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0304 - INGENIERÍA ECONÓMICA</td><td>3</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0305 - INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0306 - MATEMÁTICA BÁSICA</td><td>4</td><td>O</td><td>--</td><td>--</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            Ciclo 4
          </td>
        </tr>
        <tr><td>0</td><td>202SW0401 - ALGORÍTMICA II</td><td>4</td><td>O</td><td>--</td><td>202SW0301 - ALGORÍTMICA I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0402 - CONTABILIDAD PARA LA GESTIÓN</td><td>3</td><td>O</td><td>--</td><td>202SW0304 - INGENIERÍA ECONÓMICA</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0403 - ORGANIZACIÓN Y ADMINISTRACIÓN</td><td>3</td><td>O</td><td>--</td><td>202SW0304 - INGENIERÍA ECONÓMICA</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0404 - MATEMÁTICA DISCRETA</td><td>3</td><td>O</td><td>--</td><td>202SW0306 - MATEMÁTICA BÁSICA</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0405 - ESTRUCTURA DE DATOS</td><td>4</td><td>O</td><td>--</td><td>202SW0301 - ALGORÍTMICA I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0406 - PROCESOS DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0305 - INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0407 - SISTEMAS DIGITALES</td><td>3</td><td>O</td><td>--</td><td>202SW0303 - FISICA ELÉCTRÓNICA</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            Ciclo 5
          </td>
        </tr>
        <tr><td>0</td><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>3</td><td>O</td><td>--</td><td>202SW0401 - ALGORÍTMICA II</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>3</td><td>O</td><td>--</td><td>202SW0407 - SISTEMAS DIGITALES</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0503 - BASE DE DATOS I</td><td>4</td><td>O</td><td>--</td><td>202SW0405 - ESTRUCTURA DE DATOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0504 - COMPUTACIÓN VISUAL</td><td>3</td><td>O</td><td>--</td><td>202SW0404 - MATEMÁTICA DISCRETA</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>3</td><td>O</td><td>--</td><td>202SW0402 - CONTABILIDAD PARA LA GESTIÓN</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>4</td><td>O</td><td>--</td><td>202SW0406 - PROCESOS DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0507 - LENGUAJES Y COMPILADORES</td><td>4</td><td>O</td><td>--</td><td>202SW0405 - ESTRUCTURA DE DATOS</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            CICLO 6
          </td>
        </tr>
        <tr><td>0</td><td>202SW0601 - BASE DE DATOS II</td><td>4</td><td>O</td><td>--</td><td>202SW0503 - BASE DE DATOS I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0602 - CALIDAD DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0603 - DISEÑO DE SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0603 - DISEÑO DE SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0503 - BASE DE DATOS I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0604 - ETICA PROFESIONAL Y LEGISLACIÓN INFORMÁTICA</td><td>3</td><td>O</td><td>--</td><td>202SW0403 - ORGANIZACIÓN Y ADMINISTRACIÓN</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0406 - PROCESOS DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0606 - INTERACCIÓN HOMBRE COMPUTADOR</td><td>3</td><td>O</td><td>--</td><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0607 - SISTEMAS OPERATIVOS</td><td>3</td><td>O</td><td>--</td><td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            CICLO 7
          </td>
        </tr>
        <tr><td>0</td><td>202SW0701 - ARQUITECTURA DE SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0602 - CALIDAD DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0701 - ARQUITECTURA DE SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0603 - DISEÑO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0702 - EXPERIENCIA DE USUARIO Y USABILIDAD</td><td>3</td><td>O</td><td>--</td><td>202SW0603 - DISEÑO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0703 - GESTIÓN DE LA CONFIGURACIÓN Y MANTENIMIENTO DEL SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0602 - CALIDAD DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0703 - GESTIÓN DE LA CONFIGURACIÓN Y MANTENIMIENTO DEL SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0603 - DISEÑO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0704 - FORMACIÓN DE EMPRESAS DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0705 - INTELIGENCIA ARTIFICIAL</td><td>3</td><td>O</td><td>--</td><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0705 - INTELIGENCIA ARTIFICIAL</td><td>3</td><td>O</td><td>--</td><td>202SW0601 - BASE DE DATOS II</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0706 - PRUEBAS DE SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0602 - CALIDAD DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0706 - PRUEBAS DE SOFTWARE</td><td>4</td><td>O</td><td>--</td><td>202SW0603 - DISEÑO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0707 - REDES Y TRANSMISIÓN DE DATOS</td><td>3</td><td>O</td><td>--</td><td>202SW0607 - SISTEMAS OPERATIVOS</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            CICLO 8
          </td>
        </tr>
        <tr><td>0</td><td>202SW0801 - AUTOMATIZACIÓN Y CONTROL DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0707 - REDES Y TRANSMISIÓN DE DATOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0802 - INTELIGENCIA DE NEGOCIOS</td><td>3</td><td>O</td><td>--</td><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0802 - INTELIGENCIA DE NEGOCIOS</td><td>3</td><td>O</td><td>--</td><td>202SW0601 - BASE DE DATOS II</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0803 - METODOLOGÍA DE LA INVESTIGACIÓN</td><td>3</td><td>O</td><td>--</td><td>202SW0701 - ARQUITECTURA DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0803 - METODOLOGÍA DE LA INVESTIGACIÓN</td><td>3</td><td>O</td><td>--</td><td>202SW0705 - INTELIGENCIA ARTIFICIAL</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0804 - MINERÍA DE DATOS</td><td>3</td><td>O</td><td>--</td><td>202SW0601 - BASE DE DATOS II</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0805 - PROGRAMACIÓN CONCURRENTE Y PARALELA</td><td>3</td><td>O</td><td>--</td><td>202SW0607 - SISTEMAS OPERATIVOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0806 - TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td><td>3</td><td>O</td><td>--</td><td>202SW0701 - ARQUITECTURA DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0806 - TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td><td>3</td><td>O</td><td>--</td><td>202SW0601 - BASE DE DATOS II</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0807 - ASEGURAMIENTO DE LA CALIDAD DEL SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0602 - CALIDAD DE SOFTWARE</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            CICLO 9
          </td>
        </tr>
        <tr><td>0</td><td>202SW0901 - DESARROLLO DE TESIS I</td><td>4</td><td>O</td><td>--</td><td>202SW0803 - METODOLOGÍA DE LA INVESTIGACIÓN</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0902 - GESTIÓN DE RIESGO DEL SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0903 - GERENCIA DE TECNOLOGÍA DE LA INFORMACIÓN</td><td>3</td><td>O</td><td>--</td><td>202SW0605 - GESTIÓN DE PROYECTO DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0904 - SEGURIDAD DEL SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0707 - REDES Y TRANSMISIÓN DE DATOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0905 - INTERNET DE LAS COSAS</td><td>3</td><td>O</td><td>--</td><td>202SW0801 - AUTOMATIZACIÓN Y CONTROL DE SOFTWARE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0906 - TALLER DE CONSTRUCCIÓN DE SOFTWARE MÓVIL</td><td>3</td><td>O</td><td>--</td><td>202SW0806 - TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td><td>--</td></tr>
        <tr><td>0</td><td>202SW0907 - SOFTWARE INTELIGENTE</td><td>3</td><td>O</td><td>--</td><td>202SW0705 - INTELIGENCIA ARTIFICIAL</td><td>--</td></tr>
        <tr>
          <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
            CICLO 10
          </td>
        </tr>
        <tr><td>0</td><td>202SW1001 - ANALÍTICA DE DATOS</td><td>3</td><td>O</td><td>--</td><td>202SW0802 - INTELIGENCIA DE NEGOCIOS</td><td>--</td></tr>
        <tr><td>0</td><td>202SW1001 - ANALÍTICA DE DATOS</td><td>3</td><td>O</td><td>--</td><td>202SW0907 - SOFTWARE INTELIGENTE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW1002 - DESARROLLO DE TESIS II</td><td>4</td><td>O</td><td>--</td><td>202SW0901 - DESARROLLO DE TESIS I</td><td>--</td></tr>
        <tr><td>0</td><td>202SW1003 - PRÁCTICA PRE PROFESIONAL</td><td>4</td><td>O</td><td>--</td><td>202SW0806 - TALLER DE CONSTRUCCIÓN DE SOFTWARE WEB</td><td>--</td></tr>
        <tr><td>0</td><td>202SW1004 - TALLER DE APLICACIONES SOCIALES</td><td>3</td><td>O</td><td>--</td><td>202SW0907 - SOFTWARE INTELIGENTE</td><td>--</td></tr>
        <tr><td>0</td><td>202SW1005 - INNOVACIÓN, TECNOLOGÍA Y EMPRENDIMIENTO</td><td>3</td><td>O</td><td>--</td><td>202SW0906 - TALLER DE CONSTRUCCIÓN DE SOFTWARE MÓVIL</td><td>--</td></tr>
        <tr><td>0</td><td>202SW1006 - TENDENCIAS EN INGENIERÍA DE SOFTWARE</td><td>3</td><td>O</td><td>--</td><td>202SW0903 - GERENCIA DE TECNOLOGÍA DE LA INFORMACIÓN</td><td>--</td></tr>

    </div>
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
    <style>
      ul {
        list-style-type: none;
        padding-left: 0;
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 30px;
      }

      .profile-card {
        display: flex;
        flex-direction: column; /* Coloca los elementos en columna por defecto */
        gap: 10px; /* Espacio entre los elementos */
        align-items: center; /* Centra los elementos dentro del contenedor */
      }

      .profile-card .name {
        width: 100%; /* Hace que el nombre ocupe todo el ancho disponible */
        text-align: center;
      }

      /* Contenedor de Código y Promedio en la misma fila */
      .profile-card .code-row {
        display: flex; /* Los elementos dentro de esta fila estarán en una sola línea */
        justify-content: space-between; /* Espacio entre los elementos */
        width: 100%; /* Toma todo el ancho */
      }

      .profile-card .code, .profile-card .average {
        width: 48%; /* 48% de la fila para cada uno, con espacio entre ellos */
        text-align: center; /* Centra el texto */
      }

      .profile-card h4 {
        text-align: center;
        margin-top: 0;
      }

      #info-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        margin-top: 10px;
      }

      .cuadro-item {
        background-color: rgb(227, 226, 240);
        padding: 10px 14px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: bold;
        color: #333;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        display: flex;
        justify-content: space-between; /* separa campo y valor */
        gap: 20px;
      }

      .campo {
        min-width: 180px; /* ancho mínimo para alinear todos */
        text-align: left;
      }

      .valor {
        flex-grow: 1;
        text-align: left;
      }

      .descargar-perfil {
        width: 100%;
        background-color: rgb(254, 186, 118);
        color: white;
        font-weight: bold;
        font-size: 16px;
        padding: 12px 0;
        margin: 10px 0;
        border-radius: 50px;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(23, 167, 250, 0.4);
        user-select: none;
        transition: background-color 0.3s ease;
        color:rgb(0, 0, 0)
      }

      .descargar-perfil:hover {
        background-color: rgb(176, 126, 76);
      }

      .profile-image {
        text-align: center; /* Centra la imagen */
        margin-bottom: 15px; /* Espacio debajo de la imagen */
      }

      .profile-image img {
        width: 250px; /* Tamaño de la imagen */
        height: 250px; /* Tamaño de la imagen */
        border-radius: 50%; /* Hace la imagen circular */
        object-fit: cover; /* Asegura que la imagen se recorte correctamente */
      }



    </style>

    <div class="profile-container">
      <!-- Cuadro principal -->
      <div class="profile-card">
        <div class="profile-image">
          <img src="../assets/images/usuarioperf.jpg" alt="Foto de Perfil" />
        </div>
        <h2 class="name">Poma De la Cruz, Yessly</h2>
        <h4 style = "color :rgb(173, 189, 198);">Estudiante</h4>
        
        <!-- Fila para Código y Promedio -->
        <div class="code-row">
          <div class="code">
            <h2 style = "color :rgb(23, 167, 250);">23200284</h2>
            <h4 style = "color :rgb(173, 189, 198);">Código</h4>
          </div>
          <div class="average">
            <h2 style = "color :rgb(23, 167, 250);">14.732</h2>
            <h4 style = "color :rgb(173, 189, 198);">Promedio</h4>
          </div>
        </div>
        <div class="descargar-perfil" id="btnDescargarPerfil">
          Descargar Perfil
        </div>

        <ul>
          <li><strong>Facultad: </strong> 20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</li>
          <li><strong>Escuela: </strong>2 - E.P. de Ingeniería de Software</li>
          <li><strong>Especialidad: </strong>0 - Estudios Generales</li>
          <li><strong>Plan de Estudios: </strong>2023 - Plan de Estudios 2023</li>
        </ul>
      </div>
      
      <!-- Cuadro adicional con las opciones de pestañas -->
      <div class="info-card">
        <div class="tabs">
          <button id="personal" class="active" onclick="mostrarInformacionPersonal()">Información Personal</button>
          <button id="academica" onclick="mostrarInformacionAcademica()">Información Académica</button>
        </div>
        <div id="info-content">
          <div class="cuadro-item"><span class="campo">Documento de identidad:</span><span class="valor">Dni - 74231329</span></div>
          <div class="cuadro-item"><span class="campo">Estado civil:</span><span class="valor">Soltero</span></div>
          <div class="cuadro-item"><span class="campo">Sexo:</span><span class="valor">Femenino</span></div>
          <div class="cuadro-item"><span class="campo">Fecha de nacimiento:</span><span class="valor">25-03-2004</span></div>
          <div class="cuadro-item"><span class="campo">Lugar de Nacimiento:</span><span class="valor">LIMA / LIMA / LIMA</span></div>
          <div class="cuadro-item"><span class="campo">Teléfono:</span><span class="valor">1234567</span></div>
          <div class="cuadro-item"><span class="campo">Celular:</span><span class="valor">123456789</span></div>
          <div class="cuadro-item"><span class="campo">Correo Institucional:</span><span class="valor">yessly.poma@unmsm.edu.pe</span></div>
          <div class="cuadro-item"><span class="campo">Correo Personal:</span><span class="valor">yesslypoma@gmail.com</span></div>
          <div class="cuadro-item"><span class="campo">Domicilio:</span><span class="valor">LIMA / LIMA / LIMA</span></div>
          <div class="cuadro-item"><span class="campo">Dirección:</span><span class="valor">Calle ficticia 123</span></div>

        </div>
      </div>
    </div>
  `;
}

function mostrarInformacionPersonal() {
  document.getElementById('info-content').innerHTML = `
    <div class="cuadro-item"><span class="campo">Documento de identidad:</span><span class="valor">Dni - 74231329</span></div>
    <div class="cuadro-item"><span class="campo">Estado civil:</span><span class="valor">Soltero</span></div>
    <div class="cuadro-item"><span class="campo">Sexo:</span><span class="valor">Femenino</span></div>
    <div class="cuadro-item"><span class="campo">Fecha de nacimiento:</span><span class="valor">25-03-2004</span></div>
    <div class="cuadro-item"><span class="campo">Lugar de Nacimiento:</span><span class="valor">LIMA / LIMA / LIMA</span></div>
    <div class="cuadro-item"><span class="campo">Teléfono:</span><span class="valor">1234567</span></div>
    <div class="cuadro-item"><span class="campo">Celular:</span><span class="valor">123456789</span></div>
    <div class="cuadro-item"><span class="campo">Correo Institucional:</span><span class="valor">yessly.poma@unmsm.edu.pe</span></div>
    <div class="cuadro-item"><span class="campo">Correo Personal:</span><span class="valor">yesslypoma@gmail.com</span></div>
    <div class="cuadro-item"><span class="campo">Domicilio:</span><span class="valor">LIMA / LIMA / LIMA</span></div>
    <div class="cuadro-item"><span class="campo">Dirección:</span><span class="valor">Calle ficticia 123</span></div>

  `;
  
  // Cambiar el estilo activo para las pestañas
  document.getElementById('personal').classList.add('active');
  document.getElementById('academica').classList.remove('active');
}

function mostrarInformacionAcademica() {
  document.getElementById('info-content').innerHTML = `
    <div class="cuadro-item"><span class="campo">Año de ingreso:</span><span class="valor">2023</span></div>
    <div class="cuadro-item"><span class="campo">Modalidad de ingreso:</span><span class="valor">EBRA - Educación Básica Regular y Educación Básica Alternativa</span></div>
    <div class="cuadro-item"><span class="campo">Colegio de procedencia:</span><span class="valor">Estatal</span></div>
    <div class="cuadro-item"><span class="campo">Año / Ciclo de Estudio:</span><span class="valor">5</span></div>
    <div class="cuadro-item"><span class="campo">Promedio ponderado:</span><span class="valor">14.732</span></div>
    <div class="cuadro-item"><span class="campo">Situación académica:</span><span class="valor">Regular</span></div>
    <div class="cuadro-item"><span class="campo">Estado de permanencia:</span><span class="valor">Activo</span></div>
    <div class="cuadro-item"><span class="campo">Última matrícula:</span><span class="valor">20251</span></div>
    <div class="cuadro-item"><span class="campo">Promedio de última matrícula:</span><span class="valor">0</span></div>
  `;
  
  // Cambiar el estilo activo para las pestañas
  document.getElementById('academica').classList.add('active');
  document.getElementById('personal').classList.remove('active');
}



function mostrarHistorial() {
  document.getElementById('main-content').innerHTML = `
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 530px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 30px;
      }

      
      .top-row {
        display: flex;
        flex-direction: row; /* Los cuadros superiores están en fila */
        gap: 20px; /* Espacio entre los dos cuadros */
      }

      .info-box {
        height: 400px;
        width: 400px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 13px;
        font-size: 12px;
      }
      
      .question-answer {
        display: flex; /* Flexbox para alinear la pregunta y respuesta */
        justify-content: space-between; /* Separa la pregunta de la respuesta */
        width: 100%; /* Ocupa todo el ancho disponible */
      }

      .question {
        text-align: left; /* La pregunta a la izquierda */
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
      }

      .answer {
        text-align: right; /* La respuesta a la derecha */
        color:rgb(55, 89, 104);
      }

      .info-box3 {
        height: 300px;
        width: 780px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 1200px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }
      
      .tabla-excel td:nth-child(2), /* Asignatura */
      .tabla-excel td:nth-child(6) { /* Pre-Requisito */
        text-align: left;
      }

      /* Mantén las otras columnas centradas */
      .tabla-excel td:nth-child(1),
      .tabla-excel td:nth-child(3),  /* Créd. */
      .tabla-excel td:nth-child(4),  /* Tipo */
      .tabla-excel td:nth-child(5),  /* Grupo */
      .tabla-excel td:nth-child(7) { /* Grupo */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

      .tabla-excel td:nth-child(2), /* Plan */
      .tabla-excel th:nth-child(2), /* Plan */
      .tabla-excel td:nth-child(6), /* Créditos */
      .tabla-excel td:nth-child(8) { /* Sección */
        text-align: center;
      }
      
      .tabla-excel td:nth-child(4) { /* Asignatura */
        text-align: left;
      }

      .info-box3 {
        text-align: center; /* Centra la imagen */
        margin-top: 20px; /* Espacio encima de la imagen */
      }

      .imagen-academica {
        width: 750px; /* Ajusta el tamaño de la imagen al contenedor */
        
        height: 260px; /* Mantiene las proporciones de la imagen */
        border-radius: 10px; /* Si quieres bordes redondeados */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave para darle estilo */
      }

    </style>

    <div class="overlay-text">Historial Académico</div>

    <div id="main-content">
    <!-- Contenedor de los cuadros superiores -->
    <div class="top-row">
      <div class="info-box">
        <div class="question-answer"><span class="question" style="color:rgb(0, 0, 0);">RESUMEN DEL HISTORIAL ACADÉMICO</span><span class="answer"></span></div>
        <div class="question-answer"><span class="question">Creditaje Requerido para Egresar</span><span class="answer"><strong>226</strong></span></div>
        <div class="question-answer"><span class="question">Creditaje Aprobado</span><span class="answer"><strong>88</strong></span></div>
        <div class="question-answer"><span class="question">- Obligatorios</span><span class="answer"><strong>88</strong></span></div>
        <div class="question-answer"><span class="question">- De Especialidad</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- Electivos Generales</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- Electivos de Especialidad</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- Optativos</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- Alternativos</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- De Otra Especialidad</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- Más de una vez</span><span class="answer"><strong>0</strong></span></div>
        <div class="question-answer"><span class="question">- Otros</span><span class="answer"><strong>4</strong></span></div>
        <div class="question-answer"><span class="question">Creditaje Faltante</span><span class="answer"><strong>138</strong></span></div>
        <div class="question-answer"><span class="question">Promedio Ponderado</span><span class="answer"><strong>14.466</strong></span></div>

      </div>

      <div class="info-box3">
        <img src="../assets/images/historial.png" alt="Imagen de Historial Académico" class="imagen-academica" />
      </div>

    </div>

    <div class="info-box2">
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 8%;">Ciclo</th>
            <th style="width: 8%;">Plan</th>
            <th style="width: 8%;">Tipo</th>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 8%;">Calificación</th>
            <th style="width: 8%;">Créditos</th>
            <th style="width: 8%;">Sección</th>
            <th style="width: 22%;">Acta</th>
          </tr>
          <tr>
            <td colspan="8" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              PERIODO ACADÉMICO 2023-1
            </td>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>2018</td><td>E</td><td>INE002 - PROGRAMACIÓN Y COMPUTACIÓN</td><td><strong>16</strong></td><td><strong>2</strong></td><td><strong>5</strong></td><td>P - 2023120220180INE0025P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td><td><strong>15</strong></td><td><strong>3</strong></td><td><strong>4</strong></td><td>P - 2023120220180INO1014P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO102 - MÉTODOS DE ESTUDIO UNIVERSITARIO</td><td><strong>17</strong></td><td><strong>2</strong></td><td><strong>3</strong></td><td>P - 2023120220180INO1023P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO103 - DESARROLLO PERSONAL Y LIDERAZGO</td><td><strong>13</strong></td><td><strong>2</strong></td><td><strong>2</strong></td><td>P - 2023120220180INO1032P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO104 - CÁLCULO I</td><td><strong>13</strong></td><td><strong>4</strong></td><td><strong>3</strong></td><td>P - 2023120220180INO1043P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO105 - BIOLOGÍA PARA CIENCIAS E INGENIERÍA</td><td><strong>15</strong></td><td><strong>4</strong></td><td><strong>2</strong></td><td>P - 2023120220180INO1052P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO106 - ÁLGEBRA Y GEOMETRÍA ANALÍTICA</td><td><strong>11</strong></td><td><strong>4</strong></td><td><strong>2</strong></td><td>P - 2023120220180INO1062P</td></tr>
          <tr><td>1</td><td>2018</td><td>O</td><td>INO107 - MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td><td><strong>17</strong></td><td><strong>3</strong></td><td><strong>2</strong></td><td>P - 2023120220180INO1072P</td></tr>
          <tr>
            <td colspan="8" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              PERIODO ACADÉMICO 2023-2
            </td>
          </tr>
          <tr><td>1</td><td>2018</td><td>E</td><td>INE013 - EMPRENDIMIENTO E INNOVACIÓN</td><td><strong>18</strong></td><td><strong>2</strong></td><td><strong>1</strong></td><td>P - 2023220220180INE0131P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO201 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA II</td><td><strong>17</strong></td><td><strong>3</strong></td><td><strong>2</strong></td><td>P - 2023220220180INO2012P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO202 - INVESTIGACIÓN FORMATIVA</td><td><strong>15</strong></td><td><strong>3</strong></td><td><strong>2</strong></td><td>P - 2023220220180INO2022P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO203 - REALIDAD NACIONAL Y MUNDIAL</td><td><strong>16</strong></td><td><strong>2</strong></td><td><strong>3</strong></td><td>P - 2023220220180INO2033P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO204 - CÁLCULO II</td><td><strong>13</strong></td><td><strong>4</strong></td><td><strong>3</strong></td><td>P - 2023220220180INO2043P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO205 - FÍSICA I</td><td><strong>13</strong></td><td><strong>4</strong></td><td><strong>3</strong></td><td>P - 2023220220180INO2053P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO206 - QUÍMICA GENERAL</td><td><strong>15</strong></td><td><strong>4</strong></td><td><strong>1</strong></td><td>P - 2023220220180INO2061P</td></tr>
          <tr><td>2</td><td>2018</td><td>O</td><td>INO207 - INTRODUCCIÓN A LAS CIENCIAS E INGENIERÍA</td><td><strong>16</strong></td><td><strong>2</strong></td><td><strong>2</strong></td><td>P - 2023220220180INO2072P</td></tr>
          <tr>
            <td colspan="8" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              PERIODO ACADÉMICO 2024-1
            </td>
          </tr>
          <tr><td>3</td><td>2023</td><td>O</td><td>202SW0301 - ALGORÍTMICA I</td><td><strong>14</strong></td><td><strong>4</strong></td><td><strong>3</strong></td><td>P - 2024120220230202SW03013P</td></tr>
          <tr><td>3</td><td>2023</td><td>O</td><td>202SW0302 - ESTADÍSTICA Y PROBABILIDADES</td><td><strong>11</strong></td><td><strong>4</strong></td><td><strong>3</strong></td><td>P - 2024120220230202SW03023P</td></tr>
          <tr><td>3</td><td>2023</td><td>O</td><td>202SW0303 - FÍSICA ELÉCTRÓNICA</td><td><strong>15</strong></td><td><strong>3</strong></td><td><strong>4</strong></td><td>P - 2024120220230202SW03034P</td></tr>
          <tr><td>3</td><td>2023</td><td>O</td><td>202SW0304 - INGENIERÍA ECONÓMICA</td><td><strong>16</strong></td><td><strong>3</strong></td><td><strong>1</strong></td><td>P - 2024120220230202SW03041P</td></tr>
          <tr><td>3</td><td>2023</td><td>O</td><td>202SW0305 - INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td><td><strong>14</strong></td><td><strong>3</strong></td><td><strong>3</strong></td><td>P - 2024120220230202SW03053P</td></tr>
          <tr><td>3</td><td>2023</td><td>O</td><td>202SW0306 - MATEMÁTICA BÁSICA</td><td><strong>13</strong></td><td><strong>4</strong></td><td><strong>1</strong></td><td>P - 2024120220230202SW03061P</td></tr>
          <tr>
            <td colspan="8" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              PERIODO ACADÉMICO 2024-2
            </td>
          </tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0401 - ALGORÍTMICA II</td><td><strong>15</strong></td><td><strong>4</strong></td><td><strong>2</strong></td><td>P - 2024220220230202SW04012P</td></tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0402 - CONTABILIDAD PARA LA GESTIÓN</td><td><strong>17</strong></td><td><strong>3</strong></td><td><strong>2</strong></td><td>P - 2024220220230202SW04022P</td></tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0403 - ORGANIZACIÓN Y ADMINISTRACIÓN</td><td><strong>12</strong></td><td><strong>3</strong></td><td><strong>3</strong></td><td>P - 2024220220230202SW04033P</td></tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0404 - MATEMÁTICA DISCRETA</td><td><strong>17</strong></td><td><strong>3</strong></td><td><strong>1</strong></td><td>P - 2024220220230202SW04041P</td></tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0405 - ESTRUCTURA DE DATOS</td><td><strong>14</strong></td><td><strong>4</strong></td><td><strong>1</strong></td><td>P - 2024220220230202SW04051P</td></tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0406 - PROCESOS DE SOFTWARE</td><td><strong>15</strong></td><td><strong>3</strong></td><td><strong>1</strong></td><td>P - 2024220220230202SW04061P</td></tr>
          <tr><td>4</td><td>2023</td><td>O</td><td>202SW0407 - SISTEMAS DIGITALES</td><td><strong>17</strong></td><td><strong>3</strong></td><td><strong>2</strong></td><td>P - 2024220220230202SW04072P</td></tr>
        </tbody>
      </table>

      </div>

  `;
}


function mostrarMatriculaInternet() {
  document.getElementById('main-content').innerHTML = `
    <style>
      .main-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 columnas */
        gap: 2rem; /* espacio entre tarjetas */
        background: #cceeff;
        padding: 2rem;
      }

      .card {
        background: azure;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        width: 700px; /* Ancho fijo */
        height: 400px; /* Deja que el alto crezca con el contenido */
        box-sizing: border-box;
      }

      .card h2 {
        font-size: 17px;
        color: rgb(0, 0, 0);
        margin-bottom: 12px;
        font-weight: bold;
      }

      .card p {
        font-size: 14px;
        line-height: 1.6;
        margin-top: 0;
      }

      .card ol {
        list-style-type: decimal inside;
        margin-bottom: 12px;
      }

      .card li {
        margin-bottom: 6px;
      }

      .card li p {
        font-size: 12px;
        margin-bottom: 5px;
        color: rgb(4, 0, 255); /* Color del texto */
      }

      /* Cuadro adicional a la derecha */
      .info-box {
        background:rgb(255, 255, 255);
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        height: 300px; /* Alto mayor para acomodar todos los cuadros */
        box-sizing: border-box;
        width: 400px; /* Ocupa todo el espacio disponible en la columna */
        display: grid;
        grid-template-columns: 1fr 1fr; /* 2 columnas */
        grid-template-rows: repeat(3, 1fr); /* 3 filas para los 6 cuadros */
        gap: 1rem;
      }

      /* Cuadros pequeños dentro de info-box */
      .info-box div {
        background:rgb(255, 255, 255);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      /* Cuadro que ocupa ambas columnas */
      .info-box .full-width {
        grid-column: span 2; /* Ocupa ambas columnas */
        background-color:rgb(239, 210, 217);
        height: 50px;
      }

      .info-box .full-width2 {
        grid-column: span 2; /* Ocupa ambas columnas */
        background-color:rgb(193, 231, 250);
        height: 50px;
      }
      
      /* Cuadro que ocupa una sola columna */
      .info-box .half-width {
        grid-column: span 1; /* Ocupa una sola columna */
        height: 50px;
        background-color:rgb(227, 226, 240);
      }

      /* Títulos de los cuadros pequeños */
      .info-box div h4 {
        font-size: 16px;
        color: #003366;
        margin-bottom: 10px;
      }

      .info-box div p {
        font-size: 12px;
        line-height: 1.6;
        color: #333333;
      }

      .info-box div p2 {
        font-size: 12px;
        line-height: 1.6;
        display: flex;
        justify-content: center;
        color:rgb(155, 52, 52);
      }

      .info-box div p3 {
        font-size: 12px;
        line-height: 1.6;
        display: flex;
        justify-content: center;
        color:rgb(55, 89, 104);
      }

      .overlay-text {
        position: absolute;      /* Siempre visible aunque se haga scroll */
        top: 16px;            /* Separado del borde superior */
        left: 430px;            /* Centrado horizontalmente */
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;  
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }
      
    </style>
    <div class="overlay-text">Información de Matrícula</div>
    <div class="main-content">
      <!-- Cuadro principal de la izquierda -->
      <div class="card">
        <h2>Información importante acerca del módulo de Matrícula Vía Web</h2>
        
        <ol>
          <li><strong>Control de Cronograma de Matrícula:</strong>
            <p>Verificación de Fechas de Inicio y Fin de Matrícula del Período Vigente y de Acceso al Módulo de Matrícula.</p>
          </li>
          <li><strong>Control de Acceso de Facultad:</strong>
            <p>Verificación de la Programación Interna establecida por la Oficina de Matrícula de su Facultad.</p>
          </li>
          <li><strong>Control de Pre-Matrícula:</strong>
            <p>Verificación del Registro de Pre-Matrícula el cual debe haber sido procesado por la Oficina de Matrícula de su Facultad. De no existir debe acercarse a la Oficina de Matrícula personalmente.</p>
          </li>
          <li><strong>Control de Deudas Registradas:</strong>
            <p>Verificación de registros de deudas de dinero o de material bibliográfico. Esta información nos la remite la Oficina de Matrícula de su facultad. De registrar deudas pendientes debe acercarse personalmente a la Oficina de Matrícula de su Facultad.</p>
          </li>
          <li><strong>Interfaz de Matrícula:</strong>
            <p>Presentación de Asignaturas de Pre-Matrícula y secciones abiertas. Efectuar Matrícula registrará su matrícula. Si la Matrícula se efectúa satisfactoriamente, se mostrará automáticamente el Reporte de Matrícula vigente, de lo contrario mostrará un error.</p>
          </li>
        </ol>
      </div>

      <!-- Cuadro adicional a la derecha con los 6 cuadros -->
      <div class="info-box">
        
        <div class="full-width">
          <p2><strong>MATRICULA INTERNET INHABILITADA</strong></p2>
          
        </div>

        <div class="half-width">
          <p><strong>Periodo Académico</strong></p>
          <p>2025-1</p>
          
        </div>

        <div class="half-width">
          <p><strong>Fecha del Sistema</strong></p>
          <p>2025-06-27</p>
        </div>

        <div class="half-width">
          <p><strong>Inicio de Matrícula</strong></p>
          <p>14/03/2025 05:00:00</p>
        </div>

        <div class="half-width">
          <p><strong>Fin de Matrícula</strong></p>
          <p>21/03/2025 23:55:00</p>
        </div>

        <!-- Cuadro Inferior debajo de todos los cuadros -->
        <div class="full-width2">
          <p3><strong>MATRICULADO</strong></p3>
          
        </div>
      </div>
    </div>
  `;
}


function mostrarProgramacion() {
  document.getElementById('main-content').innerHTML = `
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 430px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 2150px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

    </style>

    <div class="overlay-text">Programación de asignaturas </div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 5%;">Créd.</th>
            <th style="width: 5%;">Sec.</th>
            <th style="width: 30%;">Docente</th>
            <th style="width: 5%;">Tope</th>
            <th style="width: 10%;">Matriculados</th>
            <th style="width: 15%;">Horarios</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 1
            </td>
          </tr>
          <tr><td>202SW0101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td><td>3</td><td>5</td><td>42229911 - RIOS DELGADO, JHOHANNA</td><td>14</td><td>5</td><td>Lun 7-9, Mié 7-9</td></tr>
          <tr><td>202SW0101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td><td>3</td><td>6</td><td>15584946 - DIONICIO MEJÍA, CARMEN VIOLETA</td><td>14</td><td>7</td><td>Mar 8-10, Jue 8-10</td></tr>
          <tr><td>202SW0102 - MÉTODOS DE ESTUDIOS UNIVERSITARIOS</td><td>2</td><td>1</td><td>42229911 - RIOS DELGADO, JHOHANNA</td><td>14</td><td>9</td><td>Lun 10-12</td></tr>
          <tr><td>202SW0102 - MÉTODOS DE ESTUDIOS UNIVERSITARIOS</td><td>2</td><td>2</td><td>15584946 - DIONICIO MEJÍA, CARMEN VIOLETA</td><td>14</td><td>9</td><td>Mar 10-12</td></tr>
          <tr><td>202SW0103 - DESARROLLO PERSONAL Y LIDERAZGO</td><td>2</td><td>5</td><td>10275035 - ORELLANA MANRIQUE, YOLANDA OLIVIA</td><td>14</td><td>5</td><td>Mié 9-11</td></tr>
          <tr><td>202SW0103 - DESARROLLO PERSONAL Y LIDERAZGO</td><td>2</td><td>6</td><td>41388541 - AGUILAR CORONEL, JHONATHAN</td><td>14</td><td>7</td><td>Jue 9-11</td></tr>
          <tr><td>202SW0104 - CÁLCULO I</td><td>4</td><td>1</td><td>41185268 - ASIS LOPEZ, EFRACIO HERMINIO</td><td>14</td><td>10</td><td>Lun 13-15, Mié 13-15</td></tr>
          <tr><td>202SW0104 - CÁLCULO I</td><td>4</td><td>2</td><td>40764399 - MARAVI PERCCA, EDWIN</td><td>14</td><td>9</td><td>Mar 13-15, Jue 13-15</td></tr>
          <tr><td>202SW0105 - BIOLOGÍA PARA CIENCIAS E INGENIERÌA</td><td>4</td><td>5</td><td>43091255 - HUAMAN TINCO, BORJA LUIS</td><td>14</td><td>5</td><td>Mié 15-17</td></tr>
          <tr><td>202SW0105 - BIOLOGÍA PARA CIENCIAS E INGENIERÌA</td><td>4</td><td>6</td><td>70768619 - VILLASANTE BRAVO, NAYSHA</td><td>14</td><td>7</td><td>Jue 15-17</td></tr>
          <tr><td>202SW0106 - ALGEBRA Y GEOMETRÍA ANALÍTICA I</td><td>4</td><td>1</td><td>21571331 - BARBOZA CARAPE, LUIS LEONCIO</td><td>14</td><td>9</td><td>Lun 17-19, Mié 17-19</td></tr>
          <tr><td>202SW0106 - ALGEBRA Y GEOMETRÍA ANALÍTICA I</td><td>4</td><td>2</td><td>40667934 - TERREROS NAVARRO, HELLEN GLORIA</td><td>14</td><td>9</td><td>Mar 17-19, Jue 17-19</td></tr>
          <tr><td>202SW0107 - MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td><td>3</td><td>5</td><td>45286733 - MELGAREJO SOLIS, RONALD ALONSO</td><td>14</td><td>5</td><td>Vie 7-9</td></tr>
          <tr><td>202SW0107 - MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td><td>3</td><td>6</td><td>44752092 - LUCIO PONCE, PILAR</td><td>14</td><td>7</td><td>Vie 9-11</td></tr>
          <tr><td>202SW0E01 - PROGRAMACIÓN Y COMPUTACIÓN</td><td>2</td><td>1</td><td>0A0037 - HUAYNA DUEÑAS, ANA MARIA</td><td>14</td><td>9</td><td>Lun 19-21</td></tr>
          <tr><td>202SW0E01 - PROGRAMACIÓN Y COMPUTACIÓN</td><td>2</td><td>2</td><td>0A0182 - RUIZ RIVERA, MARIA ELENA</td><td>14</td><td>13</td><td>Mar 19-21</td></tr>
          
          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 2
            </td>
          </tr>
          <tr><td>202SW0205 - FÍSICA I</td><td>4</td><td>1</td><td>0A4049 - ADRIANO PEÑA, ROLANDO WILDER</td><td>5</td><td>5</td><td>Lun 7-9, Mié 7-9</td></tr>

          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 3
            </td>
          </tr>
          <tr><td>202SW0301 - ALGORÍTMICA I</td><td>4</td><td>3</td><td>0A1982 - ARREDONDO CASTILLO, GUSTAVO</td><td>47</td><td>45</td><td>Lun 8-10, Mié 8-10</td></tr>
          <tr><td>202SW0301 - ALGORÍTMICA I</td><td>4</td><td>4</td><td>0A1609 - ZAVALETA CAMPOS, JORGE LUIS</td><td>45</td><td>4</td><td>Mar 8-10, Jue 8-10</td></tr>
          <tr><td>202SW0302 - ESTADÍSTICA Y PROBABILIDADES</td><td>4</td><td>1</td><td>007056 - BARTOLO GOTARATE, FELIX MANUEL</td><td>32</td><td>30</td><td>Lun 10-12, Mié 10-12</td></tr>
          <tr><td>202SW0302 - ESTADÍSTICA Y PROBABILIDADES</td><td>4</td><td>2</td><td>022292 - DOMINGUEZ CIRILO, WILFREDO EUGENIO</td><td>32</td><td>32</td><td>Mar 10-12, Jue 10-12</td></tr>

          <tr><td>202SW0303 - FISICA ELÉCTRÓNICA</td><td>3</td><td>3</td><td>088188 - MONTENEGRO JOO, JAVIER SEMPRONIO</td><td>20</td><td>17</td><td>Lun 12-14, Mié 12-14</td></tr>
          <tr><td>202SW0303 - FISICA ELÉCTRÓNICA</td><td>3</td><td>4</td><td>0A06292 - NATIVIDAD ZEVALLOS, ERICK OSCAR</td><td>22</td><td>19</td><td>Mar 12-14, Jue 12-14</td></tr>
          <tr><td>202SW0304 - INGENIERÍA ECONÓMICA</td><td>3</td><td>1</td><td>08490635 - ASENCIOS ESPINOZA, ENCARNACIÓN MELECIO</td><td>20</td><td>7</td><td>Lun 14-16</td></tr>
          <tr><td>202SW0304 - INGENIERÍA ECONÓMICA</td><td>3</td><td>2</td><td>08490635 - ASENCIOS ESPINOZA, ENCARNACIÓN MELECIO</td><td>21</td><td>21</td><td>Mar 14-16</td></tr>

          <tr><td>202SW0305 - INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td><td>3</td><td>3</td><td>0A0314 - ESPINOZA ROBLES, ARMANDO DAVID</td><td>24</td><td>22</td><td>Lun 16-18, Mié 16-18</td></tr>
          <tr><td>202SW0305 - INTRODUCCIÓN AL DESARROLLO DE SOFTWARE</td><td>3</td><td>4</td><td>06799158 - LÓPEZ CÓRDOVA, FRIDA MEREYDA</td><td>22</td><td>22</td><td>Mar 16-18, Jue 16-18</td></tr>
          <tr><td>202SW0306 - MATEMÁTICA BÁSICA</td><td>4</td><td>1</td><td>0A0280 - FLORES CRUZ, JESUS RULE</td><td>20</td><td>3</td><td>Lun 18-20</td></tr>
          <tr><td>202SW0306 - MATEMÁTICA BÁSICA</td><td>4</td><td>2</td><td>0A1331 - LUNA VALDEZ, JUAN HONORATO</td><td>20</td><td>19</td><td>Mar 18-20</td></tr>

          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 4
            </td>
          </tr>
          <tr><td>202SW0401 - ALGORÍTMICA II</td><td>4</td><td>1</td><td>095753 - LAM -, ZHING FONG</td><td>30</td><td>9</td><td>Lun 8-10</td></tr>
          <tr><td>202SW0402 - CONTABILIDAD PARA LA GESTIÓN</td><td>3</td><td>1</td><td>41388541 - AGUILAR CORONEL, JHONATHAN</td><td>30</td><td>8</td><td>Mar 8-10</td></tr>
          <tr><td>202SW0403 - ORGANIZACIÓN Y ADMINISTRACIÓN</td><td>3</td><td>1</td><td>0A1871 - CHÁVEZ HERRERA , CARLOS ERNESTO</td><td>40</td><td>13</td><td>Mié 8-10</td></tr>
          <tr><td>202SW0404 - MATEMÁTICA DISCRETA</td><td>3</td><td>1</td><td>0A5230 - RODRÍGUEZ RODRÍGUEZ , CIRO</td><td>30</td><td>23</td><td>Jue 8-10</td></tr>
          <tr><td>202SW0405 - ESTRUCTURA DE DATOS</td><td>4</td><td>1</td><td>0A1982 - ARREDONDO CASTILLO, GUSTAVO</td><td>30</td><td>8</td><td>Vie 8-10</td></tr>
          <tr><td>202SW0407 - SISTEMAS DIGITALES</td><td>3</td><td>1</td><td>095699 - ARMAS CALDERÓN, RAÚL MARCELO</td><td>30</td><td>20</td><td>Vie 10-12</td></tr>

          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 5
            </td>
          </tr>

          <tr><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>3</td><td>1</td><td>0A0419 - GUERRA GRADOS, LUIS ANGEL</td><td>50</td><td>41</td><td>Lun 7-9</td></tr>
          <tr><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>3</td><td>2</td><td>018686 - CORTEZ VÁSQUEZ, AUGUSTO PARCEMON</td><td>45</td><td>3</td><td>Mar 7-9</td></tr>
          <tr><td>202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>3</td><td>3</td><td>095729 - CHÁVEZ SOTO, JORGE LUIS</td><td>45</td><td>31</td><td>Mié 7-9</td></tr>
          <tr><td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>3</td><td>1</td><td>0A5306 - AGUILAR ALONSO, IGOR JOVINO</td><td>46</td><td>45</td><td>Lun 9-11</td></tr>
          <tr><td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>3</td><td>2</td><td>030228 - GONZÁLES SUÁREZ, JUAN CARLOS</td><td>45</td><td>36</td><td>Mar 9-11</td></tr>
          <tr><td>202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>3</td><td>3</td><td>10089409 - VASQUEZ REYES, EDUARDO ANGEL</td><td>40</td><td>22</td><td>Mié 9-11</td></tr>
          <tr><td>202SW0503 - BASE DE DATOS I</td><td>4</td><td>1</td><td>0A1982 - ARREDONDO CASTILLO, GUSTAVO</td><td>36</td><td>33</td><td>Jue 7-9</td></tr>
          <tr><td>202SW0503 - BASE DE DATOS I</td><td>4</td><td>2</td><td>0A1609 - ZAVALETA CAMPOS, JORGE LUIS</td><td>40</td><td>37</td><td>Vie 7-9</td></tr>
          <tr><td>202SW0503 - BASE DE DATOS I</td><td>4</td><td>3</td><td>0A1236 - MOLINA NEYRA, CÉSAR ALBERTO</td><td>40</td><td>39</td><td>Vie 9-11</td></tr>
          <tr><td>202SW0504 - COMPUTACIÓN VISUAL</td><td>3</td><td>1</td><td>09571E - TRUJILLO TREJO, JOHNLEDGARD</td><td>45</td><td>32</td><td>Lun 11-13</td></tr>
          <tr><td>202SW0504 - COMPUTACIÓN VISUAL</td><td>3</td><td>2</td><td>09571E - TRUJILLO TREJO, JOHNLEDGARD</td><td>46</td><td>45</td><td>Mar 11-13</td></tr>
          <tr><td>202SW0504 - COMPUTACIÓN VISUAL</td><td>3</td><td>3</td><td>09571E - TRUJILLO TREJO, JOHNLEDGARD</td><td>40</td><td>5</td><td>Mié 11-13</td></tr>
          <tr><td>202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>3</td><td>1</td><td>0A5140 - PINGLO RAMÍREZ, MIGUEL ÁNGEL</td><td>40</td><td>32</td><td>Jue 11-13</td></tr>
          <tr><td>202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>3</td><td>2</td><td>72531782 - MAGUIÑO YARANGA, MARIO ALEXIS</td><td>40</td><td>39</td><td>Vie 11-13</td></tr>
          <tr><td>202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>3</td><td>3</td><td>72531782 - MAGUIÑO YARANGA, MARIO ALEXIS</td><td>45</td><td>38</td><td>Vie 13-15</td></tr>
          <tr><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>4</td><td>1</td><td>0A5230 - RODRÍGUEZ RODRÍGUEZ , CIRO</td><td>35</td><td>31</td><td>Lun 13-15</td></tr>
          <tr><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>4</td><td>2</td><td>0A1871 - CHÁVEZ HERRERA , CARLOS ERNESTO</td><td>35</td><td>24</td><td>Mar 13-15</td></tr>
          <tr><td>202SW0506 - INGENIERÍA DE REQUISITOS</td><td>4</td><td>3</td><td>09620253 - COLCA GARCIA, HEDDY LILIANA</td><td>52</td><td>52</td><td>Mié 13-15</td></tr>
          <tr><td>202SW0507 - LENGUAJES Y COMPILADORES</td><td>4</td><td>1</td><td>096237 - RUIZ DE LA CRUZ MELO, CARLOS AUGUSTO</td><td>40</td><td>15</td><td>Jue 13-15</td></tr>
          <tr><td>202SW0507 - LENGUAJES Y COMPILADORES</td><td>4</td><td>2</td><td>096237 - RUIZ DE LA CRUZ MELO, CARLOS AUGUSTO</td><td>45</td><td>6</td><td>Vie 13-15</td></tr>

          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(227, 226, 240); color: rgba(0, 30, 149, 0.7);">
              Ciclo 6
            </td>
          </tr>
          <tr><td>202SW0607 - SISTEMAS OPERATIVOS</td><td>3</td><td>1</td><td>095702 - BUSTAMANTE OLIVERA, VÍCTOR HUGO</td><td>5</td><td>2</td><td>Lun 15-17</td></tr>

        </tbody>
      </table>
    </div>

  `;
}





function mostrarPreMatricula() {
  document.getElementById('main-content').innerHTML = `
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 430px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 500px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

      .tabla-excel td,
      .tabla-excel th {
        text-align: center;  /* por defecto todo centrado */
      }

      .tabla-excel td:nth-child(3),
      .tabla-excel th:nth-child(3) {
        text-align: center;    /* solo la columna Asignatura a la izquierda */
      }

      .cuadro-texto-centro {
        width: 100%;                    /* Ocupa todo el ancho del contenedor */
        background-color: rgb(193, 231, 250); /* Color de fondo del cuadro */
        text-align: center;             /* Texto centrado */
        font-weight: bold;              /* Texto en negrita */
        font-size: 14px;                /* Tamaño de letra */
        padding: 12px 0;                /* Espaciado arriba y abajo */
        border-radius: 6px;             /* Bordes redondeados */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Sombra suave */
        margin-bottom: 10px;            /* Separación abajo del cuadro */
        box-sizing: border-box;         /* Para que el padding no afecte ancho total */
        color: rgb(55, 89, 104);
      }
    </style>

    <div class="overlay-text">Reporte de Prematricula</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <div class="cuadro-texto-centro">
        REGISTRA MATRICULA EN EL PRESENTE PERIODO ACADEMICO
      </div>
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 10%;">Plan</th>
            <th style="width: 10%;">Ciclo</th>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 10%;">Créditos</th>
            <th style="width: 10%;">Nro. Rep</th>
            <th style="width: 10%;">Nro. Mat. Equiv</th>
            <th style="width: 10%;">Nro. Rep. Total</th>
            <th style="width: 10%;">Etapa</th>
          </tr>
        </thead>
        <tbody>
          <tr><td rowspan="8">2023</td><td rowspan="3">5</td><td style="text-align: left;">202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0507 - LENGUAJES Y COMPILADORES</td><td>4</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td>1</td><td style="text-align: left;">202SW0E01 - PROGRAMACIÓN Y COMPUTACIÓN</td><td>2</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td rowspan="4">5</td><td style="text-align: left;">202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0503 - BASE DE DATOS I</td><td>4</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0504 - COMPUTACIÓN VISUAL</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0506 - INGENIERÍA DE REQUISITOS</td><td>4</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
        </tbody>
      </table>


    </div>
  `;
}

function mostrarMatriculaReporte() {
  document.getElementById('main-content').innerHTML = `
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 510px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 600px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

      .tabla-excel td,
      .tabla-excel th {
        text-align: center;  /* por defecto todo centrado */
      }

      .tabla-excel td:nth-child(3),
      .tabla-excel th:nth-child(3) {
        text-align: center;    /* solo la columna Asignatura a la izquierda */
      }

      .cuadro-texto-centro {
        width: 300px;                    /* Ocupa todo el ancho del contenedor */
        background-color: rgb(193, 231, 250); /* Color de fondo del cuadro */
        text-align: left;             /* Texto centrado */
        font-weight: bold;              /* Texto en negrita */
        font-size: 10px;                /* Tamaño de letra */
        padding: 12px 16px;                /* Espaciado arriba y abajo */
        border-radius: 6px;             /* Bordes redondeados */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Sombra suave */
        margin-bottom: 10px;            /* Separación abajo del cuadro */
        box-sizing: border-box;         /* Para que el padding no afecte ancho total */
        color: rgb(55, 89, 104);
        margin-right: 10px;
        margin-left: auto;
      }
    </style>

    <div class="overlay-text">Reporte de Matricula</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <div style="width: 100%; text-align: center; font-weight: bold; font-size: 16px; margin-bottom: 8px;">
        ASIGNATURAS MATRICULADAS
      </div>
      <div class="cuadro-texto-centro">
        <p style="margin: 0;">Fecha: 02/07/2025</p>
        <p style="margin: 0;">Tipo: Matrícula Vía Web</p>
      </div>
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 10%;">Plan</th>
            <th style="width: 10%;">Ciclo</th>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 10%;">Créditos</th>
            <th style="width: 10%;">Nro. Rep</th>
            <th style="width: 10%;">Nro. Mat. Equiv</th>
            <th style="width: 10%;">Nro. Rep. Total</th>
            <th style="width: 10%;">Etapa</th>
          </tr>
        </thead>
        <tbody>
          <tr><td rowspan="8">2023</td><td rowspan="3">5</td><td style="text-align: left;">202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0507 - LENGUAJES Y COMPILADORES</td><td>4</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td>1</td><td style="text-align: left;">202SW0E01 - PROGRAMACIÓN Y COMPUTACIÓN</td><td>2</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td rowspan="4">5</td><td style="text-align: left;">202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0503 - BASE DE DATOS I</td><td>4</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0504 - COMPUTACIÓN VISUAL</td><td>3</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
          <tr><td style="text-align: left;">202SW0506 - INGENIERÍA DE REQUISITOS</td><td>4</td><td>0</td><td>0</td><td>0</td><td>R</td></tr>
        </tbody>
        
      </table>
      
      <div class="cuadro-texto-centro">
        <p>Créditos matriculados: 20</p>
        <p>Asignaturas matriculadas: 6</p>
      </div>

    </div>
  `;
}

function mostrarEvaluaciones() {
  document.getElementById('main-content').innerHTML = `
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 510px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 700px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

      .tabla-excel td,
      .tabla-excel th {
        text-align: center;  /* por defecto todo centrado */
      }

      .tabla-excel td:nth-child(3),
      .tabla-excel th:nth-child(3) {
        text-align: center;    /* solo la columna Asignatura a la izquierda */
      }

      .cuadro-texto-centro {
        width: 300px;                    /* Ocupa todo el ancho del contenedor */
        background-color: rgb(193, 231, 250); /* Color de fondo del cuadro */
        text-align: left;             /* Texto centrado */
        font-weight: bold;              /* Texto en negrita */
        font-size: 10px;                /* Tamaño de letra */
        padding: 12px 16px;                /* Espaciado arriba y abajo */
        border-radius: 6px;             /* Bordes redondeados */
        box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Sombra suave */
        margin-bottom: 10px;            /* Separación abajo del cuadro */
        box-sizing: border-box;         /* Para que el padding no afecte ancho total */
        color: rgb(55, 89, 104);
        margin-right: 10px;
        margin-left: auto;
      }
    </style>

    <div class="overlay-text">Reporte de Evaluaciones</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">

      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 15%;">Ciclo</th>
            <th style="width: 30%;">Asignatura</th>
            <th style="width: 20%;">Tipo de Evaluación</th>
            <th style="width: 15%;">Calificación</th>
            <th style="width: 20%;">Fórmula</th>
          </tr>
        </thead>
       <tr><td rowspan="21">5</td><td rowspan="3">202SW0501 - ANÁLISIS Y DISEÑO DE ALGORITMOS</td><td>Examen Parcial</td><td>--</td><td rowspan="3">0.3 EP + 0.4 EPRO + 0.3 EF</td></tr>
      <tr><td>Evaluación Continua</td><td>--</td></tr>
      <tr><td>Examen Final</td><td>--</td></tr>

      <tr><td rowspan="3">202SW0502 - ARQUITECTURA DE COMPUTADORAS</td><td>Examen Parcial</td><td>--</td><td rowspan="3">0.3 EP + 0.4 EPRO + 0.3 EF</td></tr>
      <tr><td>Evaluación Continua</td><td>--</td></tr>
      <tr><td>Examen Final</td><td>--</td></tr>

      <tr><td rowspan="3">202SW0503 - BASE DE DATOS I</td><td>Examen Parcial</td><td>--</td><td rowspan="3">0.3 EP + 0.4 EPRO + 0.3 EF</td></tr>
      <tr><td>Evaluación Continua</td><td>--</td></tr>
      <tr><td>Examen Final</td><td>--</td></tr>

      <tr><td rowspan="3">202SW0504 - COMPUTACIÓN VISUAL</td><td>Examen Parcial</td><td>--</td><td rowspan="3">0.3 EP + 0.4 EPRO + 0.3 EF</td></tr>
      <tr><td>Evaluación Continua</td><td>--</td></tr>
      <tr><td>Examen Final</td><td>--</td></tr>

      <tr><td rowspan="3">202SW0505 - ECONOMÍA PARA LA GESTIÓN</td><td>Examen Parcial</td><td>--</td><td rowspan="3">0.3 EP + 0.4 EPRO + 0.3 EF</td></tr>
      <tr><td>Evaluación Continua</td><td>--</td></tr>
      <tr><td>Examen Final</td><td>--</td></tr>

      <tr><td rowspan="3">202SW0506 - INGENIERÍA DE REQUISITOS</td><td>Examen Parcial</td><td>--</td><td rowspan="3">0.3 EP + 0.4 EPRO + 0.3 EF</td></tr>
      <tr><td>Evaluación Continua</td><td>--</td></tr>
      <tr><td>Examen Final</td><td>--</td></tr>
        
      </table>

    </div>
  `;
}

function mostrarDeudas() {
  document.getElementById("main-content").innerHTML = `
    <style>
      .overlay-text {
        position: absolute;
        top: 16px;
        left: 550px;
        font-size: 24px;
        font-weight: bold;
        color: rgba(2, 35, 169, 0.7);
        z-index: 9999;
        background: none;
        padding: 0;
        border: none;
        pointer-events: none;
      }

      #main-content {
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 20px;
        padding-top: 60px;
      }

      .info-box {
        width: 1200px;
        background: azure;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .info-box2 {
        width: 1200px;
        height: 200px;
        background: azure;
        border-radius: 8px;
        display: flex;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;

        display: flex;          /* activamos flex */
        flex-direction: column; /* los hijos van en columna */
        gap: 10px;   
      }

      /* NUEVO: contenedor de los 5 cuadros */
      .cuadros-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
      }

      .fila-cuadros {
        display: flex;
        gap: 20px;
      }

      .cuadro {
        width: 565px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 16px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-weight: bold;
        font-size: 13px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: rgb(227, 226, 240);
      }

      .texto-flotante-cuadro {
      position: absolute;
      top: 45px;
      left: 50px; /* por ejemplo, en la esquina derecha */
      background-color:rgb(249, 204, 159); /* un color suave de fondo */
      padding: 8px 16px;
      border-radius: 20px; /* bordes curvos */
      box-shadow: 0 3px 6px rgba(0,0,0,0.1);
      font-weight: bold;
      font-size: 12px;
      color:rgb(0, 0, 0);
      z-index: 10000;
      user-select: none;
      pointer-events: none; /* si no querés que interfiera con clicks */
      }

      .tabla-excel {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        font-size: 14px;
        text-align: left;
      }

      .tabla-excel th {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: center;  /* Encabezados centrados */
      }

      .tabla-excel td {
        border: 1px solid rgb(229, 229, 229);
        padding: 8px 12px;
        text-align: left;    /* Celdas alineadas a la izquierda */
      }

      .tabla-excel tbody td {
        font-size: 12px;
      }

      .tabla-excel thead {
        background-color:rgb(234, 247, 250);
        font-weight: bold;
        color: rgba(0, 30, 149, 0.7);
      }

      .tabla-excel td:nth-child(2),  /* Créd. */
      .tabla-excel td:nth-child(3),  /* Sec. */
      .tabla-excel td:nth-child(6) { /* Matriculados */
        text-align: center;
      }

      #btnDescargar {
        width: 100px;
        align-self: flex-start;
        margin-top: 2px; /* separa un poco de la tabla */
        padding: 7px 14px;
        font-weight: bold;
        background-color:rgb(194, 4, 4);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #btnDescargar:hover {
        background-color:rgb(111, 0, 0);
      }

    </style>

    <div class="overlay-text">Reporte de Deudas</div>

    <div class="info-box">
      <div class="texto-flotante-cuadro">Datos del Estudiante</div>

      <!-- Contenedor con 5 cuadros del mismo tamaño -->
      <div class="cuadros-container">
        <!-- Primera fila: un cuadro centrado -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Periodo Académico</p>
            <p style="color:rgba(0, 51, 255, 0.7);">2025-1</p>
          </div>
        </div>

        <!-- Segunda fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Facultad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">20 - INGENIERÍA DE SISTEMAS E INFORMÁTICA</p>
          </div>
          <div class="cuadro">
            <p>Programa</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2 - E.P. de Ingeniería de Software</p>
          </div>
        </div>

        <!-- Tercera fila: dos cuadros -->
        <div class="fila-cuadros">
          <div class="cuadro">
            <p>Especialidad</p>
            <p style="color: rgba(0, 51, 255, 0.7);">0 - Estudios Generales</p>
          </div>
          <div class="cuadro">
            <p>Plan de Estudios</p>
            <p style="color: rgba(0, 51, 255, 0.7);">2023 - Plan de Estudios 2023</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box2">
      <button id="btnDescargar">Descargar</button>
      <table class="tabla-excel">
        <thead>
          <tr>
            <th style="width: 20%;">Fecha Registro</th>
            <th style="width: 15%;">Periodo Académico</th>
            <th style="width: 15%;">Concepto</th>
            <th style="width: 15%;">Monto Inicial</th>
            <th style="width: 15%;">Monto final</th>
            <th style="width: 20%;">Observación</th>
          </tr>
          <tr>
            <td colspan="7" style="text-align: center; font-weight: bold; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">
              No hay tutorías registradas.
            </td>
          </tr>
        </thead>
    </div>
  `;
}
