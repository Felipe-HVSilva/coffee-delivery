import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityProps {
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  size = 'medium',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus weight="fill" size={14} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus weight="fill" size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
