import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-border']};
  border-radius: 6px;

  line-height: 1.6rem;
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
