import { FC } from "react";
import { svgProps } from "./interfaces";

const Code: FC<svgProps> = ({ classes }) => {
  return (
    <svg
      className={classes}
      aria-hidden="true"
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <rect width="48" height="48" fill="none" />
        </g>
        <g>
          <path d="M22,35h-.5a2,2,0,0,1-1.4-2.5l4-17.9a2,2,0,1,1,3.8,1l-4,18A1.9,1.9,0,0,1,22,35Z" />
          <path d="M17,31a2,2,0,0,0,1.3-3.5L14,24l4.3-3.5a2,2,0,1,0-2.6-3l-6,5a2,2,0,0,0,0,3l6,5A1.9,1.9,0,0,0,17,31Z" />
          <path d="M31,31a2,2,0,0,1-1.3-3.5L34,24l-4.3-3.5a2,2,0,0,1,2.6-3l6,5a2,2,0,0,1,0,3l-6,5A1.9,1.9,0,0,1,31,31Z" />
          <path d="M44,6H4A2,2,0,0,0,2,8V40a2,2,0,0,0,2,2H44a2,2,0,0,0,2-2V8A2,2,0,0,0,44,6ZM42,38H6V10H42Z" />
        </g>
      </g>
    </svg>
  );
};

export default Code;
