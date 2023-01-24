import styled from "styled-components"
import { colors, FlexBox } from "../../styles"
import map from "../../assets/images/map.png"

const StyledMap = styled(FlexBox)`
  border-radius: 0.4rem;
  width: 100%;
  height: 80vh;
  border: 1px solid ${colors.main};
  background-image: url(${map});
  background-size: cover;
  background-position: center;
  margin-top: 1rem;

  @media (min-width: 650px) {
    width: 45%;
    margin-top: 0rem;
  }
`

function Map() {
  return <StyledMap align="center" justify="center"></StyledMap>
}

export default Map
