import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityProps {
  size?: 'medium' | 'small'
}

export function QuantityInput({ size = 'medium' }: QuantityProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus weight="fill" size={14} />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus weight="fill" size={14} />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
