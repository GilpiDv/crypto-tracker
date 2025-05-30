import { useEffect } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";


export default function CryptoSearchForm() {

    const { fetchCryptos, cryptoCurrencies } = useCryptoStore(); 

    useEffect(() => {
        fetchCryptos();
    }, [fetchCryptos]);

    return (
        <form className='form'>
            <div className='field'>
                <label htmlFor="currency">Currency</label>
                <select 
                    name="currency" 
                    id="currency"
                >
                    <option value="">Select</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className='field'>
                <label htmlFor="cryptoCurrency">Crypto</label>
                <select 
                    name="cryptoCurrency" 
                    id="cryptoCurrency"
                >
                    <option value="">Select</option>
                    {cryptoCurrencies.map(crypto => (
                        <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Quote" />
        </form>
    )
}
