import styled from 'styled-components'
import Button from './Button'
import { arrowRight, refresh, check } from '../icons'
import { useState } from 'react'
import PropsSelection from './PropsSelection'
import Container from './Container'

export default function Homepage() {
  const [selectedColor, setSelectedColor] = useState('primary')
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)
  const [buttonText, setButtonText] = useState('Text')
  const [height, setHeight] = useState(56)
  const [width, setWidth] = useState(311)

  function colorSelectionHandler(color) {
    setSelectedColor(color)
  }

  function iconSelectionHandler(icon) {
    const iconHandler = icon => {
      if (icon === 'arrowRight') {
        return arrowRight
      }
      if (icon === 'refresh') {
        return refresh
      }
      if (icon === 'check') {
        return check
      }
    }
    setSelectedIcon(iconHandler(icon))
  }

  function disableSelectionHandler(disableToggle) {
    setIsDisabled(disableToggle)
  }

  return (
    <Background>
      <Title>
        Bem vindo à minha resolução do teste técnico da empresa Lemon Energia!
      </Title>
      <Content>
        <PropsSelection
          colorSelected={colorSelectionHandler}
          iconSelected={iconSelectionHandler}
          disableSelected={disableSelectionHandler}
        />
        <ButtonInput>
          <label htmlFor="button-text">Insira o texto do botão:</label>
          <input
            type="text"
            id="button-text"
            value={buttonText}
            onChange={e => setButtonText(e.target.value)}
          />
        </ButtonInput>
        <ButtonInput>
          <label htmlFor="height">Altura:</label>
          <input
            type="number"
            name="height"
            id="height"
            value={height}
            min={56}
            step={2}
            onChange={e => setHeight(e.target.value)}
          />
          <label htmlFor="width">Largura:</label>
          <input
            type="number"
            name="width"
            id="width"
            min={316}
            step={2}
            value={width}
            onChange={e => setWidth(e.target.value)}
          />
        </ButtonInput>
        {/* Container voltado para a demonstração da adaptação do tamanho do componente Button */}
        <Container height={height} width={width}>
          {/* O componente Button pode receber três props: color('primary','secondary'); icon(arrowRight, refresh, check); disabled(boolean) */}
          <Button
            color={selectedColor}
            icon={selectedIcon}
            disabled={isDisabled}
            onClick={null}
          >
            {buttonText}
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
  margin: 0 40px 25px;

  @media (max-width: 768px) {
    margin: 0 25px 10px;
    font-size: 18px;
  }
`

const Content = styled.div`
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
const ButtonInput = styled.div`
  margin-bottom: 25px;
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
