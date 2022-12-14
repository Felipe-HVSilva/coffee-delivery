import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const Tilte = styled.h1`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme.base['base-subtitle']};
  font-family: 'Baloo 2', sans-serif;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    font-size: 0.85rem;
    color: ${(props) => props.theme.base.error};
  }
`
