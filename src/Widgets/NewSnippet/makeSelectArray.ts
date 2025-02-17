import { Languages } from "../../api/snippets/getLanguages";

type SelectObject = Array<{
  value: string;
  label: string;
}>;

export function makeSelectArray(languages: Languages) {
  const options: SelectObject = [];
  languages.map((elem) => {
    options.push({ value: elem, label: elem });
  });
  return options;
}
