import styled from 'styled-components'

export default function CodeDemonstration() {
  return (
    <Container>
      <ButtonCode
        src="https://i.ibb.co/MBWhyy9/button-component.png"
        alt="button"
      />
      <div>
        <Title>Demonstração do código do componente Button</Title>
        {/*usar display grid */}
        <br />
        <Text>
          Conforme os requisitos, o componente Button recebe as seguintes props:
        </Text>
        <br />
        <ul>
          <li>
            Color: recebe a cor indicada no componente pai e, quando não
            indicada, recebe 'primary' por padrão.
          </li>
          <li>
            Icon: recebe o ícone indicado no componente pai, quando houver.
          </li>
          <li>
            Disabled (boolean): sendo um boolean, somente é ativada quando
            declarada. Também é ativada quando o botão não tiver conteúdo
            (!props.children)
          </li>
          <li>
            onClick (function): recebe uma função através do componente pai.
          </li>
        </ul>
        <br />
        <Text>
          Button recebe o conteúdo de texto através do props.children. Caso não
          receba texto, o componente retornará uma mensagem de erro.
          (props.children && "Não é possível criar um botão sem texto"). Observe
          que o operador && faz a verificação se o primeiro argumento é true e,
          em caso positivo, retorna a string que informa o erro.
        </Text>
        <br />
        <Text>
          Dentro do componente Button existe um ícone (elemento HTML 'i') que,
          através de um operador ternário, verifica a existência de conteúdo no
          componente Button. Em caso positivo, é acionada a função iconSelected,
          passando a string do ícone selecionado, que retorna uma variável que
          armazena o SVG do ícone solicitado.
        </Text>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #594544;
  color: #fff;
  padding: 42px;
  position: relative;
`

const Title = styled.h1`
  /* position: absolute;
  top: 45px;
  right: 60px;
  width: 600px; */

  @media (min-width: 1368px) {
    width: 50%;
  }
`

const ButtonCode = styled.img`
  height: 100%;
  /* height: 80%;

  @media (min-width: 768px) {
    height: 100%;
  } */
`

const Text = styled.p`
  line-height: 1.5;
  text-align: justify;
`
