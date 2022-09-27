import { useCart } from '../../../../hooks/useCart'
import { ConfirmationSection } from './ConfirmationSection'
import { ItemSelect } from './ItemSelect'
import {
  OrderPreviewContainer,
  OrderPreviewSectionContainer,
  Title,
} from './styles'

export function OrderPreview() {
  const { cartItems } = useCart()
  return (
    <OrderPreviewContainer>
      <Title>Cafés selecionados</Title>
      <OrderPreviewSectionContainer>
        {cartItems.map((item) => (
          <ItemSelect key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </OrderPreviewSectionContainer>
    </OrderPreviewContainer>
  )
}
