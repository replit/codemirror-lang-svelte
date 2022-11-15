# CodeMirror Lezer Language Template

Fork https://replit.com/@util/CodeMirror-Lezer-Language-Template and hit run to start developing.

## How to author a language mode

You can look at [this](https://replit.com/@util/codemirror-lang-nix) as an example of a language mode authored using this template, it covers the [nix programming language.](https://nixos.wiki/wiki/Overview_of_the_Nix_Language)

Other examples can be found in the CodeMirror and Lezer official repos. They separate the CodeMirror language package from the Lezer package, for example here is the [Lezer python package](https://github.com/lezer-parser/python) and the [CodeMirror python package](https://github.com/codemirror/lang-python/blob/main/src/python.ts) that consumes it.

Lezer has excellent documentation which can be found [here](https://lezer.codemirror.net/) and the CodeMirror documentation can be found [here](https://codemirror.net/docs/), along with a [simple example](https://codemirror.net/examples/lang-package/) which can also be found on [GitHub](https://github.com/codemirror/lang-example).

## Template Directory Structure:
- `src`: This is where you define the language mode
  - Author the grammar in `.grammar` file(s).
  - You may choose to use the `tokens.ts` file for [external tokens](https://lezer.codemirror.net/docs/guide/#external-tokens)
  - The `index.ts` file should contain the language definition
- `dev`: Just a simple CodeMirror example to test your language mode

## Development

If you're on Replit, simply hitting run will start the compilation of the language mode in watch mode, and a simple CodeMirror app hosted. If you face any difficulty you can leave a comment on the template's comment section.

You need to be in a workable state for it to run, you can try forking https://replit.com/@util/codemirror-lang-nix instead if you want to start from a working state.

Otherwise, you can run the scripts in package.json.

## Publishing

Make sure to update the package information in package.json. Then you can run `yarn build` and publish the package the npm package repository like any package. 
