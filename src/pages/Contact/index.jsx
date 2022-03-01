import { ContactBox, Container, ProfilePic } from './styles'

export default function Contact() {
  return (
    <Container>
      <h1>Obrigado pela atenção!</h1>
      <ContactBox>
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
      </ContactBox>
    </Container>
  )
}
