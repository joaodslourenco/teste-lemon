import styled from 'styled-components'
import Button from './Button'

export default function VisualRequirements() {
  return (
    <Container>
      <h1>Requisitos visuais</h1>
      <br />
      <h2>Props</h2>
      <br />
      <h3>color</h3>
      <ButtonsRow>
        <Button color="primary">Text</Button>
        <Button color="primary" disabled>
          Text
        </Button>
      </ButtonsRow>
      <ButtonsRow>
        <Button color="secondary">Text</Button>
        <Button color="secondary" disabled>
          Text
        </Button>
      </ButtonsRow>
      <h3>icon</h3>
      <ButtonsRow>
        <Button icon="arrow-right">Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
        <Button>Text</Button>
      </ButtonsRow>
      <h3>disabled</h3>
      <ButtonsRow>
        <Button>Text</Button>
        <Button disabled>Text</Button>
      </ButtonsRow>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #594544;
  color: #fff;
  padding: 50px;
`
const ButtonsRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
`
