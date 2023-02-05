import React from "react";
import { Checkbox } from "@atlaskit/checkbox";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import store from "../../store/store";

export default function Todo(props) {
  let onCheck = () => {
    store.dispatch({ type: "todos/check", payload: props.id });
  };
  let onDelete = () => {
    store.dispatch({ type: "todos/delete", payload: props.id });
  };
  return (
    <div
      style={{
        backgroundColor: props.check ? "green" : "#ffffff",
        border: "1px solid gray",
        padding: "10px",
        marginLeft: "5px",
        marginRight: "5px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p style={{ color: props.check ? "white" : "black" }}>{props.name}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Checkbox
          isChecked={props.check}
          onChange={onCheck}
          value={props.id}
          name="controlled-checkbox"
        />
        <div onClick={onDelete}>
          <TrashIcon />
        </div>
      </div>
    </div>
  );
}
