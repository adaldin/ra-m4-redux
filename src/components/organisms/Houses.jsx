import styled from "styled-components"
import { FlexBox, Grid } from "../../styles"
import { Button } from "../atoms"
import { BackCardHouse } from "./index"
import { useFetch } from "../../hooks/index"
import { urls } from "../../constants/index"

const HousesStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 650px) {
    width: 54%;
  }
`

function Houses() {
  const { isSuccess, isError, data, loading } = useFetch(urls.apartments)

  return (
    <>
      {loading && <p>Loading...</p>}
      {isError && <p>There was an error..</p>}
      {isSuccess && (
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
