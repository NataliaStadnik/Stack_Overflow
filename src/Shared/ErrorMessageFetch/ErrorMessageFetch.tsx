import { FC } from "react";
import "./registerError.css";

interface ErrorMessageFetchProps {
  mutation: any;
}

const ErrorMessageFetch: FC<ErrorMessageFetchProps> = ({ mutation }) => {
  if (mutation.error) {
    return <span className="register--error">{mutation.error.message}</span>;
  }
};

export default ErrorMessageFetch;
