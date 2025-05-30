import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchCryptoData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchCryptoData: async (pair) => {
        const result = await fetchCurrentCryptoPrice(pair);
        set(() => ({
            result
        }))
    }
})))