import menBike from '../../assets/Illustration.png'
import { IconButton } from '../../components/IconButton'
import { SuccessContainer, SuccessDetailsContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()
  return (
    <SuccessContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <section>
          <SuccessDetailsContainer>
            <IconButton
              text={
                <p>
                  Entrega em <strong>Rua João Mariano Franco</strong>
                  <br />
                  Mogi das Cruzes - São Paulo, SP
                </p>
              }
              iconBg={theme.product.purple}
              icon={<MapPin size={16} weight="fill" />}
            />
            <IconButton
              iconBg={theme.product.yellow}
              icon={<Timer size={16} weight="fill" />}
              text={
                <p>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </p>
              }
            />
            <IconButton
              icon={<CurrencyDollar size={16} weight="fill" />}
              iconBg={theme.product['yellow-dark']}
              text={
                <p>
                  Pagamento na entrega <br />
                  <strong>Cartão de Crédito</strong>
                </p>
              }
            />
          </SuccessDetailsContainer>

          <img
            src={menBike}
            alt="Homem andando de moto roxa, com uma mochila de entrega"
          />
        </section>
      </div>
    </SuccessContainer>
  )
}
