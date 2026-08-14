<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portal Industrial de Empleo España-Marruecos</title>
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
</head>
<body>

    <!-- ===== NAVBAR ===== -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-industry"></i>
                <span>Indus<span class="highlight">Recruit</span></span>
            </div>
            <div class="nav-links">
                <a href="#home" class="nav-link active"><i class="fas fa-home"></i> <span data-key="nav_home">Inicio</span></a>
                <a href="#info" class="nav-link"><i class="fas fa-info-circle"></i> <span data-key="nav_info">Información</span></a>
                <a href="#gallery" class="nav-link"><i class="fas fa-images"></i> <span data-key="nav_gallery">Galería</span></a>
                <a href="#dashboard" class="nav-link" id="dashboardLink"><i class="fas fa-user-cog"></i> <span data-key="nav_dashboard">Mi cuenta</span></a>
                <a href="#contact" class="nav-link"><i class="fas fa-envelope"></i> <span data-key="nav_contact">Contacto</span></a>
            </div>
            <div class="lang-switch">
                <button id="btn-es" class="active" data-lang="es">🇪🇸 ES</button>
                <button id="btn-ar" data-lang="ar">🇲🇦 AR</button>
            </div>
            <div class="mobile-menu"><i class="fas fa-bars"></i></div>
        </div>
    </nav>

    <!-- ===== HERO / SEARCH ===== -->
    <section class="hero" id="home">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="floating-badge">
                <i class="fas fa-check-circle"></i>
                <span data-key="badge">+500 Contratos activos 2026</span>
            </div>
            <h1 data-key="hero_title">Empleo industrial <span class="gradient-text">en España</span></h1>
            <p data-key="hero_sub">Plataforma oficial para trabajadores marroquíes. Busca tu solicitud o accede a tu contrato con usuario y contraseña.</p>

            <!-- Buscador público -->
            <div class="search-card">
                <h3><i class="fas fa-search"></i> <span data-key="search_title">Consultar solicitud</span></h3>
                <div class="input-group">
                    <i class="fas fa-id-card input-icon"></i>
                    <input type="text" id="applicationId" placeholder="Ej: ESP-2026-001" data-key="input_placeholder" />
                    <button id="searchBtn" data-key="search_btn"><i class="fas fa-arrow-right"></i> <span>Buscar</span></button>
                </div>
                <div id="resultBox" class="result-box hidden"></div>
                <div class="search-examples">
                    <small data-key="examples_title">📋 Ejemplos para probar:</small>
                    <div class="example-buttons">
                        <button class="example-btn" data-code="ESP-2026-001">ESP-2026-001</button>
                        <button class="example-btn" data-code="ESP-2026-002">ESP-2026-002</button>
                        <button class="example-btn" data-code="ESP-2026-003">ESP-2026-003</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-down"><i class="fas fa-chevron-down"></i></div>
    </section>

    <!-- ===== STATS ===== -->
    <section class="stats-section" id="stats">
        <div class="container">
            <div class="stat-card"><i class="fas fa-file-signature"></i><div class="stat-info"><h3 class="counter" data-target="187">0</h3><p data-key="stat_applied">Solicitudes</p></div></div>
            <div class="stat-card"><i class="fas fa-check-circle"></i><div class="stat-info"><h3 class="counter" data-target="42">0</h3><p data-key="stat_accepted">Contratos</p></div></div>
            <div class="stat-card"><i class="fas fa-building"></i><div class="stat-info"><h3 class="counter" data-target="25">0</h3><p data-key="stat_companies">Empresas</p></div></div>
            <div class="stat-card"><i class="fas fa-clock"></i><div class="stat-info"><h3 class="counter" data-target="7">0</h3><p data-key="stat_days">Días respuesta</p></div></div>
        </div>
    </section>

    <!-- ===== BENEFITS ===== -->
    <section class="info-cards" id="info">
        <div class="container">
            <div class="section-header">
                <h2 data-key="benefits_title">🌱 Ventajas del programa</h2>
                <p data-key="benefits_subtitle">Todo lo que necesitas para una experiencia laboral segura y exitosa</p>
            </div>
            <div class="card-grid">
                <div class="card"><div class="card-icon"><i class="fas fa-file-contract"></i></div><h3 data-key="benefit_1_title">Contratos oficiales</h3><p data-key="benefit_1_desc">Avalados por el Ministerio de Trabajo español, con salarios justos y protección social.</p></div>
                <div class="card"><div class="card-icon"><i class="fas fa-user-graduate"></i></div><h3 data-key="benefit_2_title">Capacitación continua</h3><p data-key="benefit_2_desc">Cursos gratuitos antes y durante el empleo para mejorar tus habilidades.</p></div>
                <div class="card"><div class="card-icon"><i class="fas fa-handshake"></i></div><h3 data-key="benefit_3_title">Asesoría legal</h3><p data-key="benefit_3_desc">Acompañamiento en visados, residencia y derechos laborales.</p></div>
                <div class="card"><div class="card-icon"><i class="fas fa-umbrella-beach"></i></div><h3 data-key="benefit_4_title">Calidad de vida</h3><p data-key="benefit_4_desc">Alojamiento digno, seguro médico y entorno multicultural.</p></div>
            </div>
        </div>
    </section>

    <!-- ===== LOGIN / DASHBOARD ===== -->
    <section class="login-section" id="dashboard">
        <div class="container">
            <div class="section-header">
                <h2 data-key="login_title">🔐 Acceso a tu contrato</h2>
                <p data-key="login_sub">Introduce tus credenciales para ver todos los detalles de tu contrato</p>
            </div>
            <div class="login-dashboard-wrapper">
                <!-- Formulario de login -->
                <div id="loginForm" class="login-card">
                    <div class="login-icon"><i class="fas fa-user-lock"></i></div>
                    <div class="input-group-login">
                        <i class="fas fa-user"></i>
                        <input type="text" id="username" placeholder="Usuario" required />
                    </div>
                    <div class="input-group-login">
                        <i class="fas fa-key"></i>
                        <input type="password" id="password" placeholder="Contraseña" required />
                    </div>
                    <button id="loginBtn" class="btn-primary"><i class="fas fa-sign-in-alt"></i> <span data-key="login_btn">Iniciar sesión</span></button>
                    <div id="loginError" class="error-msg hidden"></div>
                    <p class="demo-hint" data-key="demo_hint">👥 Usuarios de prueba: reception_girl / 1234  |  admin / admin</p>
                </div>

                <!-- Dashboard (oculto hasta login) -->
                <div id="dashboardContent" class="dashboard-card hidden">
                    <div class="dashboard-header">
                        <div class="user-profile">
                            <img id="userAvatar" src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
                            <div>
                                <h2 id="userFullName">Nombre Usuario</h2>
                                <p id="userPosition">Cargo</p>
                            </div>
                        </div>
                        <button id="logoutBtn" class="btn-secondary"><i class="fas fa-sign-out-alt"></i> Salir</button>
                    </div>
                    <div class="contract-details">
                        <h3>📄 Detalles del contrato</h3>
                        <div class="contract-grid">
                            <div class="contract-item"><span data-key="contract_id">Nº contrato:</span> <strong id="contractId">---</strong></div>
                            <div class="contract-item"><span data-key="contract_employer">Empresa:</span> <strong id="contractEmployer">---</strong></div>
                            <div class="contract-item"><span data-key="contract_location">Ubicación:</span> <strong id="contractLocation">---</strong></div>
                            <div class="contract-item"><span data-key="contract_start">Inicio:</span> <strong id="contractStart">---</strong></div>
                            <div class="contract-item"><span data-key="contract_end">Fin:</span> <strong id="contractEnd">---</strong></div>
                            <div class="contract-item"><span data-key="contract_salary">Salario (mes):</span> <strong id="contractSalary">---</strong></div>
                            <div class="contract-item"><span data-key="contract_hours">Horas semanales:</span> <strong id="contractHours">---</strong></div>
                            <div class="contract-item"><span data-key="contract_benefits">Beneficios:</span> <strong id="contractBenefits">---</strong></div>
                            <div class="contract-item"><span data-key="contract_contact">Contacto emergencia:</span> <strong id="contractContact">---</strong></div>
                        </div>
                    </div>
                    <div class="dashboard-charts">
                        <h3>📊 Estadísticas del sector</h3>
                        <div class="chart-container">
                            <div class="pie-chart" id="pieChart">
                                <!-- Simulación de gráfico circular con CSS -->
                            </div>
                            <div class="bar-chart" id="barChart">
                                <!-- Barras horizontales -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== GALLERY ===== -->
    <section class="gallery" id="gallery">
        <div class="container">
            <div class="section-header">
                <h2 data-key="gallery_title">📸 Galería industrial</h2>
                <p data-key="gallery_subtitle">Imágenes de los centros de trabajo y alojamientos</p>
            </div>
            <div class="grid-gallery">
                <div class="gallery-item"><img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600" alt="Campo" loading="lazy" /><div class="overlay"><span>Agricultura</span></div></div>
                <div class="gallery-item"><img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600" alt="Construcción" loading="lazy" /><div class="overlay"><span>Construcción</span></div></div>
                <div class="gallery-item"><img src="https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=600" alt="Hostelería" loading="lazy" /><div class="overlay"><span>Hostelería</span></div></div>
                <div class="gallery-item"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="Tecnología" loading="lazy" /><div class="overlay"><span>Tecnología</span></div></div>
            </div>
        </div>
    </section>

    <!-- ===== CONTACT ===== -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2 data-key="contact_title">¿Necesitas ayuda?</h2>
                    <p data-key="contact_desc">Soporte 24/7 para trabajadores</p>
                    <div class="contact-details">
                        <div class="contact-item"><i class="fas fa-phone-alt"></i><div><strong>Teléfono</strong><p>+34 900 123 456</p></div></div>
                        <div class="contact-item"><i class="fas fa-envelope"></i><div><strong>Email</strong><p>contratos@indusrecruit.es</p></div></div>
                        <div class="contact-item"><i class="fas fa-map-marker-alt"></i><div><strong>Oficina Marruecos</strong><p>Casablanca, Maroc</p></div></div>
                    </div>
                </div>
                <form class="contact-form" id="contactForm">
                    <input type="text" placeholder="Tu nombre" required />
                    <input type="email" placeholder="Tu email" required />
                    <input type="text" placeholder="Nº de contrato (opcional)" />
                    <textarea rows="4" placeholder="Mensaje" required></textarea>
                    <button type="submit"><i class="fas fa-paper-plane"></i> Enviar</button>
                </form>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section"><h3><i class="fas fa-industry"></i> IndusRecruit</h3><p data-key="footer_desc">Portal industrial de empleo entre España y Marruecos</p></div>
                <div class="footer-section"><h4 data-key="footer_links">Enlaces</h4><ul><li><a href="#home" data-key="nav_home">Inicio</a></li><li><a href="#info" data-key="nav_info">Información</a></li><li><a href="#gallery" data-key="nav_gallery">Galería</a></li></ul></div>
                <div class="footer-section"><h4>Síguenos</h4><div class="social-links"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-linkedin"></i></a><a href="#"><i class="fab fa-instagram"></i></a></div></div>
            </div>
            <div class="footer-bottom"><p data-key="footer_text">© 2026 IndusRecruit. Todos los derechos reservados.</p><p data-key="footer_support">📞 +34 900 123 456 | ✉️ contratos@indusrecruit.es</p></div>
        </div>
    </footer>

    <div id="toast" class="toast hidden"></div>

    <script src="script.js"></script>
</body>
</html>
