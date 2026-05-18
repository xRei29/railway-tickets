import { useNavigate } from 'react-router-dom'
import styles from './TrainCard.module.css'

function TrainCard({ train }) {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>№ {train.number}</span>
        <span className={styles.duration}>{train.duration}</span>
      </div>

      <div className={styles.route}>
        <span className={styles.city}>{train.from}</span>
        <span className={styles.arrow}>——→</span>
        <span className={styles.city}>{train.to}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Дата</span>
          <span className={styles.infoValue}>{train.date}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Відправлення</span>
          <span className={styles.infoValue}>{train.time}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Вагонів</span>
          <span className={styles.infoValue}>{train.wagons.length}</span>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={() => navigate(`/booking/${train.id}`)}
      >
        Обрати місця →
      </button>
    </div>
  )
}

export default TrainCard
