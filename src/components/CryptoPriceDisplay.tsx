import { useMemo } from "react";
import { useCryptoStore } from "../store"
import LoadingSpinner from "./LoadingSpinner";

export default function CryptoPriceDisplay() {

    const { result, loading } = useCryptoStore();
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {loading ? <LoadingSpinner /> : hasResult && (
                <>
                    <h2>Quote</h2>
                    <div className="result">
                        <img 
                            src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                            alt="Crypto Image" 
                        />
                        <div>
                            <p>Price is: <span>{result.PRICE}</span></p>
                            <p>Highest price of the day: <span>{result.HIGHDAY}</span></p>
                            <p>Lowest price of the day: <span>{result.LOWDAY}</span></p>
                            <p>Variation in last 24 hours: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Last update: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
