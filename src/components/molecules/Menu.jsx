import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../styles"
import FlexBox from "../../styles/FlexBox"
import { paths } from "../../constants/index"

const MenuStyled = styled(FlexBox)`
  list-style-type: none;
  gap: 1rem;

  .active {
    font-weight: bold;
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
  }
  .inactive {
    font-weight: regular;
    color: ${colors.font.base};
    &:hover {
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
    }
  }
`
export function Menu() {
  return (
    <MenuStyled as="ul" direction="row" justify="end" hoverColor={colors.main}>
      <NavLink to={paths.home.url} className={({ isActive }) => (isActive ? "active" : "inactive")}>
        <li>{paths.home.label} </li>
      </NavLink>
      <NavLink to={paths.data.url} className={({ isActive }) => (isActive ? "active" : "inactive")}>
        <li>{paths.data.label}</li>
      </NavLink>
      <NavLink
        to={paths.profile.url}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        <li>{paths.profile.label}</li>
      </NavLink>
    </MenuStyled>
  )
}
