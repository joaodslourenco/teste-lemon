import styled from 'styled-components'

export const Botao = styled.button`
  display: flex;
  border: none;
  min-width: 311px;
  min-height: 56px;
  height: inherit;
  width: inherit;
  font-size: 16px;
  text-align: center;
  padding: 16px;
  align-items: center;
  cursor: pointer;
  transition: all 150ms;
  justify-content: ${props =>
    props.icon && props.icon !== 'none' ? 'space-between' : 'center'};
  color: ${props => (props.color === 'primary' ? '#fff' : '#000')};
  background-color: ${props =>
    (props.color === 'primary' && '#026C00') ||
    (props.color === 'secondary' && '#F7C346')};

  &:hover {
    background-color: ${props =>
      (props.color === 'primary' && '#079504') ||
      (props.color === 'secondary' && '#FFDF77')};
  }

  &:active {
    background-color: ${props =>
      (props.color === 'primary' && '#013C00') ||
      (props.color === 'secondary' && '#DCAC0D')};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${props =>
      (props.color === 'primary' && '#B7D0B6') ||
      (props.color === 'secondary' && '#FFE58D')};
    color: ${props => props.color === 'secondary' && '#fff'};
  }
`

export const Icon = styled.i`
  height: 18px;
  width: 18px;
  min-height: 18px;
  min-width: 18px;
  margin-left: ${props => props.icon && '16px'};
`

export const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>arrow-right</title>

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
)

export const check = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>check</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
)

export const refresh = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>refresh</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)
