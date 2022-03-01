import styled from 'styled-components'

export default function StylingDemonstration() {
  return (
    <Container>
      <Code>
        <img
          src="/images/styling-demonstration-1.jpg"
          alt="styling-demonstration-1"
        />
        <img
          src="/images/styling-demonstration-2.jpg"
          alt="styling-demonstration-2"
        />
      </Code>
      <Text>
        A estilização do componente é realizada através da biblioteca
        <strong> Styled-Components</strong>, que permite a utilização de
        CSS-in-JS, oferecendo a possibilidade de utilização de lógica Javascript
        na seleção dos estilos a serem aplicados.
      </Text>
      <Text>
        Para controlar o tamanho do Button, foi definido um tamanho mínimo,
        através dos <code> min-width</code> e <code> min-height</code>,
        respeitando a orientação do teste. Além disso, foram adicionados{' '}
        <code>height: inherit</code> e <code>width: inherit</code>, para que o
        tamanho do Button seja alterado conforme o tamanho do container em que
        estiver inserido.
      </Text>
      <Text>
        O posicionamento do texto e ícone foi definido através do{' '}
        <code>justify-content</code> que, utilizando um operador ternário,
        verifica se o componente Button recebeu um ícone e se esse ícone é
        diferente de <code>none</code>. Quando a verificação retornar{' '}
        <code>true</code>, os itens são organizados pelo{' '}
        <code>space-between</code>, quando <code>false</code>, recebem{' '}
        <code>center</code>.
      </Text>
      <Text>
        A cor do texto é definida com base na <code>props.color</code>, sendo
        que, quando <code>primary</code>, a cor é branca e quando diferente de
        <code>primary</code>, a cor é preta. Observe que, quando presentes{' '}
        <code>props.color: secondary</code> e <code>disabled</code>, a{' '}
        <code>color</code> passa a ser branca, conforme demonstrado no Figma.
      </Text>
      <Text>
        A cor de fundo do botão é definida através de verificação. Se{' '}
        <code>primary</code>, recebe <code>#026C00</code>, se{' '}
        <code>secondary</code>, recebe <code>#F7C346</code>. A cor de fundo
        também recebe alterações com base nos estados ativos do componente,
        sendo o <code>:hover</code>, <code>:active</code> e{' '}
        <code>disabled</code>.
      </Text>
      <br />
    </Container>
  )
}

const Container = styled.div`
  background-color: #f7f7f7;
  height: 110vh;
  padding: 45px;
`

const Code = styled.div`
  display: flex;
  justify-content: center;
  height: 55vh;

  @media (max-width: 1280px) {
    display: none;
  }
`
const Text = styled.p`
  line-height: 1.5;
  text-align: justify;
  padding: 10px 25px 0;
`
