import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const background = "#1E1E1E";
const foreground = "#D4D4D4";
const cursor = "#C6C6C6";
const selection = "#094771";
const darkBackground = "#000000";
const highlightBackground = "#ffffff0f";
const stone = "#858585";
const tooltipBackground = "#252526";
const keyword = "#569CD6";
const controlFlowAndModuleKeywords = "#C586C0";
const functions = "#DCDCAA";
const typesAndClasses = "#4EC9B0";
const tagNames = "#569CD6";
const operators = "#D4D4D4";
const regexes = "#D16969";
const strings = "#569CD6";
const names = "#569CD6";
const punctuationAndSeparators = "#D4D4D4";
const angleBrackets = "#808080";
const templateStringBraces = "#569CD6";
const propertyNames = "#9CDCFE";
const booleansAndAtoms = "#569CD6";
const numbersAndUnits = "#B5CEA8";
const meta = "#6A9955";
const comments = "#6A9955";
const invalid = "#F44747";

export const vscodeDarkTheme = EditorView.theme({
    "&": {
        color: foreground,
        backgroundColor: background
    },
    ".cm-content": {
        caretColor: cursor
    },
    ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: selection },
    ".cm-panels": { backgroundColor: darkBackground, color: foreground },
    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
    ".cm-searchMatch": {
        backgroundColor: "#72a1ff59",
        outline: "1px solid #457dff"
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "#6199ff2f"
    },
    ".cm-activeLine": { backgroundColor: highlightBackground },
    ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "#bad0f847"
    },
    ".cm-gutters": {
        backgroundColor: background,
        color: stone,
        border: "none"
    },
    ".cm-activeLineGutter": {
        backgroundColor: highlightBackground
    },
    ".cm-foldPlaceholder": {
        backgroundColor: "transparent",
        border: "none",
        color: "#ddd"
    },
    ".cm-tooltip": {
        border: "none",
        backgroundColor: tooltipBackground
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground
    },
    ".cm-tooltip-autocomplete": {
        "& > ul > li[aria-selected]": {
            backgroundColor: highlightBackground,
            color: foreground
        }
    }
}, { dark: true });

export const vscodeDarkHighlightStyle = HighlightStyle.define([
    { tag: tags.keyword, color: keyword },
    { tag: [tags.controlKeyword, tags.moduleKeyword], color: controlFlowAndModuleKeywords },
    { tag: [tags.name, tags.deleted, tags.character, tags.macroName], color: names },
    { tag: [tags.propertyName], color: propertyNames },
    { tag: [tags.variableName, tags.labelName], color: names },
    { tag: [tags.color, tags.constant(tags.name), tags.standard(tags.name)], color: booleansAndAtoms },
    { tag: [tags.definition(tags.name)], color: foreground },
    { tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace], color: typesAndClasses },
    { tag: [tags.tagName], color: tagNames },
    { tag: [tags.function(tags.variableName), tags.function(tags.propertyName)], color: functions },
    { tag: [tags.number], color: numbersAndUnits },
    { tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, tags.special(tags.string)], color: operators },
    { tag: [tags.regexp], color: regexes },
    { tag: [tags.special(tags.string)], color: strings },
    { tag: [tags.meta], color: meta },
    { tag: [tags.comment], color: comments },
    { tag: [tags.punctuation, tags.separator], color: punctuationAndSeparators },
    { tag: [tags.angleBracket], color: angleBrackets },
    { tag: tags.special(tags.brace), color: templateStringBraces },
    { tag: tags.strong, fontWeight: "bold" },
    { tag: tags.emphasis, fontStyle: "italic" },
    { tag: tags.strikethrough, textDecoration: "line-through" },
    { tag: tags.link, color: '#CE9178', textDecoration: "underline" },
    { tag: tags.heading, fontWeight: "bold", color: names },
    { tag: [tags.atom, tags.bool, tags.special(tags.variableName)], color: booleansAndAtoms },
    { tag: [tags.processingInstruction, tags.string, tags.inserted], color: strings },
    { tag: tags.invalid, color: invalid }
]);

export const vscodeDark = [vscodeDarkTheme, /*@__PURE__*/syntaxHighlighting(vscodeDarkHighlightStyle)];