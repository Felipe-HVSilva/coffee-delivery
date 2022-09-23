import { ReactNode } from 'react'
import { IconContainer, IconSvg } from './styles'

interface IconProps {
  icon: ReactNode
  iconBg: string
  text?: string
}

export function IconButton({ icon, iconBg, text }: IconProps) {
  return (
    <IconContainer>
      <div className="container-button">
        <IconSvg colorBg={iconBg}>{icon}</IconSvg>
      </div>
      {text}
    </IconContainer>
  )
}
