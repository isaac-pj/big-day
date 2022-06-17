import React from "react";
// import "./groupLeaves.style.scss";
import dataLeaves from "./groupLeaves.data";
import FloatLeaf from "../../components/floatLeaf/floatLeaf";

const GroupLeaves = () => {
  const _renderLeaves = (leaves) => {
    return leaves.map(({ id, ...data }) => {
      return <FloatLeaf key={id} id={id} {...data} />;
    });
  };

  return <div className="GroupLeaves">{_renderLeaves(dataLeaves)}</div>;
};

export default GroupLeaves;
