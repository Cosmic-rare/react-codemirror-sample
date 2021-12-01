/** @jsxImportSource @emotion/react */

import { useState } from "react"

import "./index.css"

import CodeMirror from "./components/codemirror/codemirror"
import Sidebar from "./components/sidebar/sidebar"

const App = () => {
  const [Markdown, setMarkdown] = useState("")
  
  const onChange = (value, valueUpdate) => {
    setMarkdown(value)
  }

  return (
    <div className="editor">

      <CodeMirror
        onChange={onChange}
        value={"# This is MarkdownEditor"}
      />
      <Sidebar
      />
    </div>
  );
}

export default App