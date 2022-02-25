import styled from 'styled-components'

export default function Container(props) {
  return (
    <Box height={props.height} width={props.width}>
      {props.children}
    </Box>
  )
}

/* hipótese em que o componente Button é inserido em uma div com tamanho maior*/
const Box = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
