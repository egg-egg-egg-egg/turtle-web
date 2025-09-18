window.createPythonSnippets = function (monaco) {
  return [
    {
      label: 'circle',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: '绘制圆形',
      insertText: 'circle(${1:80})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'forward',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: '前进 n 像素',
      insertText: 'forward(${1:100})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'right',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: '右转角度',
      insertText: 'right(${1:90})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'left',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: '左转角度',
      insertText: 'left(${1:90})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'goto',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: '移动到坐标 (x, y)',
      insertText: 'goto(${1:x}, ${2:y})',
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    },
    {
      label: 'done',
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: '完成绘制',
      insertText: 'done()'
    }
  ];
};