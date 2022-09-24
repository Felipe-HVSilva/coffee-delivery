import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
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
