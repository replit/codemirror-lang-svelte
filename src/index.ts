import { parser as myLanguageParser } from "./syntax.grammar";
import {
  LRLanguage,
  LanguageSupport,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  delimitedIndent,
  continuedIndent,
} from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";
import {
  completeFromList,
  ifNotIn,
  snippetCompletion as snip,
  Completion,
} from "@codemirror/autocomplete";

export const parser = myLanguageParser;

export const myLanguageLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        // indent based on node
      }),
      foldNodeProp.add({
        // fold information cango here
      }),
      styleTags({
        // map from node type to syntax highlighting tag
      }),
    ],
  }),
  languageData: {
    commentTokens: {},
    closeBrackets: {},
    indentOnInput: /regex/,
  },
});



export function myLanguage() {
  return new LanguageSupport(
    myLanguageLanguage,
    // optionally add completions/snippets or other features
  );
}
