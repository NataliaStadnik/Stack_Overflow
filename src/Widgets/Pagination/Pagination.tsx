import { FC, useState } from "react";
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
  const [value, setValue] = useState(currentPage);

  const IncreasePage = () => {
    const num = (Number(params.get("page")) + 1).toString();
    setSearchParams({ page: num });
    setValue(num);
  };

  const DecreasePage = () => {
    const num = (Number(params.get("page")) - 1).toString();
    setSearchParams({ page: num });
    setValue(num);
  };

  const handleChange = (num: string) => {
    setValue(num);
    setSearchParams({ page: num });
  };

  return (
    <div className="pagination">
      <ButtonSvg
        onClick={DecreasePage}
        svg={<Arrow classes="arrow-pag arrow-pag-left" color="#00000054" />}
        disabled={+currentPage === 1}
      />
      <input
        className="page-number"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => handleChange(currentPage)}
      />
      <ButtonSvg
        onClick={IncreasePage}
        svg={<Arrow classes="arrow-pag" color="#00000054" />}
        disabled={maxPage !== undefined && +maxPage === +currentPage}
      />
    </div>
  );
};

export default Pagination;
