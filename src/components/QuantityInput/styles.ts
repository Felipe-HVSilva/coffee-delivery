import styled, { css } from 'styled-components'

interface QuantityInputContainerProps {
  size?: 'medium' | 'small'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background-color: ${(props) => props.theme.base['base-button']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  padding: 0.5rem;

  > input {
    text-align: center;
    width: 100%;
    background-color: inherit;
    border: none;

    color: ${(props) => props.theme.base['base-text']};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  height: 100%;
  background-color: inherit;
  border: none;

  color: ${(props) => props.theme.product.purple};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.product['purple-dark']};
  }
`
