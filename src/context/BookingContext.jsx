import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [selectedTrain, setSelectedTrain] = useState(null)
  const [selectedWagon, setSelectedWagon] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])

  // Додає місце або прибирає, якщо вже обране
  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.find(s => s.id === seat.id)
        ? prev.filter(s => s.id !== seat.id)
        : [...prev, seat]
    )
  }

  const resetBooking = () => {
    setSelectedWagon(null)
    setSelectedSeats([])
  }

  return (
    <BookingContext.Provider value={{
      selectedTrain, setSelectedTrain,
      selectedWagon, setSelectedWagon,
      selectedSeats, toggleSeat,
      resetBooking,
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
