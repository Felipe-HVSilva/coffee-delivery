import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.base['base-button']};
  background: ${({ theme }) => theme.base['base-input']};
  transition: 0.4s;
  height: 42px;

  &:focus {
    border-color: ${({ theme }) => theme.product['yellow-dark']};
  }

  color: ${({ theme }) => theme.base['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.base['base-label']};
  }
`
