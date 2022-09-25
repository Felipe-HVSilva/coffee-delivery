import { ReactNode } from 'react'
import { IconContainer, PaymentMethodContainer } from './styles'

interface PaymentMethodProps {
  title: string
  icon: ReactNode
}

export function PaymentMethodInput({ title, icon }: PaymentMethodProps) {
  return (
    <PaymentMethodContainer>
      <IconContainer>{icon}</IconContainer>
      {title}
    </PaymentMethodContainer>
  )
}
