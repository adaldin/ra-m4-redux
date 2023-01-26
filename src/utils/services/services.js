export const byCity = (house, city) => {
  if (!city) return true
  return house.city.includes(city)
}

export const byType = (house, type) => {
  if (!type) return true
  return house.type.includes(type)
}

export const filteredHouses = (house, city, type) => byCity(house, city) && byType(house, type)

export const handleOptions = (category) => {
  let newOptionsArr = category.map((option) => {
    return {
      value: option,
      text: `${option.charAt(0).toUpperCase()}${option.slice(1)}`,
    }
  })

  return newOptionsArr
}
