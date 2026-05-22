import { useBooking } from '../context/BookingContext'
import styles from './SeatMap.module.css'

function SeatMap() {
  const { selectedWagon, selectedSeats, toggleSeat } = useBooking()

  if (!selectedWagon) {
    return <p className={styles.hint}>Оберіть вагон щоб побачити місця</p>
  }

  // 'booked' — заброньоване, 'selected' — обране зараз, 'free' — вільне
  const getStatus = (seat) => {
    if (seat.status === 'booked') return 'booked'
    if (selectedSeats.find(s => s.id === seat.id)) return 'selected'
    return 'free'
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Схема місць — {selectedWagon.type}</h3>

      <div className={styles.legend}>
        <span className={styles.lFree}>Вільне</span>
        <span className={styles.lSelected}>Обране</span>
        <span className={styles.lBooked}>Заброньоване</span>
      </div>

      <div className={styles.grid}>
        {selectedWagon.seats.map(seat => {
          const status = getStatus(seat)
          return (
            <button
              key={seat.id}
              disabled={status === 'booked'}
              className={`${styles.seat} ${styles[status]}`}
              onClick={() => toggleSeat(seat)}
              title={`Місце №${seat.id}`}
            >
              {seat.id}
            </button>
          )
        })}
      </div>

      {selectedSeats.length > 0 && (
        <p className={styles.chosen}>
          Обрано: <strong>{selectedSeats.map(s => `№${s.id}`).join(', ')}</strong>
        </p>
      )}
    </div>
  )
}

export default SeatMap
