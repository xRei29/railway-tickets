import { useBooking } from '../context/BookingContext'
import styles from './WagonSelector.module.css'

function WagonSelector({ wagons }) {
  const { selectedWagon, setSelectedWagon, resetBooking } = useBooking()

  const handleSelect = (wagon) => {
    // Скидаємо місця при переключенні вагона
    resetBooking()
    setSelectedWagon(wagon)
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Оберіть вагон</h3>
      <div className={styles.buttons}>
        {wagons.map((wagon, index) => (
          <button
            key={wagon.id}
            className={`${styles.btn} ${selectedWagon?.id === wagon.id ? styles.active : ''}`}
            onClick={() => handleSelect(wagon)}
          >
            <span className={styles.num}>Вагон {index + 1}</span>
            <span className={styles.type}>{wagon.type}</span>
            <span className={styles.free}>
              {wagon.seats.filter(s => s.status === 'free').length} вільних
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default WagonSelector
