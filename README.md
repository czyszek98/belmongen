# Belmongen

Po prostu strona www generująca ksywke na podstawie ksywek belmondo. Jeśli masz pomysł na urozmaicenie tego generatora śmiało twórz pull request
Strona dostępna jest [tutaj](https://belmongen.pl)

## Technologie

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pl/docs/Web/JavaScript)
- [React Router](https://reactrouter.com/)

## Uruchomienie projektu

1. Zainstaluj zależności:

   ```bash
   npm install
   ```

2. Uruchom aplikację w trybie deweloperskim:

   ```bash
   npm run dev
   ```

3. Otwórz przeglądarkę i przejdź do `http://localhost:5173`

## Struktura projektu

- `src/`
  - `App.jsx` – główny komponent aplikacji i routing
  - `pages/` – podstrony (np. Home, NotFound)
  - `belmondawg.service.js` – logika generowania ksywek i ciągów znaków
  - `names.const.js` – listy imion i przydomków
