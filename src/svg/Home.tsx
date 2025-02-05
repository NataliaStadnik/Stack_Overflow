import { FC } from "react";
import { svgProps } from "./interfaces";

const Home: FC<svgProps> = ({ classes }) => {
  return (
    <svg
      aria-hidden="true"
      className={classes}
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill="#ffffffb3"
      />
    </svg>
  );
};

export default Home;
