const units = [
    // PORTAL 12
    { id: 1,  name: '1º B — Portal 12', floor: 'Planta 1ª', type: 'Tipo B', m2: '67,77', terrace: '12,19', price: '390.000,00 €', plan: 'plans_final/page_13_left.png?v=17', beds: 2, baths: 2, portal: 12, letra: 'B' },
    { id: 2,  name: '1º C — Portal 12', floor: 'Planta 1ª', type: 'Tipo C', m2: '44,52', terrace: '11,25', price: '260.000,00 €', plan: 'plans_final/page_15_left.png?v=17', beds: 1, baths: 1, portal: 12, letra: 'C' },
    { id: 3,  name: '1º D — Portal 12', floor: 'Planta 1ª', type: 'Tipo D', m2: '46,79', terrace: '11,25', price: '275.000,00 €', plan: 'plans_final/page_15_right.png?v=17', beds: 1, baths: 1, portal: 12, letra: 'D' },
    { id: 4,  name: '2º B — Portal 12', floor: 'Planta 2ª', type: 'Tipo B', m2: '67,77', terrace: '12,09', price: '385.000,00 €', plan: 'plans_final/page_13_right.png?v=17', beds: 2, baths: 2, portal: 12, letra: 'B' },
    { id: 5,  name: '2º A — Portal 12', floor: 'Planta 2ª', type: 'Tipo A', m2: '94,85', terrace: '11,25', price: '525.000,00 €', plan: 'plans_final/page_14_right.png?v=17', beds: 3, baths: 2, portal: 12, letra: 'A' },
    { id: 6,  name: '3º B — Portal 12', floor: 'Planta 3ª', type: 'Tipo B', m2: '67,77', terrace: '12,19', price: '395.000,00 €', plan: 'plans_final/page_13_left.png?v=17', beds: 2, baths: 2, portal: 12, letra: 'B' },
    { id: 7,  name: '3º C — Portal 12', floor: 'Planta 3ª', type: 'Tipo C', m2: '44,52', terrace: '11,25', price: '270.000,00 €', plan: 'plans_final/page_15_left.png?v=17', beds: 1, baths: 1, portal: 12, letra: 'C' },
    { id: 8,  name: '3º D — Portal 12', floor: 'Planta 3ª', type: 'Tipo D', m2: '46,79', terrace: '11,25', price: '280.000,00 €', plan: 'plans_final/page_15_right.png?v=17', beds: 1, baths: 1, portal: 12, letra: 'D' },
    { id: 9,  name: '4º B — Portal 12', floor: 'Planta 4ª', type: 'Tipo B', m2: '67,77', terrace: '12,09', price: '395.000,00 €', plan: 'plans_final/page_13_right.png?v=17', beds: 2, baths: 2, portal: 12, letra: 'B' },
    { id: 10, name: '4º A — Portal 12', floor: 'Planta 4ª', type: 'Tipo A', m2: '94,85', terrace: '11,25', price: '535.000,00 €', plan: 'plans_final/page_14_right.png?v=17', beds: 3, baths: 2, portal: 12, letra: 'A' },
    { id: 11, name: '5º Ad — Portal 12', floor: 'Planta 5ª', type: 'Tipo Ad', m2: '135,06', terrace: '26,78', price: '815.000,00 €', plan: 'plans_final/page_12_full.png?v=20', beds: 3, baths: 3, portal: 12, letra: 'Ad' },
    { id: 12, name: '5º Bd — Portal 12', floor: 'Planta 5ª', type: 'Tipo Bd', m2: '96,01', terrace: '21,23', price: '590.000,00 €', plan: 'plans_final/page_16_full.png?v=20', beds: 2, baths: 3, portal: 12, letra: 'Bd' },

    // PORTAL 14
    { id: 13, name: '1º B — Portal 14', floor: 'Planta 1ª', type: 'Tipo B', m2: '67,77', terrace: '12,19', price: '390.000,00 €', plan: 'plans_final/page_13_left.png?v=17', beds: 2, baths: 2, portal: 14, letra: 'B' },
    { id: 14, name: '1º C — Portal 14', floor: 'Planta 1ª', type: 'Tipo C', m2: '44,52', terrace: '11,25', price: '260.000,00 €', plan: 'plans_final/page_15_left.png?v=17', beds: 1, baths: 1, portal: 14, letra: 'C' },
    { id: 15, name: '1º D — Portal 14', floor: 'Planta 1ª', type: 'Tipo D', m2: '46,79', terrace: '11,25', price: '275.000,00 €', plan: 'plans_final/page_15_right.png?v=17', beds: 1, baths: 1, portal: 14, letra: 'D' },
    { id: 16, name: '2º B — Portal 14', floor: 'Planta 2ª', type: 'Tipo B', m2: '67,77', terrace: '12,09', price: '385.000,00 €', plan: 'plans_final/page_13_right.png?v=17', beds: 2, baths: 2, portal: 14, letra: 'B' },
    { id: 17, name: '2º A — Portal 14', floor: 'Planta 2ª', type: 'Tipo A', m2: '94,85', terrace: '11,25', price: '525.000,00 €', plan: 'plans_final/page_14_right.png?v=17', beds: 3, baths: 2, portal: 14, letra: 'A' },
    { id: 18, name: '3º B — Portal 14', floor: 'Planta 3ª', type: 'Tipo B', m2: '67,77', terrace: '12,19', price: '395.000,00 €', plan: 'plans_final/page_13_left.png?v=17', beds: 2, baths: 2, portal: 14, letra: 'B' },
    { id: 19, name: '3º C — Portal 14', floor: 'Planta 3ª', type: 'Tipo C', m2: '44,52', terrace: '11,25', price: '270.000,00 €', plan: 'plans_final/page_15_left.png?v=17', beds: 1, baths: 1, portal: 14, letra: 'C' },
    { id: 20, name: '3º D — Portal 14', floor: 'Planta 3ª', type: 'Tipo D', m2: '46,79', terrace: '11,25', price: '280.000,00 €', plan: 'plans_final/page_15_right.png?v=17', beds: 1, baths: 1, portal: 14, letra: 'D' },
    { id: 21, name: '4º B — Portal 14', floor: 'Planta 4ª', type: 'Tipo B', m2: '67,77', terrace: '12,09', price: '395.000,00 €', plan: 'plans_final/page_13_right.png?v=17', beds: 2, baths: 2, portal: 14, letra: 'B' },
    { id: 22, name: '4º A — Portal 14', floor: 'Planta 4ª', type: 'Tipo A', m2: '94,85', terrace: '11,25', price: '535.000,00 €', plan: 'plans_final/page_14_right.png?v=17', beds: 3, baths: 2, portal: 14, letra: 'A' },
    { id: 23, name: '5º Ad — Portal 14', floor: 'Planta 5ª', type: 'Tipo Ad', m2: '135,06', terrace: '26,78', price: '815.000,00 €', plan: 'plans_final/page_12_full.png?v=20', beds: 3, baths: 3, portal: 14, letra: 'Ad' },
    { id: 24, name: '5º Bd — Portal 14', floor: 'Planta 5ª', type: 'Tipo Bd', m2: '96,01', terrace: '21,23', price: '590.000,00 €', plan: 'plans_final/page_16_full.png?v=20', beds: 2, baths: 3, portal: 14, letra: 'Bd' }
];

const unitsGrid = document.getElementById('units-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderUnits(filter = 'all') {
    unitsGrid.innerHTML = '';
    const filteredUnits = filter === 'all' ? units : units.filter(u => u.type === filter || (filter === 'Atico' && u.type.includes('d')));
    
    filteredUnits.forEach(u => {
        const isAtico = u.type.includes('d');
        const badge = isAtico ? '<div class="unit-badge">Ático Dúplex</div>' : '';
        const bedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>';
        const bathIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>';

        const card = document.createElement('div');
        card.className = 'unit-card';
        card.innerHTML = `
            ${badge}
            <div class="unit-card-header">
                <h4>${u.name}</h4>
                <span class="unit-floor">${u.type}</span>
            </div>
            <div class="unit-card-body">
                <div class="unit-specs">
                    <div class="unit-spec">
                        <label>Superficie</label>
                        <span>${u.m2} m²</span>
                    </div>
                    <div class="unit-spec">
                        <label>Terraza</label>
                        <span>${u.terrace} m²</span>
                    </div>
                </div>
                <div class="unit-price">
                    <div class="price" style="cursor: pointer; font-size: 1.2rem;" onclick="openPrice('${u.name}', '${u.price}', '${u.type}')">Consultar Precio</div>
                    <span class="btn-ver" style="cursor: pointer;" onclick="openPlan('${u.plan}', '${u.name}', '${u.type}')">Ver Plano →</span>
                </div>
            </div>
        `;
        unitsGrid.appendChild(card);
    });
}

function openPlan(imgSrc, unitName, unitType) {
    const titleEl = document.getElementById('modal-plan-title');
    if (titleEl) titleEl.textContent = `${unitName} - ${unitType}`;
    document.getElementById('modal-plan-img').src = imgSrc;
    document.getElementById('plan-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlan() {
    document.getElementById('plan-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function openPrice(unitName, price, type) {
    document.getElementById('modal-price-name').textContent = `${unitName} - ${type}`;
    document.getElementById('modal-price-value').innerHTML = price + '<span style="display:block; font-size:0.75rem; color:#999; font-weight:400; margin-top:4px; letter-spacing:1px;">+ IVA</span>';
    document.getElementById('price-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePrice() {
    document.getElementById('price-modal').classList.remove('active');
    document.body.style.overflow = '';
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderUnits(e.target.dataset.filter);
    });
});

document.querySelectorAll('.modal-close, .modal-backdrop').forEach(el => {
    el.addEventListener('click', () => {
        closePlan();
        closePrice();
    });
});

renderUnits();

// Restore Preloader and Scroll Logic
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Fix modal close function name used in HTML
window.closeModals = function() {
    closePlan();
    closePrice();
};

// ===== CONTACT FORM via Silent Hidden Iframe =====
function sendContactForm(e) {
    // We DO NOT call e.preventDefault() so the browser submits natively to the hidden iframe!
    const name    = document.getElementById('contact-name').value.trim();
    const btn     = document.getElementById('btn-submit');
    const feedback = document.getElementById('form-feedback');

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Immediately trigger the beautiful, premium success visual feedback
    setTimeout(() => {
        btn.textContent = '¡Consulta Enviada!';
        btn.style.background = '#8B0000';
        btn.style.color = '#ffffff';
        feedback.style.display = 'block';
        feedback.style.color = '#2d7a4f';
        feedback.textContent = 'Gracias, ' + name + '. Le atenderemos a la mayor brevedad posible.';
        
        // Reset the form values safely
        setTimeout(() => {
            document.getElementById('contact-form').reset();
            btn.textContent = 'Enviar Consulta';
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
            feedback.style.display = 'none';
        }, 4000);
    }, 400);
}

// ===== INTERACTIVE BUILDING HOTSPOTS (mobile touch support) =====
document.addEventListener('DOMContentLoaded', function() {
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(function(hotspot) {
        hotspot.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = this.classList.contains('active');
            // Close all other hotspots
            hotspots.forEach(h => h.classList.remove('active'));
            // Toggle this one
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
    
    // Close hotspot tooltips when clicking outside
    document.addEventListener('click', function() {
        hotspots.forEach(h => h.classList.remove('active'));
    });
});
