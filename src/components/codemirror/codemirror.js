/** @jsxImportSource @emotion/react */

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from "./theme"
import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'
import { lineNumbers } from '@codemirror/gutter'

import { codemirrorStyle } from "./style-codemirror"

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