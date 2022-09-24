import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px 6px 16px;

  padding: 1.5rem;
  padding-top: 0px;

  background-color: ${(props) => props.theme.base['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  > p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-label']};
    text-align: center;

    margin-top: 0.5rem;
  }
`

export const Tags = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  > span {
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.product['yellow-light']};
    color: ${(props) => props.theme.product['yellow-dark']};

    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    border-radius: 999px;
  }
`

export const Name = styled.h3`
  color: ${(props) => props.theme.base['base-subtitle']};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    .chifrao {
      color: ${(props) => props.theme.base['base-text']};
      font-weight: 400;
      font-size: 0.7rem;
      line-height: 130%;
    }

    .price {
      color: ${(props) => props.theme.base['base-text']};
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.product['purple-dark']};
    color: ${(props) => props.theme.base.white};

    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background-color: ${(props) => props.theme.product.purple};
    }
  }
`
