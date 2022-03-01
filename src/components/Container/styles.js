import styled from 'styled-components'

/* hipótese em que o componente Button é inserido em uma div com tamanho maior*/
export const Box = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
