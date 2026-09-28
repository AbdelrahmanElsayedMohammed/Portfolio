/* ============ PRELOADER ============ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hide'), 1400);
});

/* ============ THEME TOGGLE ============ */
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

/* ============ LANGUAGE TOGGLE ============ */
const languageToggle = document.getElementById('languageToggle');
const languageCode = languageToggle.querySelector('.language-code');
const originalTitle = document.title;
const englishText = {
  'عبدالرحمن': 'Abdelrahman', 'نبذة': 'About', 'المهارات': 'Skills', 'الخبرات': 'Experience',
  'عبدالرحمن السيد': 'Abdelrahman Elsayed',
  'أعمالي': 'Projects', 'الشهادات': 'Certifications', 'تواصل': 'Contact', 'نبذة عني': 'About me',
  'مهاراتي': 'My skills', 'التعليم': 'Education', 'الخدمات': 'Services', 'تواصل معي': 'Contact me', 'وظّفني': 'Hire me',
  'متاح للعمل الحر الآن': 'Available for freelance work', 'أهلاً، أنا': "Hi, I'm",
  'مطور واجهات أمامية شغوف بتحويل التصاميم إلى كود تفاعلي ومتجاوب. أجمع بين الخبرة الرقمية واللغوية لتقديم تجارب مستخدم استثنائية بأكواد نظيفة ومنظمة.': 'A front-end developer passionate about turning designs into responsive, interactive code. I combine technical and language skills to build polished user experiences with clean, organized code.',
  'لنتحدث عن مشروعك': "Let's discuss your project", 'شاهد أعمالي': 'View my work',
  'سنوات خبرة': 'Years of experience', 'شهادات معتمدة': 'Certified courses',
  '// مطور واجهات أمامية': '// Front-end developer', 'من أنا': 'About me', 'مطور': 'A',
  'مبدع': 'creative developer', 'برؤية مختلفة': 'with a different perspective',
  'أجمع بين التقنية والإبداع اللغوي لصناعة تجارب رقمية لا تُنسى': 'I combine technology and language to create memorable digital experiences.',
  'أهلاً بك في عالمي الرقمي 👋': 'Welcome to my digital world 👋', 'أنا': 'I am',
  '، مطور واجهات أمامية من الإسكندرية، مصر. أركز على إنشاء تجارب مستخدم سلسة باستخدام HTML5 و CSS3 و JavaScript و React، مع التزام كامل بجودة الأداء والاهتمام بأدق التفاصيل.': ', a front-end developer from Alexandria, Egypt. I build smooth user experiences with HTML5, CSS3, JavaScript, and React, with a strong focus on performance and detail.',
  'أعمل حالياً كمطور واجهات أمامية ضمن فريق من ثلاثة أشخاص على': 'I currently work as a front-end developer on a three-person team building',
  '، نظام SaaS لإدارة الشحن والمخازن يخدم شركات اللوجستيات الصغيرة وتجار الجملة في مصر والسعودية.': ', a SaaS shipping and warehouse management platform for small logistics companies and wholesalers in Egypt and Saudi Arabia.',
  'ما يميزني هو الجمع بين': 'What sets me apart is the combination of', 'الخبرة التقنية': 'technical expertise',
  'و': 'and', 'الخلفية اللغوية القوية': 'a strong language background',
  '— مما يجعلني قادراً على فهم احتياجات العملاء وترجمتها إلى كود نظيف ومنظم، مع كتابة محتوى واضح لواجهات المستخدم.': '— which helps me understand client needs and turn them into clean, organized code and clear user interface copy.',
  '🎯 الاهتمام بالتفاصيل': '🎯 Attention to detail', '🧩 حل المشكلات': '🧩 Problem solving',
  '⏱️ إدارة الوقت': '⏱️ Time management', '💬 تواصل فعّال': '💬 Clear communication',
  'ما أتقنه': 'What I do', 'الأساسية': 'core',
  'مجموعة متكاملة من المهارات التقنية والشخصية': 'A well-rounded set of technical and interpersonal skills',
  'لغات وأدوات البرمجة': 'Programming languages', 'أدوات التطوير': 'Development tools',
  'DevTools المتصفح': 'Browser DevTools', 'REST APIs (استهلاك بيانات Backend)': 'REST APIs (backend integration)',
  'التقنيات': 'Technologies', 'التصميم المتجاوب (Responsive)': 'Responsive design',
  'معالجة الأحداث (Events)': 'Event handling', 'المهارات الرقمية': 'Digital skills',
  'أساسيات SEO': 'SEO fundamentals', 'كتابة محتوى لواجهات المستخدم': 'UI content writing',
  'المهارات الشخصية': 'Interpersonal skills', 'الاهتمام الشديد بالتفاصيل': 'Strong attention to detail',
  'حل المشكلات بإبداع': 'Creative problem solving', 'إدارة الوقت بفعالية': 'Effective time management',
  'التواصل الممتاز عن بُعد': 'Excellent remote communication', 'المحتوى والتدقيق': 'Content and proofreading',
  'كتابة محتوى بالعربية والإنجليزية': 'Arabic and English content writing',
  'التدقيق اللغوي والإملائي': 'Language and copy editing',
  'تحسين المحتوى لمحركات البحث': 'Search engine content optimization',
  'ما أقدمه': 'What I offer', 'الخدمات الرقمية': 'Digital services',
  'حلول واجهات أمامية عملية تناسب احتياجات مشروعك': 'Practical front-end solutions tailored to your project',
  'تطوير مواقع متجاوبة': 'Responsive website development',
  'إنشاء مواقع سريعة ومتوافقة مع الهواتف والأجهزة المختلفة باستخدام HTML وCSS وJavaScript.': 'Build fast websites that work smoothly across phones and devices with HTML, CSS, and JavaScript.',
  'واجهات React': 'React interfaces',
  'بناء واجهات تفاعلية منظمة وقابلة للتطوير، وربطها بواجهات REST APIs.': 'Build organized, interactive, scalable interfaces and connect them to REST APIs.',
  'تحسين تجربة المستخدم': 'User experience improvements',
  'تحسين سهولة الاستخدام، وضوح المحتوى، وتناسق الواجهة على مختلف أحجام الشاشات.': 'Improve usability, content clarity, and interface consistency across screen sizes.',
  'المحتوى وتهيئة SEO': 'Content and SEO',
  'كتابة وتدقيق محتوى عربي وإنجليزي لواجهات المستخدم، مع تطبيق أساسيات SEO.': 'Write and proofread Arabic and English interface content while applying SEO fundamentals.',
  'مسيرتي': 'My career',
  'العملية': 'and work history', 'رحلتي في عالم التطوير والمحتوى الرقمي': 'My journey in development and digital content',
  'مطور واجهات أمامية — FlowLogix': 'Front-End Developer — FlowLogix', 'حالياً': 'Present',
  'فريق من 3 أشخاص': '3-person team',
  'بناء واجهة نظام SaaS لإدارة الشحن والمخازن باستخدام React.': 'Build the React interface for a SaaS shipping and warehouse management system.',
  'ربط الواجهة الأمامية بـ Backend مبني على Spring Boot و PostgreSQL عبر REST APIs.': 'Connect the front end to a Spring Boot and PostgreSQL backend through REST APIs.',
  'تصميم شاشات عملية (Dashboards) لعملاء من شركات اللوجستيات وتجار الجملة في مصر والسعودية.': 'Design practical dashboards for logistics companies and wholesalers in Egypt and Saudi Arabia.',
  'التعاون المباشر مع فريق صغير على قرارات المنتج وتجربة المستخدم.': 'Work closely with a small team on product and user experience decisions.',
  'خبرات إضافية': 'Additional experience',
  'كتابة محتوى وتدقيق لغوي (2023 — الآن)': 'Content writing and proofreading (2023 — Present)',
  '— مقالات ومحتوى مواقع بالعربية والإنجليزية، مع تطبيق أساسيات SEO.': '— Arabic and English articles and website content, applying SEO fundamentals.',
  'معرض أعمالي': 'Selected work', 'مشاريع': 'Projects', 'مختارة': 'showcase',
  'FlowLogix — نظام إدارة شحن ومخازن': 'FlowLogix — Shipping and Warehouse Management System',
  'نماذج تعكس مهاراتي في تطوير الواجهات الأمامية': 'Projects that showcase my front-end development skills',
  'مشروع حالي — فريق': 'Current project — team',
  'واجهة أمامية لمنصة SaaS تساعد شركات اللوجستيات الصغيرة وتجار الجملة على إدارة الشحنات والمخزون، مبنية بـ React ومتصلة بـ Backend عبر Spring Boot و PostgreSQL.': 'Front end for a SaaS platform that helps small logistics companies and wholesalers manage shipments and inventory. Built with React and connected to a Spring Boot and PostgreSQL backend.',
  'زيارة المشروع': 'Visit project', 'مشروع فردي': 'Independent project',
  'الكُتَّاب — تطبيق قراءة وتسميع القرآن': 'Al-Kottab — Quran reading and recitation app',
  'موقع لقراءة القرآن الكريم وتسميعه بصوت الشيخ الحصري، مع إمكانية إضافة السور لقائمتي القراءة والتسميع ومشغل صوت مدمج. صممته ونفذته بالكامل بمفردي.': "A Quran reading and recitation website featuring Sheikh Al-Husary's recitation, custom reading and recitation lists, and a built-in audio player. Designed and built independently.",
  'StyleHub — متجر إلكتروني للأزياء': 'StyleHub — Fashion e-commerce store',
  'متجر ملابس متعدد الصفحات يضم مجموعات الهودي والسويت بانت، وكتالوجًا مع اختيار المقاسات. يتضمن سلة تفاعلية تحفظ المنتجات محليًا، وتتيح تعديل الكميات وحساب الإجمالي، بالإضافة إلى صفحة لإتمام الطلب.': 'A multi-page clothing store featuring hoodie and sweatpant collections, a catalog with size selection, and an interactive cart that saves items locally, updates quantities, calculates totals, and supports checkout.',
  'الخلفية الأكاديمية': 'Academic background', 'طالب بكلية العلوم': 'Science student',
  'جامعة الإسكندرية — مصر': 'Alexandria University — Egypt', 'التطوير المستمر': 'Continuous learning',
  'الدورات': 'Courses', 'والشهادات': 'and certifications',
  'رحلتي في التعلم المستمر وتطوير المهارات': 'My ongoing learning and skills development',
  'أساسيات البيانات — IBM SkillsBuild': 'Data Fundamentals — IBM SkillsBuild',
  'دبلومة برمجة (Java & Python) — American Board': 'Programming Diploma (Java & Python) — American Board',
  'اضغط لعرض الشهادة ↗': 'View certificate ↗',
  'دورات متقدمة في JavaScript و CSS (يوتيوب)': 'Advanced JavaScript and CSS courses (YouTube)',
  'مقدمة في الذكاء الاصطناعي — Coursera': 'Introduction to Artificial Intelligence — Coursera',
  'أساسيات التسويق الرقمي — Google Digital Garage': 'Fundamentals of Digital Marketing — Google Digital Garage',
  '+ شهادات ودبلومات إضافية (بيت العلوم المصري، Udemy) متاحة عند الطلب': '+ Additional certificates and diplomas (Egyptian House of Science, Udemy) available on request',
  'مهاراتي اللغوية': 'Language skills', 'اللغات': 'Languages', 'العربية': 'Arabic',
  'اللغة الأم': 'Native', 'الإنجليزية': 'English', 'متقدم (B2)': 'Advanced (B2)',
  'هل لديك مشروع؟ لنتحدث! 🚀': "Have a project? Let's talk! 🚀",
  'أنا متاح للعمل الحر ومستعد لتحويل أفكارك إلى واقع رقمي بأعلى جودة.': 'I am available for freelance work and ready to turn your ideas into polished digital experiences.',
  'البريد الإلكتروني': 'Email', 'موقعي وأعمالي على GitHub': 'My work on GitHub',
  'صُنع بـ': 'Made with', 'بواسطة عبدالرحمن السيد © 2025': 'by Abdelrahman Elsayed © 2025'
};
const languageTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let languageTextNode;
while ((languageTextNode = textWalker.nextNode())) {
  if (languageTextNode.parentElement.closest('script,style,svg')) continue;
  const original = languageTextNode.nodeValue;
  const normalized = original.trim().replace(/\s+/g, ' ');
  if (normalized) languageTextNodes.push({ node: languageTextNode, original, normalized });
}
const originalAlts = [...document.querySelectorAll('img[alt]')].map(image => ({ image, alt: image.alt }));
function setLanguage(language) {
  const isEnglish = language === 'en';
  document.documentElement.lang = language;
  document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
  languageTextNodes.forEach(({ node, original, normalized }) => {
    if (!isEnglish || !Object.prototype.hasOwnProperty.call(englishText, normalized)) {
      node.nodeValue = original;
      return;
    }
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    node.nodeValue = `${leading}${englishText[normalized]}${trailing}`;
  });
  document.title = isEnglish ? 'Abdelrahman Elsayed — Front-End Developer' : originalTitle;
  originalAlts.forEach(({ image, alt }) => {
    if (!isEnglish) image.alt = alt;
    else if (alt === 'عبدالرحمن السيد') image.alt = 'Abdelrahman Elsayed';
    else if (alt === 'شعار عبدالرحمن السيد') image.alt = 'Abdelrahman Elsayed logo';
    else if (alt.startsWith('واجهة مشروع FlowLogix')) image.alt = 'FlowLogix shipping and warehouse management interface';
    else if (alt.startsWith('واجهة تطبيق الكُتَّاب')) image.alt = 'Al-Kottab Quran reading and recitation app interface';
    else if (alt.startsWith('واجهة تطبيق StyleHub')) image.alt = 'StyleHub fashion e-commerce interface';
  });
  languageCode.textContent = isEnglish ? 'عربي' : 'EN';
  languageToggle.setAttribute('aria-label', isEnglish ? 'التبديل إلى العربية' : 'Switch to English');
  languageToggle.title = isEnglish ? 'التبديل إلى العربية' : 'Switch to English';
  themeToggle.setAttribute('aria-label', isEnglish ? 'Toggle color theme' : 'تبديل الوضع');
  document.getElementById('burger').setAttribute('aria-label', isEnglish ? 'Navigation menu' : 'القائمة');
  document.getElementById('back-top').setAttribute('aria-label', isEnglish ? 'Back to top' : 'العودة للأعلى');
  localStorage.setItem('language', language);
}
setLanguage(localStorage.getItem('language') === 'en' ? 'en' : 'ar');
languageToggle.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
});

/* ============ PROGRESS BAR + NAV ============ */
const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = scrolled + '%';
  nav.classList.toggle('scrolled', h.scrollTop > 40);
  backTop.classList.toggle('show', h.scrollTop > 500);
  updateActive();
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============ MOBILE MENU ============ */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ============ REVEAL ON SCROLL ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ============ LANGUAGE BARS ============ */
const langBars = document.querySelectorAll('.lang-bar span');
const langIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width;
      langIO.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
langBars.forEach(b => langIO.observe(b));

/* ============ ACTIVE NAV ============ */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');
function updateActive() {
  const y = window.scrollY + 200;
  sections.forEach(s => {
    const top = s.offsetTop;
    const bottom = top + s.offsetHeight;
    if (y >= top && y < bottom) {
      navItems.forEach(n => n.classList.remove('active'));
      const link = document.querySelector(`.nav-item[href="#${s.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}

/* ============ SMOOTH ANCHOR ============ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
