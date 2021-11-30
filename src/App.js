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
        <button>EDIT</button>
        <br />
        <button>IMG</button>
      </div>

    </div>
  );
}

export default App