export const byCity = (house, city) => {
  if (!city) return true
  return house.city.includes(city)
}

export const byType = (house, type) => {
  if (!type) return true
  return house.type.includes(type)
}

export const filteredHouses = (house, type, city) => byCity(house, city) && byType(house, type)
