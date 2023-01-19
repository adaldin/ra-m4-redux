import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "../../styles"

export const SelectOption = styled.option``

const SelectStyled = styled.select`
  border-radius: 0.3rem;
  border: 1px solid ${colors.lightBlue2};
  font-size: 14px;
  padding: 0.3rem;
  box-shadow: 0px 3px 6px #00000029;
`

function Select({ id, name, onChange, children, ...rest }) {
  return (
    <SelectStyled id={id} name={name} onChange={onChange} {...rest}>
      {children}
    </SelectStyled>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default styled(Select)``
