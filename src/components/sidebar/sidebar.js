/** @jsxImportSource @emotion/react */

import { buttonStyle, sidebarStyle } from "./style-sidebar"

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