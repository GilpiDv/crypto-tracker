import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import type { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";


export default function CryptoSearchForm() {

    const { fetchCryptos, cryptoCurrencies } = useCryptoStore(); 
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptoCurrency: ''
    })
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCryptos();
    }, [fetchCryptos]);


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(pair).includes('')) {
            setError('Please fill both fields')
            return;
        }
        
        setError('')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className='field'>
                <label htmlFor="currency">Currency</label>
                <select 
                    name="currency" 
                    id="currency"
                    value={pair.currency}
                    onChange={handleChange}
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
                    value={pair.cryptoCurrency}
                    onChange={handleChange}
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
