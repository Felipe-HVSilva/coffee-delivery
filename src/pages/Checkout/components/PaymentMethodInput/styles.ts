import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
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

  user-select: none;
`

export const IconContainer = styled.div``
