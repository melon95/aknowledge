import { useState, useCallback } from 'react'

const useToggle = (defaultVale: boolean = false) => {
  const [value, setValue] = useState(defaultVale)
  const toggle = useCallback(
    (outVal: boolean) => setValue((inlineVal) => outVal ?? !inlineVal),
    []
  )
  return [value, toggle]
}

export default useToggle
