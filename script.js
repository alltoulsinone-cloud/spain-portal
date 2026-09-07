console.log('🚀 IndusRecruit Pro cargado.');

// ============================================================
// 1. TRADUCCIONES
// ============================================================
const translations = {
    es: {
        nav_home: "Inicio", nav_jobs: "Ofertas", nav_apply: "Postular", nav_dashboard: "Mi cuenta", nav_contact: "Contacto",
        badge: "+500 Contratos activos 2026",
        hero_title: "Empleo industrial en España",
        hero_sub: "Plataforma oficial para trabajadores marroquíes. Busca ofertas, postula y sigue tu contrato.",
        search_title: "Consultar solicitud", input_placeholder: "HM-MAR-2026-099", search_btn: "Buscar",
        stat_applied: "Solicitudes", stat_accepted: "Contratos", stat_companies: "Empresas", stat_pending: "Pendientes",
        jobs_title: "💼 Ofertas de trabajo activas", jobs_sub: "Selecciona una oferta y postula ahora mismo",
        apply_title: "📝 Postular a una oferta", apply_sub: "Completa los 3 pasos para enviar tu solicitud",
        step_personal: "Personal", step_professional: "Profesional", step_documents: "Documentos",
        step_personal_title: "📌 Datos personales", step_professional_title: "💼 Experiencia y habilidades",
        step_documents_title: "📎 Documentos y motivación",
        label_name: "Nombre completo", label_passport: "Nº Pasaporte", label_birth: "Fecha nacimiento",
        label_phone: "Teléfono", label_email: "Email", label_city: "Ciudad (Marruecos)",
        label_experience: "Años de experiencia", label_education: "Nivel educativo",
        edu_basic: "Básico", edu_media: "Secundaria", edu_superior: "Superior / Universidad",
        label_languages: "Idiomas (marca los que hablas)",
        label_job_select: "Oferta a la que postulas", label_cv: "Sube tu CV",
        label_motivation: "Carta de motivación",
        next_btn: "Siguiente →", prev_btn: "← Anterior", submit_final: "📨 Enviar solicitud",
        apply_success_title: "¡Solicitud enviada con éxito!",
        apply_success_msg: "Hemos recibido tus datos. Recibirás un correo de confirmación en 24h.",
        apply_ref: "Tu número de referencia:",
        login_title: "🔐 Acceso a tu contrato", login_sub: "Introduce tus credenciales",
        login_btn: "Iniciar sesión",
        contract_id: "Nº contrato", contract_employer: "Empresa", contract_location: "Ubicación trabajo",
        contract_start: "Inicio", contract_end: "Fin", contract_salary: "Salario",
        contract_hours: "Horas", contract_benefits: "Beneficios", contract_contact: "Contacto",
        contract_birth: "Fecha nacimiento", contract_address: "Dirección (Marruecos)", contract_id_number: "Nº Identificación",
        stat_status: "Estado",
        gallery_title: "📸 Galería industrial", gallery_subtitle: "Imágenes de los centros de trabajo",
        contact_title: "¿Necesitas ayuda?", contact_desc: "Soporte 24/7",
        footer_desc: "Portal industrial de empleo", footer_links: "Enlaces",
        footer_text: "© 2026 IndusRecruit. Todos los derechos reservados.",
        footer_support: "📞 +34 900 123 456 | ✉️ contratos@indusrecruit.es",
        not_found: "❌ No se encontró ninguna solicitud.",
        status_accepted: "✅ Aceptada", status_pending: "⏳ Pendiente", status_rejected: "❌ Rechazada",
        accepted_msg: "Próximamente recibirás información.", pending_msg: "Agradecemos tu paciencia.",
        rejected_msg: "Contacta con la oficina."
    },
    ar: {
        nav_home: "الرئيسية", nav_jobs: "الوظائف", nav_apply: "تقديم", nav_dashboard: "حسابي", nav_contact: "اتصل",
        badge: "+500 عقد نشط 2026",
        hero_title: "التوظيف الصناعي في إسبانيا",
        hero_sub: "منصة رسمية للعمال المغاربة. ابحث عن عروض، تقدم، وتابع عقدك.",
        search_title: "استعلام عن طلبك", input_placeholder: "HM-MAR-2026-099", search_btn: "بحث",
        stat_applied: "طلبات", stat_accepted: "عقود", stat_companies: "شركات", stat_pending: "قيد الانتظار",
        jobs_title: "💼 عروض عمل نشطة", jobs_sub: "اختر عرضاً وتقدم الآن",
        apply_title: "📝 التقديم على عرض", apply_sub: "أكمل الخطوات الثلاث لإرسال طلبك",
        step_personal: "شخصي", step_professional: "مهني", step_documents: "مستندات",
        step_personal_title: "📌 البيانات الشخصية", step_professional_title: "💼 الخبرة والمهارات",
        step_documents_title: "📎 المستندات والرسالة",
        label_name: "الاسم الكامل", label_passport: "رقم جواز السفر", label_birth: "تاريخ الميلاد",
        label_phone: "الهاتف", label_email: "البريد الإلكتروني", label_city: "المدينة (المغرب)",
        label_experience: "سنوات الخبرة", label_education: "المستوى التعليمي",
        edu_basic: "أساسي", edu_media: "ثانوي", edu_superior: "جامعي / عالي",
        label_languages: "اللغات (اختر ما تتحدثه)",
        label_job_select: "العرض الذي تتقدم إليه", label_cv: "تحميل السيرة الذاتية",
        label_motivation: "رسالة تحفيزية",
        next_btn: "التالي →", prev_btn: "← السابق", submit_final: "📨 إرسال الطلب",
        apply_success_title: "!تم إرسال طلبك بنجاح",
        apply_success_msg: "لقد استلمنا بياناتك. ستتوصل برسالة تأكيد خلال 24 ساعة.",
        apply_ref: "رقم مرجعي:",
        login_title: "🔐 الوصول إلى عقدك", login_sub: "أدخل بياناتك لمشاهدة التفاصيل",
        login_btn: "تسجيل الدخول",
        contract_id: "رقم العقد", contract_employer: "الشركة", contract_location: "موقع العمل",
        contract_start: "البدء", contract_end: "الانتهاء", contract_salary: "الراتب",
        contract_hours: "الساعات", contract_benefits: "المزايا", contract_contact: "جهة الاتصال",
        contract_birth: "تاريخ الميلاد", contract_address: "العنوان (المغرب)", contract_id_number: "رقم التعريف",
        stat_status: "الحالة",
        gallery_title: "📸 معرض صناعي", gallery_subtitle: "صور من مراكز العمل والسكن",
        contact_title: "هل تحتاج مساعدة؟", contact_desc: "دعم 24/7",
        footer_desc: "البوابة الصناعية للتوظيف", footer_links: "روابط",
        footer_text: "© 2026 إندس ريكروت. جميع الحقوق محفوظة.",
        footer_support: "📞 34 900 123 456+ | ✉️ contratos@indusrecruit.es",
        not_found: "❌ لم يتم العثور على طلب.",
        status_accepted: "✅ مقبول", status_pending: "⏳ قيد المراجعة", status_rejected: "❌ مرفوض",
        accepted_msg: "ستصلك معلومات قريباً.", pending_msg: "نشكر صبرك.",
        rejected_msg: "تواصل مع المكتب."
    }
};
let currentLang = 'es';

// ============================================================
// 2. 🟢🔵🔴 ====== EMPLEADOS (SOLO LOS REALES) ======
// ============================================================

const employees = {
    // ============================================================
    // ✅ HAJAR ELMAKHFI - RECEPCIONISTA
    // ============================================================
    "hajar": {
        password: "elmakhfi",
        contract: {
            id: "HM-MAR-2026-099",
            name: "Hajar Elmakhfi",
            position: "Agente de recepción",
            avatar: "https://raw.githubusercontent.com/alltoulsinone-cloud/spain-portal/main/girl1.PNG",
            employer: "Hotel Royal Azrou ****",
            location: "Benalmádena, Málaga, España",  // ← Ubicación del trabajo en España
            start: "14.01.2027",
            end: "14.01.2032 (5 años)",
            salary: "2.800 € / mes",
            hours: "40 h/semana",
            benefits: "Seguro médico privado, alojamiento, comidas, formación en idiomas, transporte",
            contact: "Sr. Ahmed Benjelloun - +34 600 222 333",
            birth: "27.02.2006",
            address: "AZROU IFRANE, Maroc",           // ← Dirección en Marruecos
            id_number: "DA108522"
        }
    },

    // ============================================================
    // ✅ ADMIN (NO BORRAR)
    // ============================================================
    "admin": {
        password: "admin",
        contract: null
    }
    // ============================================================
    // 📝 PARA AÑADIR MÁS EMPLEADOS EN EL FUTURO:
    // ============================================================
};

// ============================================================
// 3. OFERTAS DE TRABAJO
// ============================================================
const jobOffers = [
    { 
        id: 1, 
        title_es: "Recolector de fresas", 
        title_ar: "قاطع فراولة", 
        company: "Fresas del Sur S.L.", 
        location: "Huelva, España", 
        salary: "1.200€ + bonus", 
        duration: "6 meses", 
        sector: "agricultura" 
    },
    { 
        id: 2, 
        title_es: "Recepcionista de hotel", 
        title_ar: "موظفة استقبال فندق", 
        company: "Hotel Royal Azrou ****", 
        location: "Benalmádena, Málaga, España", 
        salary: "2.800 €", 
        duration: "5 años", 
        sector: "hosteleria" 
    },
    { 
        id: 3, 
        title_es: "Ayudante de construcción", 
        title_ar: "مساعد بناء", 
        company: "Construcciones Metálicas S.A.", 
        location: "Madrid, España", 
        salary: "1.600€", 
        duration: "1 año", 
        sector: "construccion" 
    },
    { 
        id: 4, 
        title_es: "Desarrollador web junior", 
        title_ar: "مطور ويب مبتدئ", 
        company: "TechSolutions", 
        location: "Barcelona, España", 
        salary: "2.100€", 
        duration: "Indefinido", 
        sector: "tecnologia" 
    },
    { 
        id: 5, 
        title_es: "Operario de logística", 
        title_ar: "عامل لوجستيك", 
        company: "LogiStar", 
        location: "Valencia, España", 
        salary: "1.350€", 
        duration: "9 meses", 
        sector: "logistica" 
    }
];

// ============================================================
// 4. 🚫 NO HAY DEMO APPLICATIONS (ELIMINADAS COMPLETAMENTE)
// ============================================================
// demoApplications = {};  // Vacío, sin ejemplos

// ============================================================
// 5. LOCALSTORAGE para aplicaciones
// ============================================================
let applications = JSON.parse(localStorage.getItem('indus_applications')) || [];

function saveApplications() {
    localStorage.setItem('indus_applications', JSON.stringify(applications));
}

// ============================================================
// 6. FUNCIONES PRINCIPALES
// ============================================================
function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.getAttribute('data-key') === 'input_placeholder') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'BUTTON' && (key === 'search_btn' || key === 'login_btn' || key === 'submit_final' || key === 'next_btn' || key === 'prev_btn')) {
                const span = el.querySelector('span');
                if (span) span.innerText = translations[lang][key];
                else el.innerText = translations[lang][key];
            } else if (el.tagName === 'OPTION') {
                // handled in updateSelectOptions
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    updateSelectOptions();
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'es';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-switch button').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });
    renderJobs();
}

function updateSelectOptions() {
    document.querySelectorAll('#education option').forEach(opt => {
        const key = opt.value === 'basico' ? 'edu_basic' : opt.value === 'media' ? 'edu_media' : 'edu_superior';
        if (translations[currentLang] && translations[currentLang][key]) {
            opt.innerText = translations[currentLang][key];
        }
    });
    const jobSelect = document.getElementById('jobSelect');
    if (jobSelect) {
        const currentVal = jobSelect.value;
        jobSelect.innerHTML = `<option value="">-- ${translations[currentLang]['label_job_select'] || 'Selecciona'} --</option>`;
        jobOffers.forEach(job => {
            const opt = document.createElement('option');
            opt.value = job.id;
            const title = currentLang === 'ar' ? job.title_ar : job.title_es;
            opt.textContent = `${title} - ${job.company}`;
            jobSelect.appendChild(opt);
        });
        jobSelect.value = currentVal;
    }
}

function showToast(msg, type = 'success') {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('hidden');
    const colors = { success: '#2ecc71', error: '#e74c3c', info: '#f39c12' };
    t.style.background = colors[type] || colors.success;
    t.style.color = '#0a0f1a';
    setTimeout(() => t.classList.add('hidden'), 4000);
}

// ===== JOBS =====
function renderJobs() {
    const grid = document.getElementById('jobsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    jobOffers.forEach(job => {
        const title = currentLang === 'ar' ? job.title_ar : job.title_es;
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="badge">${job.sector}</div>
            <h3>${title}</h3>
            <div class="company">${job.company}</div>
            <div class="details">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-euro-sign"></i> ${job.salary}</span>
                <span><i class="fas fa-clock"></i> ${job.duration}</span>
            </div>
            <button class="apply-btn" data-id="${job.id}"><i class="fas fa-paper-plane"></i> ${translations[currentLang]['nav_apply'] || 'Postular'}</button>
        `;
        grid.appendChild(card);
    });
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const jobId = parseInt(this.dataset.id);
            const job = jobOffers.find(j => j.id === jobId);
            if (job) {
                const select = document.getElementById('jobSelect');
                if (select) select.value = jobId;
                document.getElementById('apply-section').scrollIntoView({ behavior: 'smooth' });
                goToStep(1);
            }
        });
    });
}

// ===== MULTI-STEP FORM =====
let currentStep = 1;

function goToStep(step) {
    currentStep = step;
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    const target = document.getElementById('step' + step);
    if (target) target.classList.add('active');
    document.querySelectorAll('.step-indicator').forEach((ind, idx) => {
        ind.classList.toggle('active', idx + 1 <= step);
    });
    const fill = document.getElementById('stepLineFill');
    if (fill) fill.style.width = ((step - 1) / 2 * 100) + '%';
}

function setupForm() {
    document.querySelectorAll('[data-next]').forEach(btn => {
        btn.addEventListener('click', function() {
            const next = parseInt(this.dataset.next);
            if (currentStep === 1) {
                const name = document.getElementById('fullName').value.trim();
                const passport = document.getElementById('passport').value.trim();
                const phone = document.getElementById('phone').value.trim();
                if (!name || !passport || !phone) {
                    showToast(translations[currentLang]['label_name'] + ' y ' + translations[currentLang]['label_phone'] + ' son obligatorios', 'error');
                    return;
                }
            }
            if (currentStep === 2) {
                const job = document.getElementById('jobSelect').value;
                if (!job) {
                    showToast(translations[currentLang]['label_job_select'] + ' es obligatorio', 'error');
                    return;
                }
            }
            goToStep(next);
        });
    });
    document.querySelectorAll('[data-prev]').forEach(btn => {
        btn.addEventListener('click', function() {
            const prev = parseInt(this.dataset.prev);
            goToStep(prev);
        });
    });

    document.getElementById('applyForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fullName').value.trim();
        const passport = document.getElementById('passport').value.trim();
        const birth = document.getElementById('birthDate').value;
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const city = document.getElementById('city').value.trim();
        const experience = document.getElementById('experience').value || 0;
        const education = document.getElementById('education').value;
        const langs = [...document.querySelectorAll('.langCheck:checked')].map(el => el.value);
        const jobId = parseInt(document.getElementById('jobSelect').value);
        const job = jobOffers.find(j => j.id === jobId);
        const motivation = document.getElementById('motivation').value.trim();

        if (!name || !passport || !phone || !jobId) {
            showToast('Faltan datos obligatorios', 'error');
            return;
        }

        const ref = 'APP-' + Date.now().toString().slice(-6);
        const newApp = {
            ref: ref,
            name: name,
            passport: passport,
            birth: birth,
            phone: phone,
            email: email,
            city: city,
            experience: experience,
            education: education,
            languages: langs,
            jobId: jobId,
            jobTitle: job ? (currentLang === 'ar' ? job.title_ar : job.title_es) : 'Unknown',
            motivation: motivation,
            status: 'pending',
            appliedAt: new Date().toISOString()
        };
        applications.push(newApp);
        saveApplications();

        document.getElementById('applySuccess').classList.remove('hidden');
        document.getElementById('refNumber').textContent = ref;
        document.getElementById('applyForm').reset();
        updateStats();

        setTimeout(() => {
            document.getElementById('apply-section').scrollIntoView({ behavior: 'smooth' });
        }, 500);
        showToast(translations[currentLang]['apply_success_title'] || 'Enviado!', 'success');
    });
}

// ===== SEARCH (SOLO APLICACIONES REALES) =====
function displayResult(appId) {
    const resultDiv = document.getElementById('resultBox');
    if (!resultDiv) return;
    // Buscar solo en aplicaciones reales (no hay demo)
    let app = applications.find(a => a.ref === appId);
    if (!app) {
        resultDiv.innerHTML = `<p>${translations[currentLang].not_found}</p>`;
        resultDiv.className = 'result-box';
        showToast(translations[currentLang].not_found, 'error');
        return;
    }
    const statusText = translations[currentLang]['status_' + app.status] || app.status;
    const msg = translations[currentLang][app.status + '_msg'] || '';
    const name = app.name || 'Unknown';
    let details = `<strong>📌 Ref:</strong> ${app.ref}`;
    if (app.jobTitle) details += `<br><strong>${currentLang==='ar'?'المنصب':'Puesto'}:</strong> ${app.jobTitle}`;
    if (app.city) details += `<br><strong>${currentLang==='ar'?'المدينة':'Ciudad'}:</strong> ${app.city}`;
    resultDiv.innerHTML = `<h3>${name}</h3><p><strong>${statusText}</strong></p><p>${msg}</p><div style="margin-top:12px;border-top:1px solid rgba(255,255,255,0.1);padding-top:12px;">${details}</div>`;
    resultDiv.className = `result-box ${app.status}`;
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== STATS (SOLO APLICACIONES REALES) =====
function updateStats() {
    const total = applications.length;
    const accepted = applications.filter(a => a.status === 'accepted').length;
    const pending = applications.filter(a => a.status === 'pending').length;
    const companies = new Set([...jobOffers.map(j => j.company), ...applications.map(a => a.jobTitle)]).size;
    document.getElementById('totalApps').textContent = total || 0;
    document.getElementById('totalAccepted').textContent = accepted || 0;
    document.getElementById('totalPending').textContent = pending || 0;
    document.getElementById('totalCompanies').textContent = companies || jobOffers.length;
}

// ===== DASHBOARD / LOGIN =====
function renderAdminTable() {
    const tbody = document.getElementById('adminTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    // Solo aplicaciones reales
    applications.forEach(app => {
        const tr = document.createElement('tr');
        const name = app.name || 'N/A';
        const statusClass = 'status-' + app.status;
        const statusText = translations[currentLang]['status_' + app.status] || app.status;
        tr.innerHTML = `
            <td><strong>${app.ref}</strong></td>
            <td>${name}</td>
            <td>${app.jobTitle || 'N/A'}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>
                <button class="action-btn" onclick="changeStatus('${app.ref}', 'accepted')">✅</button>
                <button class="action-btn" onclick="changeStatus('${app.ref}', 'pending')">⏳</button>
                <button class="action-btn" onclick="changeStatus('${app.ref}', 'rejected')">❌</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function changeStatus(ref, newStatus) {
    let app = applications.find(a => a.ref === ref);
    if (app) {
        app.status = newStatus;
        saveApplications();
        showToast(`Estado cambiado a ${newStatus}`, 'info');
        renderAdminTable();
        updateStats();
        return;
    }
    showToast('Solicitud no encontrada', 'error');
}

function login(username, password) {
    const cleanUser = username.toLowerCase().trim();
    const user = employees[cleanUser];
    if (!user || user.password !== password) {
        const err = document.getElementById('loginError');
        if (err) { err.textContent = '❌ ' + (currentLang === 'ar' ? 'بيانات دخول خاطئة' : 'Credenciales incorrectas'); err.classList.remove('hidden'); }
        return false;
    }
    document.getElementById('loginError').classList.add('hidden');
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboardContent').classList.remove('hidden');

    if (cleanUser === 'admin') {
        document.getElementById('adminPanel').classList.remove('hidden');
        document.getElementById('contractPanel').classList.add('hidden');
        renderAdminTable();
        document.getElementById('userFullName').textContent = 'Administrador';
        document.getElementById('userPosition').textContent = 'Supervisor de contratos';
        document.getElementById('userAvatar').src = 'https://i.pravatar.cc/150?img=3';
        showToast('Bienvenido Admin', 'success');
        return true;
    }

    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('contractPanel').classList.remove('hidden');
    const c = user.contract;
    document.getElementById('userAvatar').src = c.avatar;
    document.getElementById('userFullName').textContent = c.name;
    document.getElementById('userPosition').textContent = c.position;
    document.getElementById('contractId').textContent = c.id;
    document.getElementById('contractEmployer').textContent = c.employer;
    document.getElementById('contractLocation').textContent = c.location;
    document.getElementById('contractStart').textContent = c.start;
    document.getElementById('contractEnd').textContent = c.end;
    document.getElementById('contractSalary').textContent = c.salary;
    document.getElementById('contractHours').textContent = c.hours;
    document.getElementById('contractBenefits').textContent = c.benefits;
    document.getElementById('contractContact').textContent = c.contact;
    
    // ✅ MOSTRAR DATOS ADICIONALES
    const birthElement = document.getElementById('contractBirth');
    const addressElement = document.getElementById('contractAddress');
    const idElement = document.getElementById('contractIdNumber');
    if (birthElement && c.birth) birthElement.textContent = c.birth;
    if (addressElement && c.address) addressElement.textContent = c.address;
    if (idElement && c.id_number) idElement.textContent = c.id_number;
    
    renderBarChart();
    showToast('Bienvenido ' + c.name, 'success');
    return true;
}

function logout() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('dashboardContent').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    showToast(currentLang === 'ar' ? 'تم تسجيل الخروج' : 'Sesión cerrada', 'info');
}

function renderBarChart() {
    const container = document.getElementById('barChart');
    if (!container) return;
    const data = [
        { label: 'Agricultura', value: 45 },
        { label: 'Hostelería', value: 30 },
        { label: 'Construcción', value: 20 },
        { label: 'Tecnología', value: 15 },
        { label: 'Otros', value: 10 }
    ];
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'bar-item';
        const span = document.createElement('span');
        span.textContent = item.label;
        const track = document.createElement('div');
        track.className = 'bar-track';
        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.width = '0%';
        track.appendChild(fill);
        div.appendChild(span);
        div.appendChild(track);
        container.appendChild(div);
        setTimeout(() => { fill.style.width = item.value + '%'; }, 400);
    });
}

// ============================================================
// 7. EVENTOS
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM listo.');

    document.getElementById('btn-es').addEventListener('click', () => updateLanguage('es'));
    document.getElementById('btn-ar').addEventListener('click', () => updateLanguage('ar'));

    document.getElementById('searchBtn').addEventListener('click', function() {
        const id = document.getElementById('applicationId').value.trim();
        if (!id) { showToast(currentLang === 'ar' ? 'أدخل رقم الطلب' : 'Introduce un número', 'error'); return; }
        displayResult(id);
    });
    document.getElementById('applicationId').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') document.getElementById('searchBtn').click();
    });

    document.querySelector('.scroll-down')?.addEventListener('click', () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    });

    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast(currentLang === 'ar' ? 'تم الإرسال' : 'Mensaje enviado', 'success');
        this.reset();
    });

    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        if (!username || !password) {
            showToast(currentLang === 'ar' ? 'أدخل البيانات' : 'Ingresa credenciales', 'error');
            return;
        }
        login(username, password);
    });
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') document.getElementById('loginBtn').click();
    });

    document.getElementById('logoutBtn').addEventListener('click', logout);

    document.getElementById('dashboardLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('mobileMenu').addEventListener('click', function() {
        document.getElementById('navLinks').classList.toggle('show');
    });

    updateLanguage('es');
    renderJobs();
    setupForm();
    updateStats();
    setTimeout(() => renderBarChart(), 300);

    window.changeStatus = changeStatus;

    console.log('🎯 IndusRecruit Pro listo.');
});
