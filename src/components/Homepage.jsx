import styled from 'styled-components'
import Button from './Button'
import { arrowRight, check, refresh } from '../icons'

export default function Homepage() {
  return (
    <Background>
      <Text>
        Bem vindo à minha resolução do teste técnico da empresa Lemon Energia!
      </Text>
      {/* Container voltado para a demonstração da adaptação do tamanho do componente Button */}
      <Container>
        {/* O componente Button pode receber três props: color('primary','secondary'); icon(arrowRight, check, refresh); disabled(boolean) */}
        <Button color="primary">Text</Button>
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
const Text = styled.p`
  margin-bottom: 50px;
`

/* hipótese em que o componente Button é inserido em uma div com tamanho maior*/
const Container = styled.div`
  /* width: 450px;
  height: 150px; */
`
