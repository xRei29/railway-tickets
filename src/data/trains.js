function generateSeats(total, bookedIds = []) {
  return Array.from({ length: total }, (_, i) => ({
    id: i + 1,
    status: bookedIds.includes(i + 1) ? 'booked' : 'free',
  }))
}

export const trains = [
  {
    id: 1,
    number: "743К",
    from: "Київ",
    to: "Львів",
    date: "2025-06-01",
    time: "08:30",
    duration: "5год 40хв",
    wagons: [
      { id: 1, type: "Купе", seats: generateSeats(36, [2, 5, 10]) },
      { id: 2, type: "Плацкарт", seats: generateSeats(54, [1, 7, 20]) },
      { id: 3, type: "СВ", seats: generateSeats(18, [4, 9]) },
    ],
  },
  {
    id: 2,
    number: "091Л",
    from: "Львів",
    to: "Одеса",
    date: "2025-06-01",
    time: "14:15",
    duration: "11год 20хв",
    wagons: [
      { id: 1, type: "Плацкарт", seats: generateSeats(54, [5, 12, 30]) },
      { id: 2, type: "Купе", seats: generateSeats(36, [2, 8]) },
    ],
  },
  {
    id: 3,
    number: "145Л",
    from: "Харків",
    to: "Київ",
    date: "2025-06-02",
    time: "07:00",
    duration: "4год 50хв",
    wagons: [
      { id: 1, type: "Купе", seats: generateSeats(36, [1, 6]) },
      { id: 2, type: "СВ", seats: generateSeats(18, [3, 7]) },
    ],
  },
  {
    id: 4,
    number: "201Л",
    from: "Київ",
    to: "Запоріжжя",
    date: "2025-06-02",
    time: "09:45",
    duration: "6год 10хв",
    wagons: [
      { id: 1, type: "Плацкарт", seats: generateSeats(54, [4, 22, 40]) },
      { id: 2, type: "Плацкарт", seats: generateSeats(54, [2, 15]) },
    ],
  },
  {
    id: 5,
    number: "334К",
    from: "Дніпро",
    to: "Львів",
    date: "2025-06-03",
    time: "22:10",
    duration: "12год 30хв",
    wagons: [
      { id: 1, type: "Купе", seats: generateSeats(36, [3, 18]) },
      { id: 2, type: "СВ", seats: generateSeats(18, [1, 5]) },
    ],
  },
  {
    id: 6,
    number: "512Л",
    from: "Київ",
    to: "Чернівці",
    date: "2025-06-04",
    time: "16:00",
    duration: "8год 15хв",
    wagons: [
      { id: 1, type: "Купе", seats: generateSeats(36, [6, 12]) },
      { id: 2, type: "Купе", seats: generateSeats(36, [3, 21]) },
    ],
  },
]
