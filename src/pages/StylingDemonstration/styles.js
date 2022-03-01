import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f7f7;
  height: 110vh;
  padding: 45px;
`

export const Code = styled.div`
  display: flex;
  justify-content: center;
  height: 55vh;

  @media (max-width: 1280px) {
    display: none;
  }
`
export const Text = styled.p`
  line-height: 1.5;
  text-align: justify;
  padding: 10px 25px 0;
`
