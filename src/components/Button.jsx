import styled from 'styled-components'

export default function Button(props) {
  return (
    <Botao color={props.color} icon={props.icon} disabled={props.disabled}>
      {props.children}
      <Icon>{props.children ? props.icon : null}</Icon>
    </Botao>
  )
}

const Botao = styled.button`
  display: flex;
  margin-top: 50px;
  min-width: 311px;
  min-height: 56px;
  height: inherit;
  width: inherit;
  font-size: 16px;
  padding: 16px;
  align-items: center;
  justify-content: ${props => (props.icon ? 'space-between' : 'center')};
  color: ${props =>
    props.color == 'primary' || (props.color == 'secondary' && props.disabled)
      ? '#fff'
      : '#000'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${props =>
    (props.color == 'primary' && props.disabled ? '#B7D0B6' : null) ||
    (props.color == 'secondary' && props.disabled ? '#FFE58D' : null) ||
    (props.color == 'primary' && '#026C00') ||
    (props.color == 'secondary' && '#F7C346')};

  &:hover {
    background-color: ${props =>
      !props.disabled
        ? (props.color == 'primary' && '#079504') ||
          (props.color == 'secondary' && '#FFDF77')
        : null};
  }

  &:active {
    background-color: ${props =>
      (props.color == 'primary' && '#013C00') ||
      (props.color == 'secondary' && '#DCAC0D')};
  }
`

const Icon = styled.i`
  height: 18px;
  width: 18px; ;
`
