import { useState } from 'react'
import { trains } from '../data/trains'
import TrainList from '../components/TrainList'
import styles from './Home.module.css'

function Home() {
  const [query, setQuery] = useState('')

  const filtered = trains.filter(({ from, to, number }) =>
    [from, to, number].some((v) =>
      v.toLowerCase().includes(query.toLowerCase())
    )
  )

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>▣</span>
          <span className={styles.logoText}>RAILWAY</span>
        </div>
        <span className={styles.version}>v1.0.0</span>
      </header>

      <div className={styles.page}>
        <div className={styles.top}>
          <div>
            <h1 className={styles.title}>Розклад потягів</h1>
            <p className={styles.sub}>
              Знайдено рейсів:{' '}
              <span className={styles.count}>{filtered.length}</span>
            </p>
          </div>

          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>_</span>
            <input
              className={styles.search}
              type="text"
              placeholder="місто або номер потяга..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <TrainList trains={filtered} />
      </div>
    </div>
  )
}

export default Home
