import React, { Suspense, useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import "monaco-editor/esm/vs/language/html/html.worker?worker";

const MJMLEditor: React.FC<{
  initialValue: string;
}> = (props) => {
  const valueRef = useRef(props.initialValue);

  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        const monEditor = monaco.editor.create(monacoEl.current!, {
          value: valueRef.current,
          language: "html",
          automaticLayout: true,
          minimap: { enabled: false },
          theme: "vs-dark",
          readOnly: true,
        });
        monEditor.onDidChangeModelContent(() => {});
        return monEditor;
      });
    }

    return () => editor?.dispose();
  }, [editor]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#263238",
            justifyContent: "center",
            fontSize: 24,
            color: "#fff",
          }}
        >
          {`Editor Loading...`}
        </div>
      }
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
        }}
        ref={monacoEl}
      ></div>
    </Suspense>
  );
};

export default MJMLEditor;
