import { arrowRight, Botao, check, Icon, refresh } from './styles'

export default function Button(props) {
  const iconSelected = {
    none: null,
    'arrow-right': arrowRight,
    refresh: refresh,
    check: check
  }

  if (!props.children) {
    return null
  }

  return (
    <Botao
      color={props.color || 'primary'}
      icon={props.icon}
      disabled={props.disabled || !props.children}
      children={props.children}
      onClick={props.onClick}
    >
      {props.children}
      <Icon>{props.children ? iconSelected[props.icon] : null}</Icon>
    </Botao>
  )
}
