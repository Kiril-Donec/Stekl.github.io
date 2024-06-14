const translations = {
  ru: {
    "rules-title": "Правила Стеклянного чата",
    "rule1-title": "1.0. Не спамить.",
    "rule1-text": "Нарушение: Мут на 2 часа. Повторное нарушение приведет к более длительному муту.",
    "rule2-title": "1.1. Оскорблять мам и других родственников запрещено.",
    "rule2-text": "Нарушение: Мут на 5 часов.",
    "rule3-title": "1.2. Порнография запрещена.",
    "rule3-text": "Нарушение: Мут на 7 часов.",
    "rule4-title": "1.3. Не выпендриваться.",
    "rule4-text": "Нарушение: Мут на 1 час.",
    "rule5-title": "1.4. Не бесить.",
    "rule5-text": "Нарушение: Мут на 3 часа. Повторное нарушение приведет к более длительному муту.",
    "home-link": "Главная",
    "about-link": "Правила",
    "contacts-link": "Контакты",
    "chat-name": "Стеклянный чат",
    "header-title": "Стеклянный чат"
  },
  uk: {
    "rules-title": "Правила Скляного чату",
    "rule1-title": "1.0. Не спамити.",
    "rule1-text": "Порушення: Мут на 2 години. Повторне порушення призведе до більш тривалого муту.",
    "rule2-title": "1.1. Ображати мам і інших родичів заборонено.",
    "rule2-text": "Порушення: Мут на 5 годин.",
    "rule3-title": "1.2. Порнографія заборонена.",
    "rule3-text": "Порушення: Мут на 7 годин.",
    "rule4-title": "1.3. Не випендрюватися.",
    "rule4-text": "Порушення: Мут на 1 годину.",
    "rule5-title": "1.4. Не дратувати.",
    "rule5-text": "Порушення: Мут на 3 години. Повторне порушення призведе до більш тривалого муту.",
    "home-link": "Головна",
    "about-link": "Правила",
    "contacts-link": "Контакти",
    "chat-name": "Скляний чат",
    "header-title": "Скляний чат"
  },
  en: {
    "rules-title": "Glass Chat Rules",
    "rule1-title": "1.0. No spamming.",
    "rule1-text": "Violation: Mute for 2 hours. Repeated violations will result in a longer mute.",
    "rule2-title": "1.1. Insulting mothers and other relatives is prohibited.",
    "rule2-text": "Violation: Mute for 5 hours.",
    "rule3-title": "1.2. Pornography is prohibited.",
    "rule3-text": "Violation: Mute for 7 hours.",
    "rule4-title": "1.3. Don't show off.",
    "rule4-text": "Violation: Mute for 1 hour.",
    "rule5-title": "1.4. Don't annoy.",
    "rule5-text": "Violation: Mute for 3 hours. Repeated violations will result in a longer mute.",
    "home-link": "Home",
    "about-link": "Rules",
    "contacts-link": "Contacts",
    "chat-name": "Glass Chat",
    "header-title": "Glass Chat"
  }
};

// Отримання мови користувача
var lang = navigator.language || navigator.userLanguage;
lang = lang.substring(0, 2).toLowerCase();

// Встановлення мови
function setLanguage(lang) {
  Object.keys(translations[lang]).forEach(elementId => {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = translations[lang][elementId];
    }
  });
}

// Виклик функції для встановлення мови за замовчуванням
setLanguage(lang);
document.documentElement.lang = lang;

// Анімації для всіх елементів
document.body.classList.add('show-animations');

const allElements = document.querySelectorAll('header, nav, .rules, footer, .rules li');

allElements.forEach((element, index) => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';

    setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
    }, 200 * index); 
});

// Оновлення року в футері (автоматично)
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent = `© ${currentYear} ${translations[lang]["chat-name"]}`;

// script.js (або окремий файл для переходів)

// Отримуємо всі посилання на сторінці
const links = document.querySelectorAll('a');

// Додаємо обробник події кліку для кожного посилання
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Запобігаємо стандартній поведінці посилання

        // Отримуємо URL сторінки, на яку посилається посилання
        const targetUrl = link.getAttribute('href');

        // Додаємо клас "is-exiting" для запуску анімації виходу
        document.getElementById('page-transition').classList.add('is-exiting');

        // Після завершення анімації переходимо на нову сторінку
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // 500 мілісекунд - тривалість анімації
    });
});