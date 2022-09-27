import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  ActionsContainer,
  InfoItem,
  ItemContainer,
  RemoveButton,
} from './styles'

export function ItemSelect() {
  return (
    <ItemContainer>
      <div>
        <img src="./coffee/expresso.png" alt="" />

        <InfoItem>
          <h1>Expresso Tradicional</h1>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </InfoItem>
      </div>
      <p>R$19,90</p>
    </ItemContainer>
  )
}
