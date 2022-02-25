import styled from 'styled-components'

export default function PropsSelection(props) {
  return (
    <PropsGroup>
      <Text>
        Selecione abaixo as <span style={{ fontStyle: 'italic' }}>props </span>
        desejadas para o componente Button.
      </Text>
      <PropsSelector>
        <input type="radio" id="primary" name="colorprop" value="Primary" />
        <label htmlFor="primary">Primary</label>
        <input type="radio" id="secondary" name="colorprop" value="Secondary" />
        <label htmlFor="secondary">Secondary</label>
      </PropsSelector>
      <PropsSelector>
        <input type="radio" id="none" name="icon" value="none" />
        <label htmlFor="none">none</label>
        <input type="radio" id="arrow-right" name="icon" value="arrow-right" />
        <label htmlFor="arrow-right">arrow-right</label>
        <input type="radio" id="refresh" name="icon" value="refresh" />
        <label htmlFor="refresh">refresh</label>
        <input type="radio" id="check" name="icon" value="check" />
        <label htmlFor="check">check</label>
      </PropsSelector>
      <PropsSelector>
        <input type="checkbox" id="disabled" name="disabled" value="disabled" />
        <label htmlFor="disabled">Disable?</label>
      </PropsSelector>
    </PropsGroup>
  )
}

const PropsGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`
const PropsSelector = styled.div`
  display: flex;
  align-content: center;
  margin: 15px;
  justify-content: center;

  input {
    margin: 5px;
  }
`

const Text = styled.p`
  margin-bottom: 30px;
`
