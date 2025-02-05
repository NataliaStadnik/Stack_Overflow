import { FC } from "react";
import "./headerSection.css";

interface HeaderSectionProps {
  title?: string;
  children?: React.ReactElement;
}

const HeaderSection: FC<HeaderSectionProps> = ({ title, children }) => {
  return (
    <section className="section-header">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export default HeaderSection;
