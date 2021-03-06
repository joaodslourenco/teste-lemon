import { Container, List, SubTitle, TaskListIcon, Text, Title } from './styles'

export default function TestRequirements() {
  return (
    <Container>
      <Title>Requisitos do teste</Title>
      <Text>
        O teste consiste na criação do componente Button, que irá compor a
        biblioteca de UI da empresa Lemon Energia. As orientações acerca da
        estilização referente às props e Estados podem ser encontradas através
        do seguinte{' '}
        <a href="https://www.figma.com/file/voCavm7qKW13vTfdDxinIX/Lemon---Teste-Frontend---Button?node-id=0%3A1">
          link
        </a>
        .
      </Text>
      <Text>
        Para a presente solução, foram utilizadas as bibliotecas React,
        React-DOM e Styled-Components.
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
      <TaskListIcon src="images/task-list.png" alt="task-list" />
      <br />
      <Text>
        O cumprimento dos requisitos do teste pode ser aferido na página acima.
      </Text>
    </Container>
  )
}
