import logoImg from '../../assets/logo-coffee-delivery.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'
import { useCart } from '../../hooks/useCart'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer className="container">
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <HeaderButtonContainer>
        <HeaderButton color="purple">
          <MapPin size={32} weight="fill" color={defaultTheme.product.purple} />
          Mogi das Cruzes, SP
        </HeaderButton>
        <HeaderButton color="yellow">
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <NavLink to="/checkout">
            <ShoppingCart
              size={32}
              weight="fill"
              color={defaultTheme.product.yellow}
            />
          </NavLink>
        </HeaderButton>
      </HeaderButtonContainer>
    </HeaderContainer>
  )
}
