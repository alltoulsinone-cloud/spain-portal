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
