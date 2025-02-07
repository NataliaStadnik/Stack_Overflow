import { FC } from "react";
import "./Loader.css";
import { createPortal } from "react-dom";

interface LoaderProps {
  type: "big" | "small";
}

const Loader: FC<LoaderProps> = ({ type }) => {
  if (type === "big") {
    return createPortal(
      <div className="loader-wrap">
        <span className={"loader"}></span>
      </div>,
      document.body
    );
  }
  return <span className={"loader loader--mini"}></span>;
};

export default Loader;
