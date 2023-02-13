import Link from "next/link"

export type NavLink = {
  text: string
  link: string
}

export const Nav: React.FC<{ entries: NavLink[] }> = ({ entries }) => (
  <nav>
    {entries.length !== 0 && <ul>
      {entries.map((entry, index) => (
        <li key={index}>
          <Link href={entry.link}>{entry.text}</Link>
        </li>
      ))}
    </ul>}
  </nav>
)
