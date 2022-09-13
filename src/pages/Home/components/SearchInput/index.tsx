import { InputHTMLAttributes, useCallback } from 'react'
import { debounce } from 'lodash'

import { Input } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  boolean?: boolean
}

export function SearchInput({ onChange, ...rest }: SearchInputProps) {
  const debounceFn = useCallback(
    debounce((e) => (onChange ? onChange(e) : undefined), 500),
    [],
  )

  return <Input onChange={debounceFn} {...rest} />
}
