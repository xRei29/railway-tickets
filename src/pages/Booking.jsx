import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { trains } from '../data/trains'
import { useBooking } from '../context/BookingContext'
import WagonSelector from '../components/WagonSelector'
import SeatMap from '../components/SeatMap'
import BookingForm from '../components/BookingForm'
import styles from './Booking.module.css'

function Booking() {
  const { trainId } = useParams()
  const navigate = useNavigate()
  const { setSelectedTrain } = useBooking()

  // trainId з URL — рядок, приводимо до числа
  const train = trains.find(t => t.id === Number(trainId))

  useEffect(() => {
    if (train) setSelectedTrain(train)
  }, [train])

  if (!train) {
    return (
      <div className={styles.notFound}>
        <p>Рейс не знайдено</p>
        <button onClick={() => navigate('/')}>← На головну</button>
      </div>
    )
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <button className={styles.back} onClick={() => navigate('/')}>
          ← Назад
        </button>
        <span className={styles.logoText}>RAILWAY</span>
        <span className={styles.version}>v1.0.0</span>
      </header>

      <div className={styles.page}>
        <div className={styles.trainInfo}>
          <span className={styles.trainNumber}>№ {train.number}</span>
          <div className={styles.trainRoute}>
            <span>{train.from}</span>
            <span className={styles.arrow}>——→</span>
            <span>{train.to}</span>
          </div>
          <div className={styles.trainMeta}>
            <span>{train.date}</span>
            <span>{train.time}</span>
            <span>{train.duration}</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <WagonSelector wagons={train.wagons} />
            <SeatMap />
          </div>
          <div className={styles.right}>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
