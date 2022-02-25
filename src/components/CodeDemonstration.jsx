import styled from 'styled-components'

export default function CodeDemonstration() {
  return (
    <Container>
      <h1>Demonstração do código do componente Button</h1>
      <br />
      <h2>Props</h2>
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
