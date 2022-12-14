import { styleTags, tags as t } from "@lezer/highlight"

export const svelteHighlighting = styleTags({
  "Text RawText": t.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": t.angleBracket,
  "TagName": t.tagName,
  "MismatchedCloseTag/TagName": [t.tagName, t.invalid],
  "AttributeName": t.attributeName,
  "UnquotedAttributeValue": t.attributeValue,
  "DoubleQuote SingleQuote AttributeValueContent": t.attributeValue,
  "Is": t.definitionOperator,
  "EntityReference CharacterReference": t.character,
  "Comment": t.blockComment,
  "ProcessingInst": t.processingInstruction,
  "DoctypeDecl": t.documentMeta,
  "{ }": t.bracket,
  "[ ]": t.squareBracket,
  "( )": t.paren,
  "| , :": t.punctuation,
  "...": t.derefOperator,
  "ComponentName": t.className,
  "SvelteElementNamespace": t.namespace,
  "SvelteElementType": t.tagName,
  "StyleAttributeName": t.propertyName,
  "BlockType": t.controlKeyword,
  "BlockPrefix": t.typeOperator,
  "UnknownBlock/BlockType": t.invalid,
  "UnknownBlockContent": t.invalid,
  "if then catch": t.controlKeyword,
  "as": t.definitionOperator,
  "Variable": t.variableName,
  "Modifier": t.modifier,
  "DirectlyInterpolatedAttributeValue": t.attributeValue,
  "DirectiveOn/DirectiveName": t.controlKeyword,
  "DirectiveOn/DirectiveTarget": t.typeName,
  "DirectiveUse/DirectiveName": t.controlKeyword,
  "DirectiveUse/DirectiveTarget": t.function(t.variableName),
  "DirectiveBind/DirectiveName": t.controlKeyword,
  "DirectiveBind/DirectiveTarget": t.variableName,
  "DirectiveLet/DirectiveName": t.definitionKeyword,
  "DirectiveLet/DirectiveTarget": t.definition(t.variableName),
  "DirectiveTransition/DirectiveName": t.operatorKeyword,
  "DirectiveTransition/DirectiveTarget": t.function(t.variableName),
  "DirectiveIn/DirectiveName": t.operatorKeyword,
  "DirectiveIn/DirectiveTarget": t.function(t.variableName),
  "DirectiveOut/DirectiveName": t.operatorKeyword,
  "DirectiveOut/DirectiveTarget": t.function(t.variableName),
  "DirectiveAnimate/DirectiveName": t.operatorKeyword,
  "DirectiveAnimate/DirectiveTarget": t.function(t.variableName),
  "DirectiveClass/DirectiveName": t.attributeName,
  "DirectiveClass/DirectiveTarget": t.variableName,
  "DirectiveStyle/DirectiveName": t.attributeName,
  "DirectiveStyle/DirectiveTarget": t.propertyName
})
