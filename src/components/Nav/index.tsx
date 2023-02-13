import { containerBase } from '@/styles/componentGlobals'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.nav`
  background-color: white;
  box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 2;
`

const Wrapper = styled.ul`
  ${containerBase}
  color: #444;
  display: flex;
  min-height: 52px;
  list-style-type: none;
`

const Entry = styled.li`
  flex: 1;
`

const NavLink = styled(Link)`
  align-items: center;
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`

type NavEntry = {
  text: string
  link: string
}

export const Nav: React.FC<{ entries: NavEntry[] }> = ({ entries }) => (
  <Container>
    {entries.length !== 0 && <Wrapper>
      {entries.map((entry, index) => (
        <Entry key={index}>
          <NavLink href={entry.link}>{entry.text}</NavLink>
        </Entry>
      ))}
    </Wrapper>}
  </Container>
)
