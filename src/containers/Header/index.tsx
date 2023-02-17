import { Nav } from '@/components/Nav'
import Logo from '@/components/Logo/Logo'
import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles.header}>
    <section className={styles.content}>
      <h1>
        <Logo />
        <div style={{ display: 'none' }}>Mauro Colella</div>
      </h1>
    </section>
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
  </header>
)
