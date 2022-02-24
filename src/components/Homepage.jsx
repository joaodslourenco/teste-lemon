import styled from 'styled-components'
import Button from './Button'
import { arrowRight, check, refresh } from '../icons'

export default function Homepage() {
  return (
    <Background>
      <p>
        Bem vindo à minha resolução do teste técnico da empresa Lemon Energia!
      </p>
      <Container>
        <Button color="primary" icon={arrowRight}>
          Botão é esse
        </Button>
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
/* hipótese em que o componente Button é inserido em uma div com tamanho maior*/
const Container = styled.div`
  /* width: 700px;
  height: 300px; */
`
