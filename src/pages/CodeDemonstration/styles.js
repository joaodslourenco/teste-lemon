import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #594544;
  color: #fff;
  padding: 42px;
  position: relative;
  gap: 30px;
`

export const Title = styled.h1`
  width: 100%;
  padding-bottom: 30px;
`

export const ButtonCode = styled.img`
  @media (max-width: 1300px) {
    display: none;
  }
`

export const Text = styled.p`
  line-height: 1.5;
  text-align: justify;
`
