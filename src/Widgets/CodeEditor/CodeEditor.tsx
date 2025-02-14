import { FC, useState } from "react";
import "./codeEditor.css";
import { Editor, loader } from "@monaco-editor/react";

interface CodeEditorProps {
  classes?: string;
  value?: string;
  setValue?: (a: string) => void;
  language?: string;
  readonly?: boolean;
}

const CodeEditor: FC<CodeEditorProps> = ({
  classes = "",
  value,
  setValue,
  language,
  readonly = true,
}) => {
  const [languages] = useState(
    language?.length === 0 ? "javascript" : language
  );

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setValue?.(value);
    }
  };

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
    <div className={`snippet__body codebase ${classes}`}>
      <Editor
        height="40vh"
        language={languages}
        theme="myTheme"
        value={value}
        onChange={handleEditorChange}
        options={{
          readOnly: readonly,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
};

export default CodeEditor;
