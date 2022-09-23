import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  line-height: 130%;
  font-size: 1rem;
`

interface IconSvgProps {
  colorBg: string
}

export const IconSvg = styled.div<IconSvgProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;

  background-color: ${(props) => props.colorBg};
  border-radius: 50%;
`
