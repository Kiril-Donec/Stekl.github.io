const translations = {
  ru: {
      "header-title": "Стеклянный чат",
      "hero-title": "Добро пожаловать!",
      "hero-text": "Присоединяйтесь к нашему уютному чату!",
      "btn": "Присоединиться",
      "about-link": "Главная",
      "rules-link": "Правила",
      "about-title": "О нас",
      "about-text": "Стеклянный чат - это единственное место в Telegram, где будет Майнкрафт, где есть своё государство, где должность модератора можно получить исключительно за деньги, где \"дура\" не считается оскорблением, где много сигм.",
      "footer-text": "© 2024 Стеклянный чат"
  },
  uk: {
      "header-title": "Скляний чат",
      "hero-title": "Ласкаво просимо!",
      "hero-text": "Приєднуйтесь до нашого затишного чату!",
      "btn": "Приєднатися",
      "about-link": "Головна",
      "rules-link": "Правила",
      "about-title": "Про нас",
      "about-text": "Скляний чат - це єдине місце в Telegram, де буде Майнкрафт, де є своя держава, де посаду модератора можна отримати виключно за гроші, де \"дура\" не вважається образливим словом, де багато сигм.",
      "footer-text": "© 2024 Скляний чат"
  },
  en: {
      "header-title": "Glass Chat",
      "hero-title": "Welcome!",
      "hero-text": "Join our cozy chat!",
      "btn": "Join",
      "about-link": "Home",
      "rules-link": "Rules",
      "about-title": "About Us",
      "about-text": "Glass Chat is the only place in Telegram where there will be Minecraft, where there is its own state, where the moderator position can be obtained exclusively for money, where \"fool\" is not considered an insult, where there are many sigmas.",
      "footer-text": "© 2024 Glass Chat"
  }
};

document.body.classList.add('show-animations');

// Получаем язык пользователя
var lang = navigator.language || navigator.userLanguage;
lang = lang.substring(0, 2).toLowerCase();

// Установка языка
function setLanguage(lang) {
  Object.keys(translations[lang]).forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
          element.textContent = translations[lang][elementId];
      }
  });
}

// Вызываем функцию для установки языка по умолчанию
setLanguage(lang); 
document.documentElement.lang = lang;

// Обновляем год в футере
const currentYear = new Date().getFullYear();
document.querySelector('footer p').textContent = translations[lang]["footer-text"].replace('2024', currentYear);

// Открытие ссылки на чат в Telegram по кнопке
const joinButton = document.querySelector('.btn');
joinButton.addEventListener('click', function() {
  window.open('https://t.me/STEKLYANNIY_CHAT', '_blank');
});

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