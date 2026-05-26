(function() {
      document.getElementById("year").textContent = new Date().getFullYear();

      const translations = {
        de: {
          skip: "Zum Inhalt springen",
          brand_tagline: "PROCUREMENT · EPROCUREMENT · WEB",
          nav_expertise: "Expertise",
          nav_projects: "Projekte",
          nav_background: "Werdegang",
          nav_contact: "Kontakt",
          hero_label: "Profil",
          hero_title: "PROCUREMENT · EPROCUREMENT · <em>WEB DEVELOPMENT</em>",
          hero_text: "Ich verbinde strategischen Einkauf, Ivalua-Implementierung und modernes Web Development. So unterstütze ich Teams, Einkaufsprozesse und digitale Lösungen gemeinsam zu denken und umzusetzen.",
          hero_tag1: "Strategischer Einkauf",
          hero_tag2: "Ivalua Implementierung",
          hero_tag3: "Technical Solution Consulting",
          hero_tag4: "React · TypeScript · Supabase",
          hero_cta_projects: "Projekte ansehen",
          hero_cta_contact: "Kontakt aufnehmen",
          hero_meta1_label: "Schwerpunkte",
          hero_meta1_value: "Einkaufsprozesse, eProcurement, Ivalua, Web UIs",
          hero_meta2_label: "Standort",
          exp_label: "Expertise",
          exp1_title: "Strategischer Einkauf",
          exp1_text: "Erfahrung als Strategischer Einkäufer / Lead Buyer mit Verantwortung für Projekte, Lieferanten und cross-funktionale Zusammenarbeit.",
          exp1_tag1: "Stakeholder-Management",
          exp1_tag2: "Prozessdenken",
          exp2_title: "Ivalua & eProcurement",
          exp2_text: "Technical Solution Consultant in Implementierungsprojekten rund um Ivalua — von Anforderungsanalyse bis zur Nutzeradoption.",
          exp2_tag1: "Solution Consulting",
          exp3_title: "Web Development",
          exp3_text: "Frontend-Fokus mit React und TypeScript, ergänzt durch Supabase und moderne Toolchains.",
          exp4_title: "Arbeitsweise",
          exp4_text: "Strukturiert, dokumentationsstark und mit hoher Sensibilität für Prozesse, Stakeholder und reale Unternehmenskontexte.",
          proj_label: "Projekte",
          proj1_meta: "Flagship · React · Supabase",
          proj1_text: "Full-Stack-Rezepte-App mit React, TypeScript, Supabase und Tailwind CSS. Fokus auf Datenmodell, Suchfunktion, Kategorien und Automatisierung (GitHub Actions).",
          proj2_meta: "UI · React",
          proj2_text: "Meditations- & Wellness-App als Abschlussprojekt. Zeigt UI-Struktur, Komponentenaufbau und State-Management.",
          proj3_meta: "API · React",
          proj3_text: "Echtzeit-Wetteranwendung mit externer API — trainiert das Arbeiten mit Daten, Zuständen und UI.",
          proj4_meta: "API · React",
          proj4_text: "Experimente mit einer externen REST-API und User Interfaces rund um Datenlisten.",
          bg_label: "Werdegang",
          bg1_title: "Technical Solution Consultant",
          bg2_title: "Web Development Bootcamp",
          bg3_title: "Strategischer Projekteinkäufer / Lead Buyer",
          bg4_title: "Strategischer Projekteinkäufer",
          bg1_text: "Implementierungsunterstützung für Ivalua eProcurement-Lösungen: Anforderungsanalyse, Systemkonfiguration, Begleitung von Kundenteams.",
          bg2_text: "SuperCode GmbH: TypeScript, React, Node.js, PostgreSQL, HTML, CSS, Tailwind.",
          bg3_text: "Verantwortung für Einkaufsprojekte, Lieferantenverhandlungen und cross-funktionale Zusammenarbeit.",
          bg4_text: "Fokus auf projektorientierte Beschaffung, Lieferantenmanagement und strukturierte Prozesse.",
          contact_label: "Kontakt",
          contact_text: "Offen für Rollen, in denen Einkauf, eProcurement und Web Development gemeinsam gedacht werden — z.B. Technical Solution Consulting, eProcurement-Einführung oder Schnittstellenrollen zwischen Fachbereich und IT.",
          contact_email: "E-Mail schreiben",
          footer_loc: "Haltern am See · Deutschland",
          consult_vanlaack_title: "Solution Design Workshop",
          consult_vanlaack_text: "Vorbereitung und Durchführung eines Solution-Design-Workshops für die Digitalisierung des Sourcing-Prozesses: Analyse des Ist-Prozesses, Definition des Zielbildes und Erstellung eines Prozessdiagramms.",
          consult_parasus_title: "Requirements Engineering im eProcurement",
          consult_parasus_text: "Anforderungsaufnahme und Beratung im eProcurement-Kontext: Stakeholderanalyse, Workshops entlang der P2P-Prozesskette und Ableitung von Business-Requirements in ein Functional Design.",
        },
        en: {
          skip: "Skip to content",
          brand_tagline: "PROCUREMENT · EPROCUREMENT · WEB",
          nav_expertise: "Expertise",
          nav_projects: "Projects",
          nav_background: "Background",
          nav_contact: "Contact",
          hero_label: "Profile",
          hero_title: "PROCUREMENT · EPROCUREMENT · <em>WEB DEVELOPMENT</em>",
          hero_text: "I combine strategic procurement, Ivalua implementation experience and modern web development. This helps teams think and deliver procurement processes and digital solutions as one.",
          hero_tag1: "Strategic procurement",
          hero_tag2: "Ivalua implementation",
          hero_tag3: "Technical Solution consulting",
          hero_tag4: "React · TypeScript · Supabase",
          hero_cta_projects: "View projects",
          hero_cta_contact: "Get in touch",
          hero_meta1_label: "Focus areas",
          hero_meta1_value: "Procurement processes, eProcurement, Ivalua, web UIs",
          hero_meta2_label: "Location",
          exp_label: "Expertise",
          exp1_title: "Strategic Procurement",
          exp1_text: "Experience as strategic buyer / lead buyer, accountable for projects, suppliers and cross-functional collaboration.",
          exp1_tag1: "Stakeholder management",
          exp1_tag2: "Process thinking",
          exp2_title: "Ivalua & eProcurement",
          exp2_text: "Technical Solution Consultant in implementation projects around Ivalua — from requirements analysis to user adoption.",
          exp2_tag1: "Solution consulting",
          exp3_title: "Web Development",
          exp3_text: "Frontend focus with React and TypeScript, complemented by Supabase and modern toolchains.",
          exp4_title: "Way of working",
          exp4_text: "Structured, documentation-focused and highly aware of processes, stakeholders and real-world company contexts.",
          proj_label: "Projects",
          proj1_meta: "Flagship · React · Supabase",
          proj1_text: "Full-stack recipe app built with React, TypeScript, Supabase and Tailwind CSS. Focus on data model, search, categories and automation (GitHub Actions).",
          proj2_meta: "UI · React",
          proj2_text: "Meditation & wellness app as bootcamp capstone. Shows UI structure, components and state management.",
          proj3_meta: "API · React",
          proj3_text: "Real-time weather app using an external API — exercises working with data, state and UI.",
          proj4_meta: "API · React",
          proj4_text: "Experiments with an external REST API and user interfaces around data lists.",
          bg_label: "Background",
          bg1_title: "Technical Solution Consultant",
          bg2_title: "Web Development Bootcamp",
          bg3_title: "Strategic Project Purchaser / Lead Buyer",
          bg4_title: "Strategic Project Purchaser",
          bg1_text: "Implementation support for Ivalua eProcurement solutions: requirements analysis, system configuration, support for client teams.",
          bg2_text: "SuperCode GmbH: TypeScript, React, Node.js, PostgreSQL, HTML, CSS, Tailwind.",
          bg3_text: "Responsible for procurement projects, supplier negotiations and cross-functional collaboration.",
          bg4_text: "Focus on project-based sourcing, supplier management and structured processes.",
          contact_label: "Contact",
          contact_text: "Open to roles where procurement, eProcurement and web development are combined — such as Technical Solution Consulting, eProcurement implementation or bridge roles between business and IT.",
          contact_email: "Send an email",
          footer_loc: "Haltern am See · Germany",
          consult_vanlaack_title: "Solution Design Workshop",
          consult_vanlaack_text: "Designed and facilitated a solution design workshop for sourcing digitalization: analyzed the current sourcing process, defined the target picture and created a process diagram for an S2P solution.",
          consult_parasus_title: "Requirements Engineering in eProcurement",
          consult_parasus_text: "Gathered and structured requirements in an eProcurement context: stakeholder analysis, workshops along the P2P process and translating business requirements into a functional design.",
        }
      };

      var currentLang = 'de';
      var langToggle = document.getElementById('langToggle');

      function applyTranslations() {
        var t = translations[currentLang];
        document.documentElement.lang = currentLang;
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
          var key = el.getAttribute('data-i18n');
          if (t[key]) {
            el.innerHTML = t[key];
          }
        });
        langToggle.textContent = currentLang === 'de' ? 'EN' : 'DE';
        langToggle.setAttribute('aria-label', currentLang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln');
      }

      langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'de' ? 'en' : 'de';
        applyTranslations();
      });

      applyTranslations();
    })();

(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  const translations = { /* … dein bestehendes Objekt … */ };

  var currentLang = "de";
  var langToggle = document.getElementById("langToggle");

  function applyTranslations() {
    var t = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });
    if (langToggle) {
      langToggle.textContent = currentLang === "de" ? "EN" : "DE";
      langToggle.setAttribute(
        "aria-label",
        currentLang === "de" ? "Switch to English" : "Zu Deutsch wechseln"
      );
    }
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "de" ? "en" : "de";
      applyTranslations();
    });
  }

  applyTranslations();

  // ── Case-specific language switch ─────────────────
  document.addEventListener("DOMContentLoaded", () => {
    const langScopes = document.querySelectorAll("[data-lang-scope]");

    langScopes.forEach(scope => {
      const buttons = scope.querySelectorAll(".lang-btn");
      const langBlocks = scope.querySelectorAll("[data-lang]");

      // Default: DE sichtbar
      langBlocks.forEach(block => {
        const lang = block.getAttribute("data-lang");
        block.style.display = lang === "de" ? "block" : "none";
      });

      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const targetLang = btn.getAttribute("data-lang-target");

          buttons.forEach(b =>
            b.classList.toggle("is-active", b === btn)
          );

          langBlocks.forEach(block => {
            const lang = block.getAttribute("data-lang");
            block.style.display = lang === targetLang ? "block" : "none";
          });
        });
      });
    });
  });
})();