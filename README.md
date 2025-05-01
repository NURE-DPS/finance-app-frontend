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

## Jira + Git

### 1. Комміт = subtask

У коміт-повідомленні:

  ```bash
  [FTA-123] <type>: *message*
  ```

#### Types

1. feat — додавання нової фічі, яку побачить користувач або яка змінює поведінку системи.
2. fix — виправлення багу, який порушує очікувану поведінку.
3. refactor — переписування або очищення коду без зміни функціональності.
4. chore — допоміжні зміни, які не впливають на функціональність (наприклад, оновлення залежностей, конфігурацій, скриптів).
5. test — додавання або зміна юніт-тестів, інтеграційних тестів тощо.
6. style — зміни, що не впливають на логіку: форматування, пробіли, лапки, ESLint-фікси тощо.

**FTA-123 — це ключ subtask у Jira.*
**message пишеться з маленької літери, без крапки в кінці.*

### 2. Гілка = User Story / Task / Bug

У назві гілки:
  
  ```bash
  FTA-123:*user-registration* 
  ```

**FTA-123 — ключ Jira.*
**user-registration — короткий опис задачі (1–2 слова), у форматі: іменник + інфінітив дії (наприклад: transaction-creation, profile-update).*
**Весь опис пишеться з маленької літери, слова розділяються дефісом.*

### 3. Робочий флоу

- **Взяти задачу в Jira (To Do → In Progress)**
- **Перевірити, що ви знаходитесь у dev гілці**
- **Створити нову гілку**:

  ```bash
  git checkout -b FTA-123:test-branch 
  ```

**Створюємо гілки для усієї юзер стоі, а не окремо для кожної сабтаски*

- **Працюєш у своїй гілці**
- **Зберігаєш, лінтиш**:
  
  ```bash
  pnpm lint
  git add .
  git commit -m "[FTA-123] <type>: *message*"
  git push origin [FTA-123]:test-branch 
  ```

- **Створюєш Pull Request на GitHub**
- **Переносиш задачу у статус In Review**

---

## Як працюють гілки

- **main** — основна гілка (тільки для стабільного коду)

- **dev** — основна гілка розробки

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
