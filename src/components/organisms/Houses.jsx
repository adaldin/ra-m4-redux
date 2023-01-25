import styled from "styled-components"
import { FlexBox, Grid } from "../../styles"
import { Button } from "../atoms"
import { BackCardHouse } from "./index"
import { useFetch } from "../../hooks/index"
import { urls } from "../../constants/index"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { incrementHouses } from "../../store/housesSlice"

// import { getHouses } from "../../store/housesSlice"

const HousesStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 650px) {
    width: 54%;
  }
`

function Houses() {
  // const dispatch = useDispatch()
  // const state = useSelector((state) => state.houses)
  // console.log("desde houses", state)
  const { isSuccess, isError, data, loading } = useFetch(urls.apartments)

  const houses = useSelector((state) => state.houses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(incrementHouses("new house de houses.jsx"))
    console.log(houses)
    console.log(data)
  }, [])

  return (
    <>
      {loading === "loading" && <p>Loading...</p>}
      {isError === "failed" && <p>There was an error..</p>}
      {isSuccess === "success" && (
        <HousesStyled gap="1rem">
          <Grid>
            {data.map((house) => {
              return (
                <BackCardHouse
                  image={house.url}
                  name={house.description}
                  text={house.price}
                  key={house.key}
                />
              )
            })}
          </Grid>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button text="Cargar más"></Button>
          </div>
        </HousesStyled>
      )}
    </>
  )
}

export default Houses
