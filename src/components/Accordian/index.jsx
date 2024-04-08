import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selectedId, setSelectedId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSingleClick(getCurrentID) {
    if (enableMultiSelection === false) {
      setSelectedId(getCurrentID === selectedId ? null : getCurrentID);
      return;
    }
    // if enableMultiSelection is true
    if (selectedItems.includes(getCurrentID)) {
      setSelectedItems((items) =>
        selectedItems.filter((item) => item !== getCurrentID)
      );
      return;
    }

    return setSelectedItems((items) => {
      return [...items, getCurrentID];
    });
  }

  function toggleEnableMultiSelection() {
    setEnableMultiSelection(!enableMultiSelection);
    setSelectedItems([]);
  }

  console.log(enableMultiSelection);
  console.log(selectedItems);
  return (
    <div className="accordian">
      <button onClick={() => toggleEnableMultiSelection()}>
        {enableMultiSelection === true
          ? "Disable Multi Selection"
          : "Enable Multi Selected"}
      </button>
      {data.length === 0 && "No Data"}
      <div className="wrapper">
        {data.map((item) => {
          return (
            <div className="item" onClick={() => handleSingleClick(item.id)}>
              <h3 className="title">{item.question}</h3>
              <span>+</span>
              {enableMultiSelection === false && selectedId === item.id && (
                <p className="content">{item.answer}</p>
              )}

              {enableMultiSelection === true &&
                selectedItems.includes(item.id) === true && (
                  <p className="content">{item.answer}</p>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
