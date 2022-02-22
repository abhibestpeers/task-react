import * as React from "react";
import { FC } from "react";  
import { Circles } from "react-loader-spinner";

import "./Loader.scss"

export const Loader: FC = () => {
  return (
    <div className="loader">
      <Circles height="80" width="80" color="red" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
