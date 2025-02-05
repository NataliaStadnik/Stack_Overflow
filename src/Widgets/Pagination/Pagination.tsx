import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import Arrow from "../../svg/Arrow";
import "./pagination.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <ButtonSvg
        svg={<Arrow classes="arrow-pag arrow-pag-left" color="#00000054" />}
      />
      <div className="page-number">1</div>
      <ButtonSvg svg={<Arrow classes="arrow-pag" color="#00000054" />} />
    </div>
  );
};

export default Pagination;
