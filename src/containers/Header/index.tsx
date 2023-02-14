import styled from 'styled-components'
import { containerBase } from '@/styles/componentGlobals'
import { Nav } from '@/components/Nav'
import Logo from '@/components/Logo/Logo'

const Container = styled.header`
  background-color: #04324a;
  box-sizing: border-box;
  color: #eee;
  display: flex;
  flex-direction: column;
  height: 360px;
  text-align: center;
`

const Content = styled.div`
  ${containerBase}
  background-color: rgba(0, 12, 27, 0.45);
  border-radius: 20px 20px 0 0;
  flex: 1;
  margin-top: 10px;
  padding: 24px;
  text-align: left;
  z-index: 2;
`

export const Header = () => (
  <Container>
    <Content>
      <h1>
        <Logo />
        <div style={{ display: 'none' }}>Mauro Colella</div>
      </h1>
    </Content>
    <Nav entries={[
      {
        text: 'About',
        link: '/about',
      },
      {
        text: 'Resume',
        link: '/resume',
      }
    ]} />
  </Container>
)
