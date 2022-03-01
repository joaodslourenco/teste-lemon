import { useState } from 'react'
import { Background, ButtonInput, Content, Title } from './styles'
import PropsSelection from '../../components/PropsSelection'
import Container from '../../components/Container'
import Button from '../../components/Button'

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
    setSelectedIcon(icon)
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
