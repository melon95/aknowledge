import { useState, useCallback } from 'react'

const useCount = (defaultValue: number) => {
  const [count, setCount] = useState<number>(defaultValue)
  const add = useCallback(() => setCount((count) => count + 1), [])
  return [count, add]
}

export default useCount
