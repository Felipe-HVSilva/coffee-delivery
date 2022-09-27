import { ConfirmationSectionContainer, ConfirmOrder } from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <p className="info">Total de itens</p>
        <p className="price">R$ 29,70</p>
      </div>
      <div>
        <p className="info">Total de entrega</p>
        <p className="price">R$ 3.50</p>
      </div>
      <div>
        <p className="total">Total de itens</p>
        <p className="total">R$ 29,70</p>
      </div>
      <ConfirmOrder>Confirmar Pedido</ConfirmOrder>
    </ConfirmationSectionContainer>
  )
}
