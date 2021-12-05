/** @jsxImportSource @emotion/react */

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from "./theme"
import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'
import { lineNumbers } from '@codemirror/gutter'
import { css } from "@emotion/react"

const codemirrorStyle = css`
  color: #444;
  line-height: 1.8;
  font-size: 15px;
  box-shadow: 0 10px 20px #4b57a91a;
  border-radius: 8px;
  padding: 10px;
  background-color: #FFFFFF;
  margin-right: 15px;
  width: 100%;
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

const Code_mirror = (props) => {
  const { onChange, value } = props

  return (
    <CodeMirror
      value={value}
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
      css={codemirrorStyle}
    />
  );
}

export default Code_mirror