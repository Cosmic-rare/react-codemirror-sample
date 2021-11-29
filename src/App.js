/** @jsxImportSource @emotion/react */

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'
import { useState } from "react"
import { css } from "@emotion/react"

import "./index.css"

const buttonStyle = css`
  background-color: #2e2e2e;
  color: azure;
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

      <button onClick={() => {
        localStorage.setItem('markdown', Markdown)
      }} css={buttonStyle}>Save</button>

      <CodeMirror
        value={localStorage.getItem("markdown") || "# Hello, World!"}
        extensions={[
          markdown({
            base: markdownLanguage,
            codeLanguages: languages,
            addKeymap: true,
          }),
          oneDark,
          defaultHighlightStyle.fallback,
          syntaxHighlighting,
          transparentTheme,
          EditorView.lineWrapping
        ]}
        onChange={onChange}
      />
    </div>
  );
}

export default App