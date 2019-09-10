import { useState, useEffect } from 'react'

interface CurrecyFormatter { formatted: string, currency: number, setCurrency: (value: number) => void }
const useCurrency = (value: number, withSymbol: boolean = true) : CurrecyFormatter => {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
    })
    const [currency, setCurrency] = useState<number>(value)
    const [formatted, setFormatted] = useState<string>(formatter.format(value))

    useEffect(() => {
        if(withSymbol) {
            setFormatted(formatter.format(currency).replace('US', '').split('.')[0])
        } else {
            setFormatted(formatter.format(currency).replace('US$', '').split('.')[0])
        }
        
    }, [currency])

    return {
        formatted,
        currency,
        setCurrency,
    };
}

export default useCurrency;