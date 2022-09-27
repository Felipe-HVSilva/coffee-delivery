import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 13px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 1.5rem;
  }
`

export const SectionBaseStyle = styled.div`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.base['base-card']};
  border-radius: 6px;
`
