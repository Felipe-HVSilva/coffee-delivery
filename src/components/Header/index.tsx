import logoImg from '../../assets/logo-coffee-delivery.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <HeaderButtonContainer>
        <HeaderButton color="purple">
          <MapPin size={32} weight="fill" color={defaultTheme.product.purple} />
          Mogi das Cruzes, SP
        </HeaderButton>
        <HeaderButton color="yellow">
          <span>2</span>
          <ShoppingCart
            size={32}
            weight="fill"
            color={defaultTheme.product.yellow}
          />
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  )
}
