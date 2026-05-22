const KEY = 'railway_bookings'

export function getBookings() {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}

export function saveBooking(booking) {
  const bookings = getBookings()
  const newBooking = {
    ...booking,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  }
  bookings.push(newBooking)
  localStorage.setItem(KEY, JSON.stringify(bookings))
  return newBooking
}
