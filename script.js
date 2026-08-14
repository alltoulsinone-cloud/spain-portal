// ============================================================
// 1. الترجمات (نفس السابق مع إضافات للوحة التحكم)
// ============================================================
const translations = {
    es: {
        nav_home: "Inicio",
        nav_info: "Información",
        nav_gallery: "Galería",
        nav_dashboard: "Mi cuenta",
        nav_contact: "Contacto",
        badge: "+500 Contratos activos 2026",
        hero_title: "Empleo industrial en España",
        hero_sub: "Plataforma oficial para trabajadores marroquíes. Busca tu solicitud o accede a tu contrato con usuario y contraseña.",
        search_title: "Consultar solicitud",
        input_placeholder: "Ej: ESP-2026-001",
        search_btn: "Buscar",
        examples_title: "📋 Ejemplos para probar:",
        stat_applied: "Solicitudes",
        stat_accepted: "Contratos",
        stat_companies: "Empresas",
        stat_days: "Días respuesta",
        benefits_title: "🌱 Ventajas del programa",
        benefits_subtitle: "Todo lo que necesitas para una experiencia laboral segura y exitosa",
        benefit_1_title: "Contratos oficiales",
        benefit_1_desc: "Avalados por el Ministerio de Trabajo español, con salarios justos y protección social.",
        benefit_2_title: "Capacitación continua",
        benefit_2_desc: "Cursos gratuitos antes y durante el empleo para mejorar tus habilidades.",
        benefit_3_title: "Asesoría legal",
        benefit_3_desc: "Acompañamiento en visados, residencia y derechos laborales.",
        benefit_4_title: "Calidad de vida",
        benefit_4_desc: "Alojamiento digno, seguro médico y entorno multicultural.",
        login_title: "🔐 Acceso a tu contrato",
        login_sub: "Introduce tus credenciales para ver todos los detalles de tu contrato",
        login_btn: "Iniciar sesión",
        demo_hint: "👥 Usuarios de prueba: reception_girl / 1234  |  admin / admin",
        contract_id: "Nº contrato",
        contract_employer: "Empresa",
        contract_location: "Ubicación",
        contract_start: "Inicio",
        contract_end: "Fin",
        contract_salary: "Salario (mes)",
        contract_hours: "Horas semanales",
        contract_benefits: "Beneficios",
        contract_contact: "Contacto emergencia",
        gallery_title: "📸 Galería industrial",
        gallery_subtitle: "Imágenes de los centros de trabajo y alojamientos",
        contact_title: "¿Necesitas ayuda?",
        contact_desc: "Soporte 24/7 para trabajadores",
        footer_desc: "Portal industrial de empleo entre España y Marruecos",
        footer_links: "Enlaces",
        footer_text: "© 2026 IndusRecruit. Todos los derechos reservados.",
        footer_support: "📞 +34 900 123 456 | ✉️ contratos@indusrecruit.es",
        not_found: "❌ No se encontró ninguna solicitud con ese número.",
        status_accepted: "✅ ¡FELICIDADES! Tu solicitud ha sido ACEPTADA.",
        status_pending: "⏳ Tu solicitud está en revisión.",
        status_rejected: "⚠️ Lo sentimos, tu solicitud no ha sido aceptada.",
        accepted_msg: "Próximamente recibirás información sobre el viaje.",
        pending_msg: "Agradecemos tu paciencia. El proceso sigue abierto.",
        rejected_msg: "Puedes solicitar más detalles a través del correo oficial."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_info: "معلومات",
        nav_gallery: "معرض الصور",
        nav_dashboard: "حسابي",
        nav_contact: "اتصل بنا",
        badge: "+500 عقد نشط 2026",
        hero_title: "التوظيف الصناعي في إسبانيا",
        hero_sub: "منصة رسمية للعمال المغاربة. ابحث عن طلبك أو ادخل إلى عقدك باستخدام اسم المستخدم وكلمة المرور.",
        search_title: "استعلام عن طلبك",
        input_placeholder: "مثال: ESP-2026-001",
        search_btn: "بحث",
        examples_title: "📋 أمثلة للتجربة:",
        stat_applied: "طلبات مقدمة",
        stat_accepted: "عقود مقبولة",
        stat_companies: "شركات شريكة",
        stat_days: "أيام للرد",
        benefits_title: "🌱 مزايا البرنامج",
        benefits_subtitle: "كل ما تحتاجه لتجربة عمل آمنة وناجحة",
        benefit_1_title: "عقود رسمية",
        benefit_1_desc: "مصدقة من وزارة العمل الإسبانية، مع رواتب عادلة وحماية اجتماعية.",
        benefit_2_title: "تدريب مستمر",
        benefit_2_desc: "دورات مجانية قبل وأثناء العمل لتطوير مهاراتك.",
        benefit_3_title: "استشارات قانونية",
        benefit_3_desc: "مرافقة في التأشيرات والإقامة وحقوق العمل.",
        benefit_4_title: "جودة الحياة",
        benefit_4_desc: "سكن لائق، تأمين صحي، وبيئة متعددة الثقافات.",
        login_title: "🔐 الوصول إلى عقدك",
        login_sub: "أدخل بياناتك لمشاهدة كل تفاصيل عقدك",
        login_btn: "تسجيل الدخول",
        demo_hint: "👥 مستخدمون تجريبيون: reception_girl / 1234  |  admin / admin",
        contract_id: "رقم العقد",
        contract_employer: "الشركة",
        contract_location: "الموقع",
        contract_start: "تاريخ البدء",
        contract_end: "تاريخ الانتهاء",
        contract_salary: "الراتب (شهرياً)",
        contract_hours: "ساعات أسبوعياً",
        contract_benefits: "المزايا",
        contract_contact: "جهة اتصال للطوارئ",
        gallery_title: "📸 معرض صناعي",
        gallery_subtitle: "صور من مراكز العمل والسكن",
        contact_title: "هل تحتاج مساعدة؟",
        contact_desc: "دعم 24/7 للعمال",
        footer_desc: "البوابة الصناعية للتوظيف بين إسبانيا والمغرب",
        footer_links: "روابط",
        footer_text: "© 2026 إندس ريكروت. جميع الحقوق محفوظة.",
        footer_support: "📞 34 900 123 456+ | ✉️ contratos@indusrecruit.es",
        not_found: "❌ لم يتم العثور على طلب بهذا الرقم.",
        status_accepted: "✅ مبروك! تم قبول طلبك.",
        status_pending: "⏳ طلبك قيد المراجعة.",
        status_rejected: "⚠️ عذراً، لم يتم قبول طلبك.",
        accepted_msg: "ستصلك قريباً معلومات عن السفر.",
        pending_msg: "نشكر صبرك. العملية مستمرة.",
        rejected_msg: "يمكنك طلب التفاصيل عبر البريد الرسمي."
    }
};

let currentLang = 'es';

// ============================================================
// 2. البيانات التجريبية (للطلب العام)
// ============================================================
const demoApplications = {
    "ESP-2026-001": { status: "accepted", name_es: "Ahmed Benjelloun", name_ar: "أحمد بنجلون", id_number: "AB789012", position: "Recolector de fresas", location: "Huelva", start_date: "01.06.2026" },
    "ESP-2026-002": { status: "pending", name_es: "Fatima Zahra", name_ar: "فاطمة الزهراء", id_number: "FZ345678", position: "Agricultora", location: "Murcia" },
    "ESP-2026-003": { status: "rejected", name_es: "Youssef El Mansouri", name_ar: "يوسف المنصوري", id_number: "YM901234" }
};

// ============================================================
// 3. بيانات المستخدمين للدخول (مع عقود مفصلة)
// ============================================================
const users = {
    "reception_girl": {
        password: "1234",
        contract: {
            id: "HOT-2026-088",
            name: "María López García",
            position: "Recepcionista de hotel",
            avatar: "https://i.pravatar.cc/150?img=5",
            employer: "Hotel Bahía del Sol ****",
            location: "Benalmádena, Málaga",
            start: "01.05.2026",
            end: "31.10.2026 (temporada)",
            salary: "1.450 € + bonos",
            hours: "39 h/semana",
            benefits: "Seguro médico, alojamiento compartido, comidas, formación en idiomas",
            contact: "Sra. Elena Ruiz - +34 600 111 222"
        }
    },
    "admin": {
        password: "admin",
        contract: {
            id: "ADM-2026-001",
            name: "Administrador del sistema",
            position: "Supervisor de contratos",
            avatar: "https://i.pravatar.cc/150?img=3",
            employer: "IndusRecruit S.L.",
            location: "Madrid, España",
            start: "01.01.2026",
            end: "31.12.2026 (indefinido)",
            salary: "2.800 €",
            hours: "40 h/semana",
            benefits: "Seguro privado, coche de empresa, bonos anuales",
            contact: "RRHH - +34 900 000 000"
        }
    }
};

// ============================================================
// 4. وظائف مشتركة
// ============================================================
function updateLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.getAttribute('data-key') === 'input_placeholder') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'BUTTON' && el.getAttribute('data-key') === 'search_btn') {
                const span = el.querySelector('span');
                if (span) span.innerText = translations[lang][key];
            } else if (el.tagName === 'BUTTON' && el.getAttribute('data-key') === 'login_btn') {
                const span = el.querySelector('span');
                if (span) span.innerText = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'es';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    currentLang = lang;
}

function showToast(msg, type='success') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    t.style.background = type==='success' ? '#2ecc71' : type==='error' ? '#e74c3c' : '#f39c12';
    setTimeout(() => t.classList.add('hidden'), 3500);
}

function displayResult(appId) {
    const resultDiv = document.getElementById('resultBox');
    const app = demoApplications[appId];
    if (!app) {
        resultDiv.innerHTML = `<p>${translations[currentLang].not_found}</p>`;
        resultDiv.className = 'result-box';
        showToast(translations[currentLang].not_found, 'error');
        return;
    }
    const statusText = translations[currentLang]['status_'+app.status];
    const msg = translations[currentLang][app.status+'_msg'];
    const name = currentLang === 'ar' ? app.name_ar : app.name_es;
    let cls = app.status;
    let details = `<strong>📌 ID:</strong> ${app.id_number || '---'}`;
    if (app.position) details += `<br><strong>${currentLang==='ar'?'المنصب':'Puesto'}:</strong> ${app.position}`;
    if (app.location) details += `<br><strong>${currentLang==='ar'?'الموقع':'Ubicación'}:</strong> ${app.location}`;
    if (app.start_date) details += `<br><strong>${currentLang==='ar'?'تاريخ البدء':'Fecha inicio'}:</strong> ${app.start_date}`;
    resultDiv.innerHTML = `<h3>${name}</h3><p><strong>${statusText}</strong></p><p>${msg}</p><div style="margin-top:12px;border-top:1px solid rgba(0,0,0,0.1);padding-top:12px;">${details}</div>`;
    resultDiv.className = `result-box ${cls}`;
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// 5. عدادات متحركة
// ============================================================
function animateCounter(el, target) {
    let cur = 0, step = target/50;
    const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { el.textContent = target; clearInterval(timer); }
        else el.textContent = Math.floor(cur);
    }, 20);
}
function handleScroll() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('scrolled', window.scrollY>50);
    const stats = document.querySelector('.stats-section');
    if (stats && !stats.dataset.animated) {
        const rect = stats.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            stats.dataset.animated = 'true';
            document.querySelectorAll('.counter').forEach(c => {
                animateCounter(c, parseInt(c.dataset.target));
            });
        }
    }
}

// ============================================================
// 6. الرسم البياني الشريطي (Bar Chart)
// ============================================================
function renderBarChart() {
    const data = [
        { label: 'Agricultura', value: 45 },
        { label: 'Hostelería', value: 30 },
        { label: 'Construcción', value: 20 },
        { label: 'Tecnología', value: 15 },
        { label: 'Otros', value: 10 }
    ];
    const container = document.getElementById('barChart');
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
        // بعد 0.5s نحرك العرض
        setTimeout(() => { fill.style.width = item.value + '%'; }, 500);
    });
}

// ============================================================
// 7. وظائف الدخول والخروج وعرض لوحة التحكم
// ============================================================
function login(username, password) {
    const user = users[username];
    if (!user || user.password !== password) {
        document.getElementById('loginError').textContent = '❌ ' + (currentLang==='ar'?'بيانات دخول خاطئة':'Credenciales incorrectas');
        document.getElementById('loginError').classList.remove('hidden');
        return false;
    }
    document.getElementById('loginError').classList.add('hidden');
    // عرض لوحة التحكم
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboardContent').classList.remove('hidden');
    // ملء البيانات
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
    // رسم المخططات
    renderBarChart();
    // تحديث الرابط "Mi cuenta" للإشارة إلى لوحة التحكم
    showToast(currentLang==='ar'?'تم تسجيل الدخول بنجاح':'Login exitoso', 'success');
    return true;
}

function logout() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('dashboardContent').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    showToast(currentLang==='ar'?'تم تسجيل الخروج':'Sesión cerrada', 'info');
}

// ============================================================
// 8. تحميل الصفحة وإعداد الأحداث
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // اللغة
    updateLanguage('es');

    // أزرار اللغة
    document.getElementById('btn-es').addEventListener('click', () => { updateLanguage('es'); });
    document.getElementById('btn-ar').addEventListener('click', () => { updateLanguage('ar'); });

    // بحث عام
    document.getElementById('searchBtn').addEventListener('click', () => {
        const id = document.getElementById('applicationId').value.trim();
        if (!id) { showToast(currentLang==='ar'?'أدخل رقم الطلب':'Introduce un número', 'error'); return; }
        displayResult(id);
    });
    document.getElementById('applicationId').addEventListener('keypress', e => {
        if (e.key === 'Enter') document.getElementById('searchBtn').click();
    });
    document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('applicationId').value = this.dataset.code;
            document.getElementById('searchBtn').click();
        });
    });

    // زر التمرير
    document.querySelector('.scroll-down')?.addEventListener('click', () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    });

    // نموذج الاتصال
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast(currentLang==='ar'?'تم إرسال رسالتك':'Mensaje enviado', 'success');
        this.reset();
    });

    // زر تسجيل الدخول
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        if (!username || !password) {
            showToast(currentLang==='ar'?'أدخل اسم المستخدم وكلمة المرور':'Ingresa usuario y contraseña', 'error');
            return;
        }
        login(username, password);
    });
    // السماح بالدخول بالضغط على Enter
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') document.getElementById('loginBtn').click();
    });

    // زر الخروج
    document.getElementById('logoutBtn').addEventListener('click', logout);

    // رابط "Mi cuenta" في النافبار – عند النقر يمرر إلى قسم الداشبورد
    document.getElementById('dashboardLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
    });

    // مراقبة التمرير للعدادات
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // القائمة المتنقلة
    document.querySelector('.mobile-menu')?.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('show');
    });

    // إذا كان هناك جلسة مفتوحة (localStorage) يمكن إعادة تسجيل الدخول تلقائياً
    // لكننا نتركها يدوية.
});
