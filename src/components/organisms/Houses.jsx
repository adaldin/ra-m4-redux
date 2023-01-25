import styled from "styled-components"
import { FlexBox, Grid } from "../../styles"
import { Button } from "../atoms"
import { BackCardHouse } from "./index"
import { useFetch } from "../../hooks/index"
import { urls } from "../../constants/index"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getHouses } from "../../store/houses.slice"

const HousesStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 650px) {
    width: 54%;
  }
`

function Houses() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.houses)
  // console.log("desde houses", state)
  // const { isSuccess, isError, data, loading } = useFetch(urls.apartments)

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <>
      {state.reqStatus === "loading" && <p>Loading...</p>}
      {state.reqStatus === "failed" && <p>There was an error..</p>}
      {state.reqStatus === "success" && (
        <HousesStyled gap="1rem">
          <Grid>
            {state.houses.map((house) => {
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
