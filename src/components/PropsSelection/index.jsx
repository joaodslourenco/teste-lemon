import { PropsGroup, PropsSelector, Text } from './styles'

export default function PropsSelection(props) {
  function onColorSelection(color) {
    props.colorSelected(color)
  }

  function onIconSelection(icon) {
    props.iconSelected(icon)
  }

  function onDisableSelection(disableToggle) {
    props.disableSelected(disableToggle)
  }

  return (
    <PropsGroup>
      <Text>
        Selecione abaixo as <span style={{ fontStyle: 'italic' }}>props </span>
        desejadas para o componente Button.
      </Text>
      <PropsSelector>
        <input
          type="radio"
          id="primary"
          name="colorprop"
          value="primary"
          defaultChecked
          onClick={e => onColorSelection(e.target.value)}
        />
        <label htmlFor="primary">Primary</label>
        <input
          type="radio"
          id="secondary"
          name="colorprop"
          value="secondary"
          onClick={e => onColorSelection(e.target.value)}
        />
        <label htmlFor="secondary">Secondary</label>
      </PropsSelector>
      <PropsSelector>
        <input
          type="radio"
          id="none"
          name="icon"
          value="none"
          defaultChecked
          onClick={e => onIconSelection(e.target.value)}
        />
        <label htmlFor="none">none</label>
        <input
          type="radio"
          id="arrow-right"
          name="icon"
          value="arrow-right"
          onClick={e => onIconSelection(e.target.value)}
        />
        <label htmlFor="arrow-right">arrow-right</label>
        <input
          type="radio"
          id="refresh"
          name="icon"
          value="refresh"
          onClick={e => onIconSelection(e.target.value)}
        />
        <label htmlFor="refresh">refresh</label>
        <input
          type="radio"
          id="check"
          name="icon"
          value="check"
          onClick={e => onIconSelection(e.target.value)}
        />
        <label htmlFor="check">check</label>
      </PropsSelector>
      <PropsSelector>
        <input
          type="checkbox"
          id="disabled"
          name="disabled"
          value="disabletoggle"
          onChange={e => onDisableSelection(e.target.checked)}
          //onClick={e => onDisableSelection(e)}
        />
        <label htmlFor="disabled">Disable?</label>
      </PropsSelector>
    </PropsGroup>
  )
}
