import { FC } from "react";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import Arrow from "../../svg/Arrow";
import "./pagination.css";

interface PaginationProps {
  currentPage?: string;
  setPage?: (a: string) => void;
  maxPage?: string;
}

const Pagination: FC<PaginationProps> = ({
  currentPage = "1",
  setPage,
  maxPage,
}) => {
  const IncreasePage = () => {
    if (setPage) {
      setPage((+currentPage + 1).toString());
    }
  };

  const DecreasePage = () => {
    if (setPage) {
      setPage((+currentPage - 1).toString());
    }
  };

  return (
    <div className="pagination">
      <ButtonSvg
        onClick={DecreasePage}
        svg={<Arrow classes="arrow-pag arrow-pag-left" color="#00000054" />}
        disabled={+currentPage === 1}
      />
      <div className="page-number">{currentPage}</div>
      <ButtonSvg
        onClick={IncreasePage}
        svg={<Arrow classes="arrow-pag" color="#00000054" />}
        disabled={maxPage !== undefined && +maxPage === +currentPage}
      />
    </div>
  );
};

export default Pagination;
