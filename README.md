# Crypto React Quoter

A simple cryptocurrency price quoter built with React, TypeScript, Zustand, and Vite. This app allows users to select a fiat currency and a cryptocurrency, then fetches and displays the latest price and related information using the CryptoCompare API.

## Features

- Select from top 20 cryptocurrencies by market cap
- Choose from multiple fiat currencies (USD, MXN, EUR, GBP)
- Fetches real-time price data, including high/low, 24h change, and last update
- Loading spinner and error handling
- Modern React (v19) with functional components and hooks
- State management with Zustand
- Type-safe schemas with Zod
- Styled with custom CSS

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
├── tsconfig*.json
├── vite.config.ts
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

### Lint

To lint the codebase:

```sh
npm run lint
```

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)
- [CryptoCompare API](https://min-api.cryptocompare.com/)

## License

This project is licensed under the MIT License.