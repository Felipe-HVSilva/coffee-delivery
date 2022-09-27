import { ConfirmationSection } from './ConfirmationSection'
import { ItemSelect } from './ItemSelect'
import {
  OrderPreviewContainer,
  OrderPreviewSectionContainer,
  Title,
} from './styles'

export function OrderPreview() {
  return (
    <OrderPreviewContainer>
      <Title>Cafés selecionados</Title>
      <OrderPreviewSectionContainer>
        <ItemSelect />
        <ItemSelect />
        <ItemSelect />
        <ConfirmationSection />
      </OrderPreviewSectionContainer>
    </OrderPreviewContainer>
  )
}
