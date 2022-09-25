import { ReactNode } from 'react'
import { Icon, SectionTitleContainer, Subtitle, Title } from './styles'

interface SectionProps {
  icon: ReactNode
  title: string
  subtitle: string
}

export function SectionTitle({ icon, title, subtitle }: SectionProps) {
  return (
    <SectionTitleContainer>
      <Icon>{icon}</Icon>
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </SectionTitleContainer>
  )
}
