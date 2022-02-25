import styled from 'styled-components'

export default function TestRequirements() {
  return (
    <Container>
      <Title>Requisitos do teste</Title>
      <Text>
        O teste consiste na criação do componente Button, que irá compor a
        biblioteca de UI da empresa Lemon Energia.
      </Text>
      <Text>
        Para a presente solução, foram utilizadas as bibliotecas React,
        React-DOM e Styled-Components
      </Text>
      <SubTitle>Tarefa</SubTitle>
      <Text>
        O componente Button deve receber as seguintes props, com os respectivos
        valores:
      </Text>
      <List>
        <li>
          <code>color</code> (string) – Valores possíveis: primary, secondary.
          Default: primary;
        </li>
        <li>
          <code>Icon</code> (string) – Valores possíveis: arrow-right, check,
          refresh;
        </li>
        <li>
          <code>Disabled</code> (boolean) – Valores possíveis: true, false.
          Default: false;
        </li>
        <li>
          <code>onClick</code> (function) – Valores possíveis: função a ser
          chamada no evento Click.
        </li>
      </List>
      <br />
      <Text>
        Além disso, o componente Button deve ser alterado conforme os seguintes
        Estados:
      </Text>
      <List>
        <li>
          <code>:hover</code> – quando o mouse passar por cima do botão;
        </li>
        <li>
          <code>:active</code> – quando o botão estiver sendo pressionado;
        </li>
        <li>
          <code>:disabled</code> – quando o botão estiver desabilitado através
          da prop disabled.
        </li>
      </List>
      <TaskListIcon
        src="https://www.pngitem.com/pimgs/m/571-5717473_to-do-list-checklist-clipart-hd-png-download.png"
        alt=""
      />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`
const Title = styled.h1`
  margin-bottom: 20px;
`
const SubTitle = styled.h2`
  margin-bottom: 15px;
`
const Text = styled.p`
  margin-bottom: 15px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
const TaskListIcon = styled.img`
  position: absolute;
  right: 80px;
  top: 60px;
  height: 250px;

  @media (max-width: 1240px) {
    visibility: hidden;
  }
`
