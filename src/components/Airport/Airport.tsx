import * as React from "react";

import "./Airport.scss";

interface Props {
  imageSrc: string;
  name: string;
}

export const Airport = ({ imageSrc, name }: Props) => (
  <div className="listContainer">
    <div className="airport">
      <img className="image" src={imageSrc} />
      <p>{name}</p>
    </div>
  </div>
);
  