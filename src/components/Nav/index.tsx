import Link from 'next/link'
import styles from './Nav.module.scss'

type NavEntry = {
  text: string
  link: string
}

export const Nav: React.FC<{ entries: NavEntry[] }> = ({ entries }) => (
  <nav className={styles.nav}>
    {entries.length !== 0 && <ul className={styles.wrapper}>
      {entries.map((entry, index) => (
        <li className={styles.entry} key={index}>
          <Link className={styles.link} href={entry.link}>{entry.text}</Link>
        </li>
      ))}
    </ul>}
  </nav>
)
