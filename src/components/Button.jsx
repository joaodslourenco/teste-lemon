import styled from 'styled-components'

export default function Button(props) {
  return <Botao color={props.color}>{props.children}</Botao>
}

const Botao = styled.button`
  margin-top: 50px;
  min-width: 311px;
  min-height: 56px;
  height: inherit;
  width: inherit;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  background-color: ${props =>
    (props.color == 'primary' && '#026C00') ||
    (props.color == 'secondary' && '#F7C346') ||
    ((props.color == 'primary') & props.disabled && '#B7D0B6')(
      (props.color == 'secondary') & props.disabled && '#FFE58D'
    )};

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
`
