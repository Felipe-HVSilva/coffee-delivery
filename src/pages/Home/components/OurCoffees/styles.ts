import styled from 'styled-components'

export const CardCoffeeContainer = styled.main`
  padding-top: 2rem;
  padding-bottom: 9.812rem;

  > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }

  @media (max-width: 1000px) {
    padding: 0px 2rem;
    padding-bottom: 3rem;
  }
`

export const CoffeeList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;

  padding-top: 54px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
