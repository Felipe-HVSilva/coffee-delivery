import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.base.error};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.base['base-button']};
  background: ${({ theme }) => theme.base['base-input']};
  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.product['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.base.error};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;

  color: ${({ theme }) => theme.base['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.base['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.base['base-label']};
`
