import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../styles"
import FlexBox from "../../styles/FlexBox"
import { paths } from "../../constants/index"

const MenuStyled = styled(FlexBox)`
  list-style-type: none;
  gap: 1rem;
  a:link {
    li {
      color: ${colors.font.base};
      &:hover {
        color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
      }
    }
`
export function Menu() {
  return (
    <MenuStyled as="ul" direction="row" justify="end" hoverColor={colors.main}>
      <Link to={paths.home.url}>
        <li>{paths.home.label} </li>
      </Link>
      <Link to={paths.data.url}>
        <li>{paths.data.label}</li>
      </Link>
      <Link to={paths.profile.url}>
        <li>{paths.profile.label}</li>
      </Link>
    </MenuStyled>
  )
}
