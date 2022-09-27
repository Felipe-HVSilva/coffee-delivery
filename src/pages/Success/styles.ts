import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 0px 2rem;
  }

  div {
    h1 {
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;

      color: ${(props) => props.theme.product['yellow-dark']};
    }

    > p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-subtitle']};
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2.5rem;

      @media (max-width: 1000px) {
        flex-direction: column;
        gap: 2rem;
      }

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.base['base-text']};
      }
    }
  }
`

export const SuccessDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.base.background};
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
