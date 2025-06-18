# Crypto React Quoter

## Features

- Select from the top 20 cryptocurrencies by market cap
- Choose between multiple fiat currencies (USD, MXN, EUR, GBP)
- Real-time price quotes using the CryptoCompare API
- Displays price, high/low, 24h change, and last update
- Loading spinner and error handling
- State management with Zustand
- Type-safe schemas with Zod
- Built with React 19, TypeScript, and Vite
- Custom CSS styling

## Project Structure

```
├── public/
│   └── bg.jpg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── Spinner.css
│   ├── store.ts
│   ├── vite-env.d.ts
│   ├── data/
│   │   └── index.ts
│   ├── schemas/
│   │   └── crypto-schema.ts
│   ├── services/
│   │   └── CryptoService.ts
│   ├── types/
│   │   └── index.ts
│   └── components/
│       ├── CryptoPriceDisplay.tsx
│       ├── CryptoSearchForm.tsx
│       ├── ErrorMessage.tsx
│       └── LoadingSpinner.tsx
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── .gitignore
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crypto-react-ts.git
   cd crypto-react-ts
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Technologies Used

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [CryptoCompare API](https://min-api.cryptocompare.com/)

## How to use

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open [http://localhost:5173](http://localhost:5173) in your browser.
3. Select a fiat currency and a cryptocurrency, then click "Quote" to see the latest price and related data.

## Live Demo

[https://monumental-strudel-e706ff.netlify.app/](https://monumental-strudel-e706ff.netlify.app/)