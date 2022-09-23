import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { IconButton } from '../../../../components/IconButton'
import { IconContainer, InfoContainer, InfoContent, InfoBanner } from './styles'

import Image from '../../../../assets/Imagem.png'

export function Info() {
  const theme = useTheme()

  return (
    <InfoContainer>
      <InfoContent className="container">
        <InfoBanner>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IconContainer>
            <IconButton
              icon={<ShoppingCart weight="fill" />}
              iconBg={theme.product['yellow-dark']}
              text="Compra simples e segura"
            />
            <IconButton
              icon={<Package weight="fill" />}
              iconBg={theme.base['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <IconButton
              icon={<Timer weight="fill" />}
              iconBg={theme.product.yellow}
              text="Entrega rápida e rastreada"
            />
            <IconButton
              icon={<Coffee weight="fill" />}
              iconBg={theme.product.purple}
              text="O café chega fresquinho até você"
            />
          </IconContainer>
        </InfoBanner>
        <img src={Image} alt="" />
      </InfoContent>
    </InfoContainer>
  )
}
