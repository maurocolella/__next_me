import styled from 'styled-components'
import { containerBase } from '@/styles/componentGlobals'
import { Nav } from '@/components/Nav'

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
  flex: 1;
  padding: 24px;
  z-index: 2;
`

export const Header = () => (
  <Container>
    <Content>
      <h1>Mauro Colella</h1>
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
