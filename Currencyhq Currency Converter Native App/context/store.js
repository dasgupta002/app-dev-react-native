import { createContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { callback } from '../util/api'

export const CurContext = createContext()

export const DEFAULT_BASE = 'USD'
export const DEFAULT_QUOTED = 'GBP'

export const CurProvider = ({ children }) => {
    const [baseCur, _setBaseCur] = useState(DEFAULT_BASE)
    const [quotedCur, setQuotedCur] = useState(DEFAULT_QUOTED)
    const [rates, setRates] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setBaseCur(DEFAULT_BASE)
    }, [])

    const setBaseCur = async (cur) => {
        setLoading(true)
        
        try {
            const res = await callback('/rates?base=' + cur)
            _setBaseCur(cur)
            setRates(res.rates)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            Alert.alert('Sorry, some error popped up! ', err.message)
        }
    }

    const swap = () => {
        setBaseCur(quotedCur)
        setQuotedCur(baseCur)
    }

    const obj = { baseCur, quotedCur, rates, loading, swap, setBaseCur, setQuotedCur }

    return <CurContext.Provider value = { obj }>
        { children }
    </CurContext.Provider>
}