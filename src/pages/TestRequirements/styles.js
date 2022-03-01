import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`
export const Title = styled.h1`
  margin-bottom: 20px;
`
export const SubTitle = styled.h2`
  margin-bottom: 15px;
`
export const Text = styled.p`
  margin-bottom: 15px;
  max-width: 70vw;
  line-height: 1.5;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
`
export const TaskListIcon = styled.img`
  position: absolute;
  right: 80px;
  top: 60px;
  height: 250px;

  @media (max-width: 1240px) {
    visibility: hidden;
  }
`
