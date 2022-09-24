import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 0;

  @media (max-width: 800px) {
    padding: 22px 10px;
  }
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface ColorProps {
  color: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<ColorProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.875rem;

  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: 0;

    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: ${(props) => props.theme.base.white};

    font-size: 0.75rem;
    font-weight: 700;

    background-color: ${(props) => props.theme.product['yellow-dark']};
  }

  ${({ color }) => css`
    background-color: ${(props) => props.theme.product[`${color}-light`]};
  `}
`
