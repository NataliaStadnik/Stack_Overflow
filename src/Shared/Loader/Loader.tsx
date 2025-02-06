import { FC } from "react";
import "./Loader.css";

interface LoaderProps {
  type: "big" | "small";
}

const Loader: FC<LoaderProps> = ({ type }) => {
  if (type === "big") {
    return (
      <div className="loader-wrap">
        <span className={"loader"}></span>
      </div>
    );
  }
  return <span className={"loader loader--mini"}></span>;
};

export default Loader;
