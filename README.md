# Railway Tickets — WEB-project

Веб-застосунок для моделювання роботи системи продажу залізничних квитків (аналог Укрзалізниці).

## Стек технологій

- **React 18** + **Vite**
- **react-router-dom v6** — маршрутизація
- **React Context API** — глобальний стан бронювання
- **react-toastify** — повідомлення
- **CSS Modules** — ізольовані стилі

---

## Лабораторна робота 9 — Список потягів

**Реалізовано:**
- Відображення списку потягів у вигляді карток (`TrainCard`, `TrainList`)
- Статичні дані в `src/data/trains.js`
- Пошук за маршрутом або номером потяга
- Маршрутизація: `/`

---

## Лабораторна робота 10 — Бронювання місць

**Реалізовано:**
- Глобальний стан через `BookingContext` (обраний потяг, вагон, місця)
- Вибір вагона через `WagonSelector`
- Інтерактивна схема місць через `SeatMap` (вільне/обране/заброньоване)
- Форма бронювання з валідацією (`BookingForm`)
- Збереження бронювань у `localStorage` через `BookingService`
- Повідомлення через `react-toastify`
- Маршрутизація: `/booking/:trainId`

---

## Запуск проєкту

```bash
npm install
npm run dev
```

Відкрити у браузері: http://localhost:5173

---

## Структура проєкту

```
src/
├── components/
│   ├── TrainCard.jsx / .module.css
│   ├── TrainList.jsx / .module.css
│   ├── WagonSelector.jsx / .module.css
│   ├── SeatMap.jsx / .module.css
│   └── BookingForm.jsx / .module.css
├── context/
│   └── BookingContext.jsx
├── data/
│   └── trains.js
├── pages/
│   ├── Home.jsx / .module.css
│   └── Booking.jsx / .module.css
├── services/
│   └── BookingService.js
├── App.jsx
└── main.jsx
```