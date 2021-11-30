/** @jsxImportSource @emotion/react */

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
// import { oneDark } from '@codemirror/theme-one-dark'
import { oneDark } from "./theme"
import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'
import { useState } from "react"
import { css } from "@emotion/react"
import { lineNumbers } from '@codemirror/gutter'

import "./index.css"

const sideBar = css`

`

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

const transparentTheme = EditorView.theme({
  '&': {
    backgroundColor: 'transparent !important',
    height: '100%'
  }
})

const syntaxHighlighting = HighlightStyle.define([
  {
    tag: tags.heading1,
    fontSize: '1.8em',
    fontWeight: 'bold'
  },
  {
    tag: tags.heading2,
    fontSize: '1.4em',
    fontWeight: 'bold'
  },
  {
    tag: tags.heading3,
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
])

const App = () => {
  const [Markdown, setMarkdown] = useState("")
  
  const onChange = (value, valueUpdate) => {
    setMarkdown(value)
  }

  return (
    <div className="editor">

      <CodeMirror
        className="codemirror"
        value={localStorage.getItem("markdown") || "# Hello, World!"}
        extensions={[
          markdown({
            base: markdownLanguage,
            codeLanguages: languages,
            addKeymap: true,
          }),
          oneDark,
          lineNumbers({
            formatNumber: 0
          }),
          defaultHighlightStyle.fallback,
          syntaxHighlighting,
          transparentTheme,
          EditorView.lineWrapping
        ]}
        onChange={onChange}
      />

      <div css={sideBar}>
        <button css={buttonStyle}>EDIT</button>
        <br />
        <button css={buttonStyle}>IMG</button>
      </div>

    </div>
  );
}

export default App