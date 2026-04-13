'use strict';

// ===== SIDEBAR TOGGLE =====
const sidebar = document.getElementById('sidebar');
document.getElementById('sidebarToggle').addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// ===== CHART DEFAULTS =====
Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#6b7280';
Chart.defaults.plugins.legend.labels.boxWidth = 10;
Chart.defaults.plugins.legend.labels.borderRadius = 5;
Chart.defaults.plugins.legend.labels.usePointStyle = true;

const gridColor = '#f0f2f5';
const tooltipStyle = {
  backgroundColor: '#1a1d23',
  titleColor: '#ffffff',
  bodyColor: '#d1d5db',
  borderColor: '#2d3139',
  borderWidth: 1,
  borderRadius: 10,
  padding: 10,
};

// ===== BAR CHART =====
new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ingresos',
        data: [189, 203, 217, 195, 221, 208],
        backgroundColor: 'rgba(37,99,235,0.85)',
        borderRadius: 6, borderSkipped: false,
      },
      {
        label: 'Altas',
        data: [142, 168, 180, 155, 190, 172],
        backgroundColor: 'rgba(34,197,94,0.85)',
        borderRadius: 6, borderSkipped: false,
      },
      {
        label: 'Criticos',
        data: [62, 75, 70, 68, 80, 73],
        backgroundColor: 'rgba(239,68,68,0.8)',
        borderRadius: 6, borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { position: 'top' }, tooltip: { ...tooltipStyle, mode: 'index', intersect: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false } },
      y: { grid: { color: gridColor }, border: { display: false }, beginAtZero: true },
    },
  },
});

// ===== BUBBLE CHART =====
new Chart(document.getElementById('bubbleChart'), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'UCI',
        data: [{ x: 7.2, y: 9.1, r: 18 }, { x: 5.8, y: 6.4, r: 12 }],
        backgroundColor: 'rgba(239,68,68,0.65)',
        borderColor: 'rgba(239,68,68,0.9)', borderWidth: 2,
      },
      {
        label: 'Cirugia',
        data: [{ x: 4.5, y: 5.0, r: 14 }, { x: 3.2, y: 3.8, r: 10 }],
        backgroundColor: 'rgba(245,158,11,0.65)',
        borderColor: 'rgba(245,158,11,0.9)', borderWidth: 2,
      },
      {
        label: 'Med. Interna',
        data: [{ x: 3.0, y: 3.5, r: 11 }, { x: 2.1, y: 2.3, r: 8 }],
        backgroundColor: 'rgba(37,99,235,0.6)',
        borderColor: 'rgba(37,99,235,0.9)', borderWidth: 2,
      },
      {
        label: 'Emergencias',
        data: [{ x: 1.5, y: 1.8, r: 7 }],
        backgroundColor: 'rgba(34,197,94,0.6)',
        borderColor: 'rgba(34,197,94,0.9)', borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        ...tooltipStyle,
        callbacks: {
          label: ctx => ` ${ctx.dataset.label}: Est. teorica ${ctx.raw.x}d / Real ${ctx.raw.y}d`,
        },
      },
    },
    scales: {
      x: { grid: { color: gridColor }, border: { display: false }, title: { display: true, text: 'Estancia teorica (dias)' } },
      y: { grid: { color: gridColor }, border: { display: false }, title: { display: true, text: 'Estancia real (dias)' } },
    },
  },
});

// ===== DONUT CHART =====
new Chart(document.getElementById('donutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Cardiovascular', 'Respiratorio', 'Metabolico', 'Infeccioso', 'Otro'],
    datasets: [{
      data: [32, 24, 18, 16, 10],
      backgroundColor: ['#ef4444','#f59e0b','#2563eb','#22c55e','#a78bfa'],
      borderWidth: 2, borderColor: '#fff',
      hoverOffset: 6,
    }],
  },
  options: {
    responsive: false,
    cutout: '68%',
    plugins: {
      legend: { position: 'right', labels: { padding: 14, font: { size: 11 } } },
      tooltip: tooltipStyle,
    },
  },
});

// ===== LINE CHART =====
new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6'],
    datasets: [
      {
        label: 'Eventos adversos',
        data: [14, 18, 12, 22, 17, 15],
        borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.08)',
        tension: 0.4, fill: true, pointRadius: 5, pointBackgroundColor: '#ef4444',
      },
      {
        label: 'Casos controlados',
        data: [9, 11, 8, 14, 12, 10],
        borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.08)',
        tension: 0.4, fill: true, pointRadius: 5, pointBackgroundColor: '#22c55e',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { position: 'top' }, tooltip: { ...tooltipStyle, mode: 'index', intersect: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false } },
      y: { grid: { color: gridColor }, border: { display: false }, beginAtZero: true },
    },
  },
});

// ===== PATIENTS DATA =====
const patients = [
  {
    nombre: 'Juan Perez', edad: 65, riesgo: 'Alto', estado: 'Critico', color: 'danger',
    servicio: 'UCI', diagnostico: 'Insuficiencia cardiaca aguda',
    ingreso: '12/03/2026', estancia: '32 dias',
    antecedentes: 'HTA, DM tipo 2, IAM 2021',
    alergias: 'AAS',
    notas: 'Monitoreo continuo. Soporte inotropico activo. Derivacion a cardiocirugia en evaluacion.',
    cie10: 'I50.9',
  },
  {
    nombre: 'Luis Torres', edad: 72, riesgo: 'Alto', estado: 'Critico', color: 'danger',
    servicio: 'UCI', diagnostico: 'Insuficiencia respiratoria',
    ingreso: '28/03/2026', estancia: '16 dias',
    antecedentes: 'ERC estadio 3, tabaquismo',
    alergias: 'IECA',
    notas: 'Soporte ventilatorio mecanico. Control gasometrico c/6h.',
    cie10: 'J96.0',
  },
  {
    nombre: 'Ana Gomez', edad: 54, riesgo: 'Medio', estado: 'Estable', color: 'warning',
    servicio: 'Cirugia', diagnostico: 'Post-op histerectomia',
    ingreso: '01/04/2026', estancia: '12 dias',
    antecedentes: 'Obesidad clase II',
    alergias: 'Ninguna conocida',
    notas: 'Evolucion favorable. Fisioterapia respiratoria activa. Alta estimada en 3 dias.',
    cie10: 'Z48.0',
  },
  {
    nombre: 'Pedro Diaz', edad: 59, riesgo: 'Medio', estado: 'Estable', color: 'warning',
    servicio: 'Medicina Interna', diagnostico: 'Descompensacion metabolica',
    ingreso: '30/03/2026', estancia: '14 dias',
    antecedentes: 'DM tipo 2, dislipidemia',
    alergias: 'Metformina (intolerancia GI)',
    notas: 'Ajuste de insulinoterapia en curso. Control de HbA1c pendiente.',
    cie10: 'E11.9',
  },
  {
    nombre: 'Maria Ruiz', edad: 43, riesgo: 'Bajo', estado: 'Alta pendiente', color: 'success',
    servicio: 'Emergencias', diagnostico: 'Broncoespasmo severo',
    ingreso: '10/04/2026', estancia: '3 dias',
    antecedentes: 'Asma leve-moderada',
    alergias: 'AINES',
    notas: 'Sin complicaciones. Alta planificada para manana. Educacion sobre plan de accion asmatica.',
    cie10: 'J45.1',
  },
];

function getRiskBadge(r) {
  const map = { Alto: 'alto', Medio: 'medio', Bajo: 'bajo' };
  return `<span class="risk-badge ${map[r] || 'bajo'}">${r}</span>`;
}

// ===== RENDER TABLE =====
function renderPatientsTable(list) {
  const tbody = document.getElementById('patientsTableBody');
  const count = document.getElementById('patientCount');
  tbody.innerHTML = '';
  list.forEach((p, i) => {
    const realIdx = patients.indexOf(p);
    tbody.innerHTML += `
      <tr>
        <td><span class="badge bg-${p.color === 'warning' ? 'warning text-dark' : p.color}">${p.estado}</span></td>
        <td><strong>${p.nombre}</strong></td>
        <td>${p.edad}</td>
        <td>${p.diagnostico}</td>
        <td>${p.ingreso}</td>
        <td>${p.estancia}</td>
        <td>${getRiskBadge(p.riesgo)}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary"
            data-index="${realIdx}"
            data-bs-toggle="modal"
            data-bs-target="#patientModal">
            Ver mas
          </button>
        </td>
      </tr>`;
  });
  if (count) count.textContent = `${list.length} pacientes`;
}

renderPatientsTable(patients);

// ===== TABLE SEARCH =====
document.getElementById('tableSearch').addEventListener('input', function () {
  const q = this.value.toLowerCase();
  const filtered = patients.filter(p =>
    p.nombre.toLowerCase().includes(q) ||
    p.diagnostico.toLowerCase().includes(q) ||
    p.riesgo.toLowerCase().includes(q) ||
    p.servicio.toLowerCase().includes(q)
  );
  renderPatientsTable(filtered);
});

// ===== MODAL PATIENT DETAIL =====
document.getElementById('patientModal').addEventListener('show.bs.modal', function (e) {
  const idx = e.relatedTarget.getAttribute('data-index');
  const p = patients[idx];
  document.getElementById('patientModalLabel').textContent = p.nombre;
  document.getElementById('patientModalSub').textContent = `${p.servicio} — ${p.diagnostico} (${p.cie10})`;
  document.getElementById('patientModalBody').innerHTML = `
    <div class="row g-3">
      <div class="col-md-6">
        <div class="p-3 rounded-3" style="background:#f8f9fb">
          <div class="fw-semibold text-primary mb-2"><i class="bi bi-person me-1"></i>Datos del paciente</div>
          <table class="table table-sm mb-0" style="font-size:13px">
            <tr><td class="text-muted">Edad</td><td><strong>${p.edad} anos</strong></td></tr>
            <tr><td class="text-muted">Riesgo</td><td>${getRiskBadge(p.riesgo)}</td></tr>
            <tr><td class="text-muted">Estado</td><td><span class="badge bg-${p.color === 'warning' ? 'warning text-dark' : p.color}">${p.estado}</span></td></tr>
            <tr><td class="text-muted">Servicio</td><td>${p.servicio}</td></tr>
          </table>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-3 rounded-3" style="background:#f8f9fb">
          <div class="fw-semibold text-primary mb-2"><i class="bi bi-calendar-event me-1"></i>Hospitalizacion</div>
          <table class="table table-sm mb-0" style="font-size:13px">
            <tr><td class="text-muted">Ingreso</td><td><strong>${p.ingreso}</strong></td></tr>
            <tr><td class="text-muted">Estancia</td><td><strong>${p.estancia}</strong></td></tr>
            <tr><td class="text-muted">Diagnostico</td><td>${p.diagnostico}</td></tr>
            <tr><td class="text-muted">CIE-10</td><td><code>${p.cie10}</code></td></tr>
          </table>
        </div>
      </div>
      <div class="col-12">
        <div class="p-3 rounded-3" style="background:#f8f9fb">
          <div class="fw-semibold text-primary mb-2"><i class="bi bi-shield-exclamation me-1"></i>Antecedentes y alertas</div>
          <div style="font-size:13px"><span class="text-muted">Antecedentes:</span> ${p.antecedentes}</div>
          <div style="font-size:13px" class="mt-1"><span class="text-muted">Alergias:</span> <span class="text-danger fw-semibold">${p.alergias}</span></div>
          <hr class="my-2">
          <div style="font-size:13px"><span class="text-muted">Notas clinicas:</span><br>${p.notas}</div>
        </div>
      </div>
    </div>`;
});

// ===== PATIENT SELECTOR (Tab 2) =====
function renderPatientSelector() {
  const ul = document.getElementById('patientSelector');
  ul.innerHTML = '';
  patients.forEach((p, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="pat-dot bg-${p.color}"></div>
      <div>
        <div class="pat-name">${p.nombre}</div>
        <div class="pat-sub">${p.servicio} &middot; ${p.riesgo}</div>
      </div>`;
    li.addEventListener('click', () => {
      ul.querySelectorAll('li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      renderClinicalDetail(i);
    });
    ul.appendChild(li);
  });
}
renderPatientSelector();

function renderClinicalDetail(idx) {
  const p = patients[idx];
  const panel = document.getElementById('clinicalDetailPanel');
  panel.innerHTML = `
    <div class="card compass-card mb-3">
      <div class="card-header-custom">
        <div>
          <h6 class="card-title">${p.nombre}</h6>
          <p class="card-subtitle">${p.servicio} &mdash; ${p.diagnostico}</p>
        </div>
        <span class="badge bg-${p.color === 'warning' ? 'warning text-dark' : p.color}">${p.estado}</span>
      </div>
      <div class="card-body">
        <div class="row g-3">
          <div class="col-6 col-md-3">
            <div class="mini-kpi"><div class="mini-kpi-value text-primary">${p.edad}</div><div class="mini-kpi-label">Anos</div></div>
          </div>
          <div class="col-6 col-md-3">
            <div class="mini-kpi"><div class="mini-kpi-value text-${p.color}">${p.estancia}</div><div class="mini-kpi-label">Estancia</div></div>
          </div>
          <div class="col-6 col-md-3">
            <div class="mini-kpi"><div class="mini-kpi-value" style="font-size:16px">${getRiskBadge(p.riesgo)}</div><div class="mini-kpi-label">Riesgo</div></div>
          </div>
          <div class="col-6 col-md-3">
            <div class="mini-kpi"><div class="mini-kpi-value" style="font-size:14px"><code>${p.cie10}</code></div><div class="mini-kpi-label">CIE-10</div></div>
          </div>
        </div>
        <hr>
        <div class="row g-3 mt-1" style="font-size:13px">
          <div class="col-md-6"><strong>Ingreso:</strong> ${p.ingreso}</div>
          <div class="col-md-6"><strong>Antecedentes:</strong> ${p.antecedentes}</div>
          <div class="col-md-6"><strong>Alergias:</strong> <span class="text-danger">${p.alergias}</span></div>
          <div class="col-12"><strong>Notas clinicas:</strong><br><span class="text-muted">${p.notas}</span></div>
        </div>
      </div>
    </div>`;
}

// ===== FILTER FORM (prevent submit) =====
document.getElementById('filterForm').addEventListener('submit', e => {
  e.preventDefault();
  // In a real app, filters would trigger API calls
  const toast = document.createElement('div');
  toast.className = 'position-fixed bottom-0 end-0 p-3';
  toast.style.zIndex = '9999';
  toast.innerHTML = `
    <div class="toast show align-items-center text-bg-primary border-0" style="border-radius:12px">
      <div class="d-flex">
        <div class="toast-body"><i class="bi bi-check-circle me-2"></i>Filtros aplicados correctamente</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.closest('.position-fixed').remove()"></button>
      </div>
    </div>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
});
