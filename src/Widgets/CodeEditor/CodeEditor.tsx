import Editor, { loader } from "@monaco-editor/react";
import { FC } from "react";

interface CodeEditorProps {
  code: string;
  setCode: (a: string) => void;
  language?: string;
  readonly?: boolean;
}

const CodeEditor: FC<CodeEditorProps> = ({
  code,
  setCode,
  language,
  readonly = true,
}) => {
  function handleEditorChange(value: string, event) {
    setCode(value);
  }

  loader.init().then((monaco) => {
    monaco.editor.defineTheme("myTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#80808017",
      },
    });
  });

  return (
    <Editor
      height="40vh"
      defaultLanguage={language}
      language={language}
      theme="myTheme"
      // theme="vs-dark"
      defaultValue={code}
      onChange={handleEditorChange}
      options={{
        // minimap: { enabled: false },
        // quickSuggestions: false,
        // folding: false,
        readOnly: readonly,
      }}
    />
  );
};

export default CodeEditor;
