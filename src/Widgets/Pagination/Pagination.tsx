import { FC } from "react";
import ButtonSvg from "../../Shared/ButtonSvg/ButtonSvg";
import Arrow from "../../svg/Arrow";
import "./pagination.css";
import { useSearchParams } from "react-router";

interface PaginationProps {
  currentPage?: string;
  setPage?: (a: string) => void;
  maxPage?: string;
}

const Pagination: FC<PaginationProps> = ({ currentPage = "1", maxPage }) => {
  const [params, setSearchParams] = useSearchParams();

  const IncreasePage = () => {
    const num = (Number(params.get("page")) + 1).toString();
    setSearchParams({ page: num });
  };

  const DecreasePage = () => {
    const num = (Number(params.get("page")) - 1).toString();
    setSearchParams({ page: num });
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
