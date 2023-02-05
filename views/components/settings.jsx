import React from "react";
import { useSelector } from "react-redux";
import { Checkbox } from "@atlaskit/checkbox";

import store from "../../store/store";

const check = (state) => state.ui.sortCheck;

export default function Settings() {
  const isChecked = useSelector(check);

  let onCheck = () => {
    store.dispatch({ type: "ui/sortChecked", payload: null });
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f6f7",
        width: "25%",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        borderRadius: "10px",
        display: "flex",
        paddingTop: "8px",
        paddingBottom: "8px",
        marginBottom: "15px",
      }}
    >
      <Checkbox
        isChecked={isChecked}
        onChange={onCheck}
        name="controlled-checkbox"
        label="Показать только отмеченные"
      />
    </div>
  );
}
