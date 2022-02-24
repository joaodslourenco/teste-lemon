import styled from 'styled-components'

export default function Button(props) {
  return (
    <Botao
      color={props.color}
      icon={props.icon}
      disabled={props.disabled || !props.children}
      children={props.children}
    >
      {props.children}
      {!props.children && 'Não é possível criar um botão sem texto!'}
      <Icon>{props.children ? props.icon : null}</Icon>
    </Botao>
  )
}

const Botao = styled.button`
  display: flex;
  border: none;
  min-width: 311px;
  min-height: 56px;
  height: inherit;
  width: inherit;
  font-size: 16px;
  padding: 16px;
  align-items: center;
  cursor: pointer;
  visibility: ${props => (props.children ? 'visible' : 'hidden')};
  justify-content: ${props => (props.icon ? 'space-between' : 'center')};
  color: ${props => (props.color == 'primary' ? '#fff' : '#000')};
  background-color: ${props =>
    (props.color == 'primary' && '#026C00') ||
    (props.color == 'secondary' && '#F7C346')};

  &:hover {
    background-color: ${props =>
      (props.color == 'primary' && '#079504') ||
      (props.color == 'secondary' && '#FFDF77')};
  }

  &:active {
    background-color: ${props =>
      (props.color == 'primary' && '#013C00') ||
      (props.color == 'secondary' && '#DCAC0D')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props =>
      (props.color == 'primary' && '#B7D0B6') ||
      (props.color == 'secondary' && '#FFE58D')};
    color: ${props => props.color == 'secondary' && '#fff'};
  }
`

const Icon = styled.i`
  height: 18px;
  width: 18px;
  margin-left: ${props => props.icon && '16px'};
`
