import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  background-color: #594544;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`

export const Title = styled.h1`
  margin: 0 40px 25px;

  @media (max-width: 768px) {
    margin: 0 25px 10px;
    font-size: 18px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b5b5b5;
  padding: 35px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
    flex-shrink: 1;
  }
`
export const ButtonInput = styled.div`
  margin-bottom: 25px;
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
