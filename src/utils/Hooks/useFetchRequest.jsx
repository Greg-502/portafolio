import { useState, useEffect } from 'react'
import { alerts } from 'src/components/Generic/Alerts'

export default function useFetchRequest( url ) {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(url)
        .then((response => {
            if (!response.ok) {
                throw new Error("Error HTTP: " + response.status)
            }
            return response.json()
        }))
        .then((res) => {
            setData(res)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setError(true)
            alerts()

            if (error instanceof TypeError && error.message.includes('API key')) {
                throw new Error(`Invalid API key: ${error.message}`)
            } else {
                throw new Error(`There was a problem with the Fetch operation: ${error.message}`)
            }
        })
    }, [url])

    return [ data, loading, error ]
}
