import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const OrderPreviewContainer = styled.section`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  width: 28rem;
`

export const Title = styled.h1`
  font-size: 1rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.base['base-subtitle']};
`

export const OrderPreviewSectionContainer = styled(SectionBaseStyle)``

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.base['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
    color: ${(props) => props.theme.base['base-text']};
    font-size: 1rem;
  }
`

export const InfoItem = styled.div`
  > h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 0.5rem;
  background-color: ${(props) => props.theme.base['base-button']};
  border: none;
  border-radius: 6px;
  height: 100%;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.product.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.base['base-hover']};
  }
`

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-text']};
    }

    .prince {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-text']};
    }

    .total {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
  }
`

export const ConfirmOrder = styled.button`
  width: 100%;

  border: none;
  border-radius: 6px;
  padding: 12px 0px;
  background-color: ${(props) => props.theme.product.yellow};

  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
`
