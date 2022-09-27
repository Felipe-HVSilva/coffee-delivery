import { CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { CheckoutFormContainer, FormSectionContainer, Tilte } from './styles'

export function CheckoutForm() {
  const theme = useTheme()

  return (
    <CheckoutFormContainer>
      <Tilte>Complete seu pedido</Tilte>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPin size={22} color={theme.product.yellow} />}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={theme.product.purple} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}
