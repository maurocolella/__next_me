import styled from 'styled-components'
import { containerBase } from '@/styles/componentGlobals'

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
    <nav>
      Nav
    </nav>
  </Container>
)
