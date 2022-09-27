import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmationSectionContainer, ConfirmOrder } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDelivery = formatMoney(DELIVERY_PRICE)
  return (
    <ConfirmationSectionContainer>
      <div>
        <p className="info">Total de itens</p>
        <p className="price">R$ {formattedItemsTotal}</p>
      </div>
      <div>
        <p className="info">Total de entrega</p>
        <p className="price">R$ {formattedDelivery}</p>
      </div>
      <div>
        <p className="total">Total</p>
        <p className="total">R$ {formattedCartTotal}</p>
      </div>
      <ConfirmOrder type="submit" disabled={cartQuantity <= 0}>
        Confirmar Pedido
      </ConfirmOrder>
    </ConfirmationSectionContainer>
  )
}
