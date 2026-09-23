const translations = {
  en: {
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.certificates': 'Sertificates',
    'profile.photoAlt': 'my photo',
    'summary.title': 'Front-end developer',
    'summary.heading': ' Summary ',
    'summary.p1': ' I love working in the field of technology and development ',
    'summary.p2': " I'm a purposeful developer with a background in technical support and workflow automation ",
    'summary.p3': " And I'm a purposeful learner, motivated to apply my technical skills and drive for improvement to solve real-world problems through code.",
    'skills.heading': ' Skills ',
    'skills.html': 'HTML (Semantic, Accessibility)',
    'skills.bundlers': 'Module Bundlers: Gulp, Webpack',
    'skills.english': 'English - C1',
    'projects.heading': ' Projects ',
    'projects.coffee': 'Coffee house',
    'projects.hangman': 'Hangman game',
    'projects.router': 'Users data - custom router',
    'projects.calculator': 'Calculator',
    'projects.library': 'Library site',
    'projects.audio': 'Audioplayer',
    'projects.video': 'Videoplayer',
    'projects.gallery': 'Image gallery',
    'projects.game': 'Simple 2d game',
    'experience.heading': ' Experience ',
    'experience.responsibilities': 'Responsibilities:',
    'experience.job1.title': 'Frontend Programmer in FlyUnicorn company - 2024-2026 ',
    'experience.job1.r1': '-  I developed new functionality for CRM systems and websites created using JavaScript, React, and PHP, and also worked with WordPress, Webasyst, Tilda, and other website creation platforms.',
    'experience.job1.r2': '- Have experience with React, TypeScript, Redux, HTML, CSS, Wordpress to create user-friendly interfaces that gather more information about customers purchases and improve the overall user experience.',
    'experience.job1.r3': '- Collaborated with cross-functional teams, including designers, backend developers, and product managers, to deliver high-quality software solutions.',
    'experience.job1.r4': 'Wrked with databases using SQL to fulfill client requests for changes and downloading necessary data.',
    'experience.job2.title': 'Integration Analyst in FlyUnicorn company - 2023-2024 ',
    'experience.job2.r1': "- I configured various integrations between CRM systems and other services using APIs, webhooks, and applications, and provided comprehensive support to the company's clients. The company creates various integrations for banks, financial institutions, construction companies, and legal services companies, providing full support for various integrations and websites.",
    'experience.job2.r2': "- I conducted a comprehensive analysis of the company's processes to improve the quality of services provided and identify growth opportunities. This work was carried out in CRM systems such as Bitrix, Kommo, Zendesk and other CRM systems.",
    'experience.job3.title': 'Technical coordinator at CRM Integrators company - 2023-2023 ',
    'experience.job3.r1': '- I configured workflows and CRM systems, created tasks for programmers, and performed manual testing of new features.',
    'experience.job3.r2': '- I provided comprehensive support to the company regarding the fulfillment of their orders and also collected requirements and suggestions for the final product.',
    'experience.job4.title': 'Technical Support Engineer at ChatApp company - 2021-2022 ',
    'experience.job4.r1': '- I provided comprehensive support for services and applications at this company. The company developed various applications, such as: applications for integrating messengers into CRM or ERP systems; applications for automating receipt processing. The company also had various bots with extensive functionality.',
    'experience.job4.r2': '- I configured workflows and various CRM systems to ensure the correct operation of the applications.',
    'experience.job4.r3': '- I used API documentation to configure integrations based on individual requests from business clients. During my time at the company, I was promoted to Senior Technical Specialist.',
    'certificates.heading': ' Sertificates ',
    'certificates.english': 'English language certificate',
    'about.heading': ' About me ',
    'about.text': "I'm open to challenges and capable of independently navigating new services and applications. I'm able to analyze errors and find optimal solutions to improve work processes.",
  },
  ru: {
    'nav.projects': 'Проекты',
    'nav.experience': 'Опыт',
    'nav.certificates': 'Сертификаты',
    'profile.photoAlt': 'мое фото',
    'summary.title': 'Frontend-разработчик',
    'summary.heading': ' О себе ',
    'summary.p1': ' Мне нравится работать в сфере технологий и разработки ',
    'summary.p2': ' Я целеустремлённый разработчик с опытом в технической поддержке и автоматизации рабочих процессов ',
    'summary.p3': ' А также целеустремлённый ученик, мотивированный применять технические навыки и стремление к развитию, чтобы решать реальные задачи с помощью кода.',
    'skills.heading': ' Навыки ',
    'skills.html': 'HTML (семантика, доступность)',
    'skills.bundlers': 'Сборщики: Gulp, Webpack',
    'skills.english': 'Английский — C1',
    'projects.heading': ' Проекты ',
    'projects.coffee': 'Кофейня',
    'projects.hangman': 'Игра «Виселица»',
    'projects.router': 'Данные пользователей — кастомный роутер',
    'projects.calculator': 'Калькулятор',
    'projects.library': 'Сайт библиотеки',
    'projects.audio': 'Аудиоплеер',
    'projects.video': 'Видеоплеер',
    'projects.gallery': 'Галерея изображений',
    'projects.game': 'Простая 2D-игра',
    'experience.heading': ' Опыт ',
    'experience.responsibilities': 'Обязанности:',
    'experience.job1.title': 'Frontend-программист в компании FlyUnicorn — 2024–2026 ',
    'experience.job1.r1': '- Разрабатывала новый функционал для CRM-систем и сайтов на JavaScript, React и PHP, а также работала с WordPress, Webasyst, Tilda и другими платформами для создания сайтов.',
    'experience.job1.r2': '- Имею опыт работы с React, TypeScript, Redux, HTML, CSS, Wordpress для создания удобных интерфейсов, которые собирают больше информации о покупках клиентов и улучшают пользовательский опыт.',
    'experience.job1.r3': '- Сотрудничала с кросс-функциональными командами: дизайнерами, backend-разработчиками и продакт-менеджерами — для поставки качественных программных решений.',
    'experience.job1.r4': 'Работала с базами данных через SQL для выполнения клиентских запросов на изменения и выгрузку необходимых данных.',
    'experience.job2.title': 'Интеграционный аналитик в компании FlyUnicorn — 2023–2024 ',
    'experience.job2.r1': '- Настраивала различные интеграции между CRM-системами и другими сервисами через API, вебхуки и приложения, а также оказывала комплексную поддержку клиентам компании. Компания создаёт интеграции для банков, финансовых организаций, строительных и юридических компаний и обеспечивает полную поддержку интеграций и сайтов.',
    'experience.job2.r2': '- Проводила комплексный анализ процессов компании для повышения качества услуг и поиска точек роста. Работа велась в CRM-системах Bitrix, Kommo, Zendesk и других.',
    'experience.job3.title': 'Технический координатор в компании CRM Integrators — 2023–2023 ',
    'experience.job3.r1': '- Настраивала рабочие процессы и CRM-системы, ставила задачи программистам и проводила ручное тестирование нового функционала.',
    'experience.job3.r2': '- Обеспечивала комплексную поддержку компании по выполнению заказов, а также собирала требования и предложения к итоговому продукту.',
    'experience.job4.title': 'Инженер технической поддержки в компании ChatApp — 2021–2022 ',
    'experience.job4.r1': '- Обеспечивала комплексную поддержку сервисов и приложений компании. Компания разрабатывала приложения для интеграции мессенджеров в CRM или ERP, приложения для автоматизации обработки чеков, а также ботов с широким функционалом.',
    'experience.job4.r2': '- Настраивала рабочие процессы и различные CRM-системы для корректной работы приложений.',
    'experience.job4.r3': '- Использовала API-документацию для настройки интеграций по индивидуальным запросам бизнес-клиентов. За время работы в компании была повышена до Senior Technical Specialist.',
    'certificates.heading': ' Сертификаты ',
    'certificates.english': 'Сертификат по английскому языку',
    'about.heading': ' Обо мне ',
    'about.text': 'Я открыта к сложным задачам и умею самостоятельно разбираться в новых сервисах и приложениях. Умею анализировать ошибки и находить оптимальные решения для улучшения рабочих процессов.',
  },
}

let themeButton = document.querySelector('.changeTheme')
let langButton = document.querySelector('.changeLang')
let currentTheme = 'dark-theme'
let currentLang = localStorage.getItem('cv-lang') || 'en'

function applyLanguage(lang) {
  const dict = translations[lang]
  if (!dict) return

  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (dict[key] !== undefined) {
      el.textContent = dict[key]
    }
  })

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt')
    if (dict[key] !== undefined) {
      el.setAttribute('alt', dict[key])
    }
  })

  // Button shows the language you can switch TO
  langButton.textContent = lang === 'en' ? 'RU' : 'EN'
  langButton.setAttribute('aria-label', lang === 'en' ? 'Switch to Russian' : 'Переключить на английский')

  currentLang = lang
  localStorage.setItem('cv-lang', lang)
}

themeButton.addEventListener('click', function() {

    if (currentTheme === 'light-theme') {
        document.body.style.backgroundColor = '#1e1f27';
        document.documentElement.style.setProperty('--text', 'white')
        document.documentElement.style.setProperty('--pink', '#ee2db4')
     // code_example_wrapper.style.backgroundColor = '#2d2d3a'
        themeButton.style.backgroundImage = 'url(./assets/icons/light_mode.png)'
        themeButton.style.filter = 'invert(100%)'

        currentTheme = 'dark-theme';
    } else {
        document.body.style.backgroundColor = '#fafafa';
        document.documentElement.style.setProperty('--text', 'black')
        document.documentElement.style.setProperty('--pink', '#5c0042')
        // code_example_wrapper.style.backgroundColor = 'white'
        themeButton.style.backgroundImage = 'url(./assets/icons/night_mode.png)'
        themeButton.style.filter = 'invert(0%)'

        currentTheme = 'light-theme';
    }
});

langButton.addEventListener('click', function () {
  applyLanguage(currentLang === 'en' ? 'ru' : 'en')
})

applyLanguage(currentLang)
