import { FC } from "react";
import "./infoElement.css";

interface InfoElementProps {
  label: string;
  value: string;
}

const InfoElement: FC<InfoElementProps> = ({ label, value }) => {
  return (
    <li className="infos-list__item">
      <span className="infos-list__item--label">{label}: </span>
      <span>{value}</span>
    </li>
  );
};

export default InfoElement;
