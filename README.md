# 📊 Finance Tracker — Гайд

---

## Початков налаштування

### 1. Встановлення інструментів

- **Git**: [Завантажити Git](https://git-scm.com/downloads)

- **Node.js (версія LTS)**: [Завантажити Node.js](https://nodejs.org)

- **pnpm (менеджер пакетів)**:

  ```bash
  npm install -g pnpm
  ```

- **Перевірка встановлення**:

  ```bash
  git --version
  node -v
  pnpm -v
  ```

### 2. Налаштування Git

Перед першою роботою з Git, ОБОВ’ЯЗКОВО необхідно вказати ім’я та email:

  ```bash
  git config --global user.name "Твоє Ім’я"
  git config --global user.email "твій@email.com"
  ```

**Це важливо для історії комітів і відстеження, хто над чим працював.*

### 3. Клонування проєкту

  ```bash
  git clone https://github.com/NURE-DPS/finance-app-frontend.git
  cd finance-app-frontend
  pnpm install
  pnpm dev
  ```

---

## Бекенд

Бекенд розгорнутий на Render і доступний за цим посиланням:

[render](https://finance-app-backend-uvqx.onrender.com)

Використовуйте це посилання для звернення з фронтенду до API.

---

## Jira + Git

### 1. Як прив'язати коміт до таски

У коміт-повідомленні:

  ```bash
  TASK-123: Додав авторизацію через Supabase
  ```

**TASK-123 — це ключ завдання у Jira. Такі коміти автоматично відображаються у Jira.*

### 2. Робочий флоу:

- **Взяти задачу в Jira (To Do → In Progress)**
- **Створити нову гілку**:

  ```bash
  git checkout -b feat/TASK-123-login
  ```

- **Працюєш у своїй гілці**
- **Зберігаєш, лінтиш**:
  
  ```bash
  pnpm lint
  git add .
  git commit -m "TASK-123: Реалізував логіку входу"
  git push origin feat/TASK-123-login
  ```

- **Створюєш Pull Request на GitHub**
- **Jira автоматично бачить цей PR і оновлює статус**

---

## Як працюють гілки

- **main** — основна гілка (тільки для стабільного коду)

- **dev** — основна гілка розробки

- **feat/назва** — нова фіча

- **fix/назва** — виправлення багів

- **refactor/назва** — рефакторинг коду

### 1. Створення нової гілки

  ```bash
git checkout -b feat/TASK-321-daily-report
  ```

### 2. Злиття змін з dev

  ```bash
git checkout dev
git pull
git checkout feat/твоя
git merge dev
  ```

**Після цього необхідно виправити конфлікти, якщо є, і запушити оновлення.*

---

## Різниця між dependencies та devDependencies

| dependencies | devDependencies |
| ----------- | ----------- |
| Потрібні в продакшені | Потрібні тільки для розробки |
| React, axios, tailwind | TypeScript, ESLint, Prettier |

---

## Структура проєкту

  ```js
src/
 ├── assets/       // зображення, іконки
 ├── components/   // UI-компоненти
 ├── config/       // Supabase, глобальні налаштування
 ├── hooks/        // власні хуки React
 ├── layouts/      // шаблони сторінок
 ├── pages/        // сторінки (як у маршрутах)
 ├── stores/       // глобальний стан (наприклад, Zustand)
 ├── styles/       // стилі Tailwind
 ├── utils/        // допоміжні функції
   ```

---

## package.json

  ```json
"scripts": {
  "dev": "vite",            // запустити локально
  "build": "tsc -b && vite build", // зібрати білд
  "lint": "eslint .",       // лінтинг
  "preview": "vite preview" // перегляд зібраного білду
}
  ```
