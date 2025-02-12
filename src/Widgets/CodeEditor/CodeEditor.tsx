import Editor from "@monaco-editor/react";
import { FC } from "react";

interface CodeEditorProps {
  code: string;
  setCode: (a: string) => void;
}

const CodeEditor: FC<CodeEditorProps> = ({ code, setCode }) => {
  function handleEditorChange(value: string, event) {
    setCode(value);
    console.log(value);
  }

  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={handleEditorChange}
    />
  );
};

export default CodeEditor;
