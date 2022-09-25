import { Bank, CreditCard, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'

export function PaymentMethodOptions() {
  const theme = useTheme()
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput
        title="Cartão de crédito"
        icon={<CreditCard size={16} color={theme.product.purple} />}
      />
      <PaymentMethodInput
        title="Cartão de débito"
        icon={<Bank size={16} color={theme.product.purple} />}
      />
      <PaymentMethodInput
        title="Dinheiro"
        icon={<Money size={16} color={theme.product.purple} />}
      />
    </PaymentMethodOptionsContainer>
  )
}
