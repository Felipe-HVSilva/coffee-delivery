import styled, { css } from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.product['purple-light']};
      border-color: ${theme.product.purple};
    `}

    &:hover {
      background: ${(props) => props.theme.base['base-hover']};
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  gap: 0.75rem;

  background-color: ${(props) => props.theme.base['base-button']};

  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.base['base-button']};

  &:hover {
    background: ${(props) => props.theme.base['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.product.purple};
  }

  user-select: none;
`
