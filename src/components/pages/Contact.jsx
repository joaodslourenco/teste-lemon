import styled from 'styled-components'

export default function Contact() {
  return (
    <Container>
      <h1>Obrigado pela atenção!</h1>
      <Box>
        <ProfilePic
          src="https://avatars.githubusercontent.com/u/90736469?v=4"
          alt=""
        />
        <div>
          <p>Estou à disposição através dos seguintes contatos:</p>
          <br />
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/joaodslourenco/">
              https://www.linkedin.com/in/joaodslourenco/
            </a>
          </p>
          <p>
            E-mail:{' '}
            <a href="mailto: joaodslourenco@gmail.com">
              joaodslourenco@gmail.com
            </a>
          </p>
        </div>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #594544;
  color: #fff;
`

const ProfilePic = styled.img`
  height: 250px;
  border-radius: 100%;
`

const Box = styled.div`
  display: flex;
  padding: 50px;
  gap: 30px;
  align-items: center;
`
