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
    fetch(
      `https://webaim.org/resources/contrastchecker/?fcolor=${fColor}&bcolor=${bColor}&api`,
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => setError(`Error fetching data: ${err}`))
      .finally(() => setLoading(false))
  }, [fColor, bColor])

  return { data, loading, error }
}
