import styled from 'styled-components'
import Button from './Button'
import { arrowRight, check, refresh } from '../icons'
import { useState } from 'react'
import PropsSelection from './PropsSelection'

export default function Homepage() {
  const [selectedColor, setSelectedColor] = useState('primary')
  const [selectedIcon, setSelectedIcon] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <Background>
      <Title>
        Bem vindo à minha resolução do teste técnico da empresa Lemon Energia!
      </Title>
      <Content>
        <PropsSelection />
        {/* Container voltado para a demonstração da adaptação do tamanho do componente Button */}
        <Container>
          {/* O componente Button pode receber três props: color('primary','secondary'); icon(arrowRight, refresh, check); disabled(boolean) */}
          <Button
            color={selectedColor}
            icon={selectedIcon}
            disabled={isDisabled}
          >
            Text
          </Button>
        </Container>
      </Content>
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
  text-align: center;

  color: #fff;
`

const Title = styled.h1`
  position: absolute;
  margin: 0 20px 0;
  top: 50px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b5b5b5;
  padding: 35px;
  border-radius: 10px;
`

/* hipótese em que o componente Button é inserido em uma div com tamanho maior*/
const Container = styled.div`
  /* width: 450px;
  height: 150px; */
`
