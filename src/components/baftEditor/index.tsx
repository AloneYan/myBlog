import React, { useState } from "react";
import "braft-editor/dist/index.css";
import BraftEditor from "braft-editor";

import style from "./style.less";

export default (props: any) => {
  const colors = [
    "transparent",
    "#000000",
    "#373636",
    "#626060",
    "#9e9d9d",
    "#cccccc",
    "#ffffff",
    "#E889B7",
    "#882291",
    "#9a70a5",
    "#7071ad",
    "#b588fd",
    "#4c99b8",
    "#82c2fb",
    "#a30202",
    "#fa5a5a",
    "#ff9e9e",
    "#f39924",
    "#FFAC56",
    "#fad484",
    "#017153",
    "#7db54e",
    "#83db8d",
  ];

  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(props.content ? props.content : "")
  );

  const handleChange = (editorStateCtx: any) => {
    setEditorState(editorStateCtx.toHTML());
    props?.change(editorState);
  };

  return (
    <>
      <BraftEditor
        className={style.editor}
        controlBarClassName={style.editorBar}
        contentClassName={style.editorCont}
        value={editorState}
        colors={colors}
        onChange={handleChange}
      />
    </>
  );
};
