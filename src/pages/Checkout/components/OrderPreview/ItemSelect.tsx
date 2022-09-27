import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  ActionsContainer,
  InfoItem,
  ItemContainer,
  RemoveButton,
} from './styles'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface ItemSelectProps {
  coffee: CartItem
}

export function ItemSelect({ coffee }: ItemSelectProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.quantity * coffee.price
  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }
  return (
    <ItemContainer>
      <div>
        <img src={`/coffee/${coffee.photo}`} alt="" />

        <InfoItem>
          <h1>{coffee.name}</h1>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </InfoItem>
      </div>
      <p>R${formattedPrice}</p>
    </ItemContainer>
  )
}
