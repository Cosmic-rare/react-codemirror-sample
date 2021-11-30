import { useState, useRef,useEffect } from "react"
import { css } from "@emotion/react"
import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"
import { basicSetup } from "@codemirror/basic-setup"

export default function App() {
  const editor = useRef();

  useEffect(() => {
    const state = EditorState.create({
      doc: "a ",
      extensions: [
        basicSetup, 
        EditorView.updateListener.of(update => {
          console.log(update.state)
        })]
    });

    const view = new EditorView({
      state, 
      parent: editor.current 
    });
  }, []);

  return (
    <div ref={editor}></div>
  );
}
