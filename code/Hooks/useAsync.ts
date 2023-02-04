import { useState, useCallback, useEffect } from 'react'

const useAsync = (
  cb: () => Promise<unknown>,
  dependencies: any[] = []
): { loading: boolean; value: unknown; error: Error } => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState<unknown>(null)
  const [error, setError] = useState<Error>(null)

  const runAsync = useCallback(() => {
    setLoading(true)
    cb()
      .then((val) => {
        setValue(val)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dependencies, cb])

  useEffect(() => {
    runAsync()
  }, [runAsync])

  return { loading, value, error }
}
