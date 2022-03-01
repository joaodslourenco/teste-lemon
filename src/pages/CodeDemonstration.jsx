import styled from 'styled-components'

export default function CodeDemonstration() {
  return (
    <Container>
      <ButtonCode src="/images/code-demonstration.jpg" alt="button" />
      <div>
        <Title>Demonstração do código do componente Button</Title>
        <br />
        <Text>
          Conforme os requisitos, o componente Button recebe as seguintes props:
        </Text>
        <br />
        <ul>
          <li>
            <code>Color</code>: recebe a cor indicada no componente pai e,
            quando não indicada, recebe 'primary' por padrão.
          </li>
          <li>
            <code>Icon</code>: recebe o ícone indicado no componente pai, quando
            houver.
          </li>
          <li>
            <code>Disabled</code> (boolean): sendo um boolean, somente é ativada
            quando declarada.
          </li>
          <li>
            <code>onClick</code> (function): recebe uma função através do
            componente pai.
          </li>
        </ul>
        <br />
        <Text>
          Button recebe o conteúdo de texto através do{' '}
          <code>props.children</code>. Caso não receba texto, o componente
          retorna <code>null</code>, deixando de ser exibido.
        </Text>
        <br />
        <Text>
          Dentro do componente Button existe um ícone (elemento HTML{' '}
          <code>i</code>) que, através de um operador ternário, verifica a
          existência de conteúdo no componente Button. Em caso positivo, é
          acessado o Objeto <code>iconSelected</code> que, a partir da string
          declarada, retorna a variável que armazena o SVG do ícone solicitado.
        </Text>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #594544;
  color: #fff;
  padding: 42px;
  position: relative;
  gap: 30px;
`

const Title = styled.h1`
  width: 100%;
  padding-bottom: 30px;
`

const ButtonCode = styled.img`
  @media (max-width: 1300px) {
    display: none;
  }
`

const Text = styled.p`
  line-height: 1.5;
  text-align: justify;
`
