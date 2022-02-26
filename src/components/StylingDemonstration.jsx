import styled from 'styled-components'

export default function StylingDemonstration() {
  return (
    <Container>
      <Code>
        <img src="https://i.ibb.co/F6x0hBr/styling-component.png" alt="" />
        <img src="https://i.ibb.co/zRD9cJ2/styling-states.png" alt="" />
      </Code>
      <Text>
        A estilização do componente é realizada através da biblioteca
        Styled-Components, que permite a utilização de CSS-in-JS, oferecendo a
        possibilidade de utilização de lógica Javascript na seleção dos estilos
        a serem aplicados.
      </Text>
      <Text>
        Para controlar o tamanho do Button, foi definido um tamanho mínimo,
        através dos “min-width” e “min-height”, respeitando a orientação do
        teste. Além disso, foram adicionados “height: inherit” e “width:
        inherit”, para que o tamanho do Button seja alterado conforme seja
        inserido em um container de tamanho maior.
      </Text>
      <Text>
        O posicionamento do texto e ícone foi definido através do
        “justify-content” que, utilizando um operador ternário, verifica se o
        componente Button recebeu um ícone e se esse ícone é diferente de
        ‘none’. Quando a verificação retornar true, os itens são organizados
        pelo “space-between”, quando false, recebem “center”.
      </Text>
      <Text>
        A cor do texto é definida com base na props.color, sendo que quando
        “primary”, a cor é branca e quando diferente de “primary”, a cor é
        preta.
      </Text>
      <Text>
        A cor de fundo do botão é definida pela verificação. Se “primary”,
        recebe “#026C00, se “secondary”, recebe “#F7C346”. A cor de fundo também
        recebe alterações com base nos estados ativos do componente, sendo o
        hover, active e disabled.
      </Text>
      <br />
    </Container>
  )
}

const Container = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  padding: 45px;
`

const Code = styled.div`
  display: flex;
  justify-content: center;
  height: 65vh;
`
const Text = styled.p`
  line-height: 1.5;
  text-align: justify;
  padding: 10px 25px 0;
`
