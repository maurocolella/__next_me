import styled from 'styled-components'
import { containerBase } from '@/styles/componentGlobals'
import { Nav } from '@/components/Nav'

const Container = styled.header`
  height: 320px;
  text-align: center;
`

const Content = styled.div`
  ${containerBase}
  margin: auto;
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
