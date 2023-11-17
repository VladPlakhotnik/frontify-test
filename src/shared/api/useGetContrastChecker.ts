import { useEffect, useState } from 'react'

export interface IContrastChecker {
    ratio: string
    AA: string
    AALarge: string
    AAA: string
    AAALarge: string
}

interface ContrastCheckerProps {
    fColor: string
    bColor: string
}

export const useGetContrastChecker = ({
    fColor,
    bColor,
}: ContrastCheckerProps) => {
    const [data, setData] = useState<IContrastChecker>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webaim.org/resources/contrastchecker/?fcolor=${fColor}&bcolor=${bColor}&api`,
                )
                const json = await response.json()
                setData(json)
            } catch (error_) {
                setError(`Error fetching data: ${error_}`)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [fColor, bColor])

    return { data, loading, error }
}
