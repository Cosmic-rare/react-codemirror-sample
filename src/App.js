import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight'
import { EditorView } from '@codemirror/view'

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

export default function App() {
  return (
    <div className="editor">
      <CodeMirror
        value="# Hello, World!"
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
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
          console.log(viewUpdate)
        }}
      />
    </div>
  );
}