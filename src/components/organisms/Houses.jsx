import styled from "styled-components"
import { colors, FlexBox, Grid } from "../../styles"
import { Button } from "../atoms"
import { BackCardHouse } from "./index"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getHouses } from "../../store/housesSlice"
import { filteredHouses } from "../../utils/index"

const HousesStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 650px) {
    width: 54%;

    ${Button}:disabled {
      background-color: ${colors.lightGrey};
      opacity: 0.3;
    }
  }
`

function Houses() {
  const dispatch = useDispatch()
  const { houses, loadMore, reqStatus } = useSelector((state) => state.houses)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(getHouses({ page: currentPage, max: 9 }))
  }, [dispatch, currentPage])

  return (
    <>
      {reqStatus === "loading" && <p>There was an error</p>}
      {reqStatus === "failed" && <p></p>}
      {reqStatus === "success" && (
        <HousesStyled gap="1rem">
          <Grid>
            {houses.allIds
              .filter((id) => filteredHouses(houses.byId[id], houses.byCity, houses.byType))
              .map((id) => (
                <BackCardHouse
                  key={id}
                  image={houses.byId[id].url}
                  name={houses.byId[id].description}
                  text={houses.byId[id].price}
                />
              ))}
          </Grid>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              text="Cargar más"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={!loadMore ? true : false}
            ></Button>
          </div>
        </HousesStyled>
      )}
    </>
  )
}

export default Houses
