import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { formatMoney } from '../../../../utils/formatMoney'
import { AddCartWrapper, Card, CardFooter, Name, Tags } from './styles'

export interface Coffee {
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
  const formattedPrice = formatMoney(coffee.price)

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
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </Card>
  )
}
