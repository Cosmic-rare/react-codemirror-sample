/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

const buttonStyle = css`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  display: inline-block;
  background-color: #FFF;
  border: none;
  margin: 0px;
  margin-top: 10px;
  text-align: center;
  padding: 0px;
  box-shadow: 0 18px 18px -10px #0009652b;
  transition: all 0.5s ease;
  &:hover {
    color: #3ea8ff;
    transform: translateY(-2px);
  }
`

const sidebarStyle = css`

`

const sidebar = (props) => {
  return(
    <div css={sidebarStyle}>
      <button css={buttonStyle}>EDIT</button>
    <br />
      <button css={buttonStyle}>IMG</button>
  </div>
  )
}

export default sidebar