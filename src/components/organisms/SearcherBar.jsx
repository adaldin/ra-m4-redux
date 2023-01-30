import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHouses, setHousesByCity, setHousesByType } from "../../store/housesSlice"
import { FlexBox } from "../../styles"
import { handleOptions } from "../../utils"
import { Button } from "../atoms"
import { SelectGroup } from "../molecules"

function SearcherBar() {
  const houses = useSelector((state) => state.houses.houses)
  const dispatch = useDispatch()
  const [categoryFilter, setCategoryFilter] = useState({})

  const handleChange = (event) => {
    setCategoryFilter((prevCategoryFilter) => {
      const newCategory = { ...prevCategoryFilter }
      newCategory[event.target.id] = event.target.value
      return newCategory
    })
  }

  const handleClick = () => {
    dispatch(setHousesByCity(categoryFilter.city))
    dispatch(setHousesByType(categoryFilter.type))
  }

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <FlexBox direction="row" gap="1rem" align="center">
      <SelectGroup
        id="city"
        label="Ciudad"
        defaultText="Madrid, Barcelona o Zaragoza..."
        hidden={false}
        options={handleOptions(houses.cities)}
        onChange={handleChange}
      />
      <SelectGroup
        id="type"
        label="Tipo"
        defaultText="Piso, chalet o garaje..."
        hidden={false}
        options={handleOptions(houses.types)}
        onChange={handleChange}
      />

      <Button
        icon="search"
        iconStyles={{
          fill: 0,
          size: 20,
        }}
        className="blue-gradient"
        buttonStyles={{
          width: "30px",
          height: "30px",
        }}
        onClick={handleClick}
      />
      <Button
        // TODO: btn to clear filters
        icon="clear"
        iconStyles={{
          fill: 0,
          size: 20,
        }}
        className="red-gradient"
        buttonStyles={{
          width: "30px",
          height: "30px",
        }}
      />
    </FlexBox>
  )
}

export default SearcherBar
