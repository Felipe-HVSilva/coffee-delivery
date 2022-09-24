import { coffees } from '../../../../data/coffees'
import { CoffeeCard, Coffee } from '../CoffeeCard'
import { CardCoffeeContainer, CoffeeList } from './styles'

export function OurCoffees() {
  return (
    <CardCoffeeContainer className="container">
      <h1>Nossos cafés</h1>
      <CoffeeList>
        {coffees.map((coffee: Coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CardCoffeeContainer>
  )
}
