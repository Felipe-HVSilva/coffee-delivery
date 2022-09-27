import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { AddCartWrapper, Card, CardFooter, Name, Tags } from './styles'

interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useCart()

  const formattedPrice = formatMoney(coffee.price)

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
    console.log('Olá')
  }

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  return (
    <Card>
      <img src={`/coffee/${coffee.photo}`} alt={coffee.name} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <p>{coffee.description}</p>
      <CardFooter>
        <div>
          <span className="chifrao">R$</span>
          <span className="price">{formattedPrice}</span>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </Card>
  )
}
