import { Info } from './components/Info'
import { OurCoffees } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Info />
      <OurCoffees />
    </HomeContainer>
  )
}
