import styled from 'styled-components'

import introBackground from '../../../../assets/background.png'

export const InfoContainer = styled.section`
  background: ${() => `url(${introBackground}) no-repeat center`};
  background-size: cover;
  flex: 1;
`

export const InfoContent = styled.div`
  display: flex;
  gap: 56px;
  flex-direction: row;

  padding: 94px 20px 100px 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`

export const InfoBanner = styled.div`
  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme.base['base-title']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 130%;
    margin-top: 16px;
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 2rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`

export const IconContainer = styled.div`
  margin-top: 4.25rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px 40px;
`
