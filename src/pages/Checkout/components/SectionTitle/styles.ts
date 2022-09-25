import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Icon = styled.div``

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme.base['base-subtitle']};
`

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme.base['base-text']};
`
