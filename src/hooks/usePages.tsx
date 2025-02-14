import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

interface usePagesProps {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}

const usePages = ({ page, setPage, refetch }: usePagesProps) => {
  const [params, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!params.get("page")) {
      setSearchParams({ page: page });
    } else {
      setPage(params.get("page") || "1");
    }
    refetch();
  }, [page, params]);
};

export default usePages;
