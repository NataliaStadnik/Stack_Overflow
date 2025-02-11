import { Languages } from "./getLanguages";

type SelectObject = Array<{
  value: string;
  label: string;
}>;

export function makeSelectArray(languages: Languages) {
  const options: SelectObject = [];
  languages.forEach((elem) => {
    options.push({ value: elem, label: elem });
  });
  return options;
}
