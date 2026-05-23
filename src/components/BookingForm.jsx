import { useState } from 'react'
import { useBooking } from '../context/BookingContext'
import { saveBooking } from '../services/BookingService'
import { toast } from 'react-toastify'
import styles from './BookingForm.module.css'

function BookingForm() {
  const { selectedTrain, selectedWagon, selectedSeats, resetBooking } = useBooking()

  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Введіть коректне ім'я (мінімум 2 символи)"
    if (!/^\+?[\d\s\-]{10,15}$/.test(form.phone))
      e.phone = 'Введіть коректний номер телефону'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Введіть коректний email'
    return e
  }

  const handleSubmit = () => {
    if (!selectedWagon) { toast.error('Спочатку оберіть вагон'); return }
    if (selectedSeats.length === 0) { toast.error('Оберіть хоча б одне місце'); return }

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    saveBooking({
      train: `${selectedTrain.number} ${selectedTrain.from}–${selectedTrain.to}`,
      wagon: `${selectedWagon.type} (вагон ${selectedWagon.id})`,
      seats: selectedSeats.map(s => s.id),
      passenger: form,
    })

    toast.success(`Квиток заброньовано! Місця: ${selectedSeats.map(s => `№${s.id}`).join(', ')}`)
    setForm({ name: '', phone: '', email: '' })
    setErrors({})
    resetBooking()
  }

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Дані пасажира</h3>

      <div className={styles.field}>
        <label className={styles.label}>Ім'я та прізвище</label>
        <input
          className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
          placeholder="Іваненко Іван"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Телефон</label>
        <input
          className={`${styles.input} ${errors.phone ? styles.errorInput : ''}`}
          placeholder="+380 99 123 45 67"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input
          className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
          placeholder="example@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <button className={styles.submit} onClick={handleSubmit}>
        Забронювати квиток →
      </button>
    </div>
  )
}

export default BookingForm
