import menBike from '../../assets/Illustration.png'
import { IconButton } from '../../components/IconButton'
import { SuccessContainer, SuccessDetailsContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/CheckoutForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const theme = useTheme()

  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>
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
                  Entrega em:
                  <strong>
                    {state.street}, {state.number}
                  </strong>
                  <br />
                  {state.district} - {state.city}, {state.uf}
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
                  <strong>{paymentMethods[state.paymentMethod].label}</strong>
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
