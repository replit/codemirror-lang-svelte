import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { myLanguage, parser } from "../dist/";
import { printTree } from "./print-lezer-tree";
import { oneDark } from '@codemirror/theme-one-dark';

const doc = `
add a test document here

`

new EditorView({
  state: EditorState.create({
    doc,
    extensions: [basicSetup, myLanguage(), oneDark, EditorView.lineWrapping],
  }),
  parent: document.querySelector('#editor'),
});

console.log(printTree(parser.parse(doc), doc));
