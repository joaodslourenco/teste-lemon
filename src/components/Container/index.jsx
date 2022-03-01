import { Box } from './styles'

export default function Container(props) {
  return (
    <Box height={props.height} width={props.width}>
      {props.children}
    </Box>
  )
}
