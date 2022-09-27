import { CheckoutForm } from './components/CheckoutForm'
import { OrderPreview } from './components/OrderPreview'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
      <OrderPreview />
    </CheckoutContainer>
  )
}
