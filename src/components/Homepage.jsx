import styled from 'styled-components'
import Button from './Button'

export default function Homepage() {
  return (
    <Background>
      <p>
        Bem vindo à minha resolução do teste técnico da empresa Lemon Energia!
      </p>
      <Container>
        <Button color="secondary">Botão é esse</Button>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  height: 100vh;
  background-color: #594544;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const Container = styled.div`
  /* width: 700px;
  height: 300px; */
`
