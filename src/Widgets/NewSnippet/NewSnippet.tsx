import { Button, Select } from "ui-components_innowise";
import "./newSnippet.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { makeSelectArray } from "./makeSelectArray";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import { FC, useState } from "react";
import { updateSnippet } from "../../api/snippets/updateSnippet";
import { postNewSnippet } from "../../api/snippets/postNewSnippet";
import { getLanguages } from "../../api/snippets/getLanguages";
import { queryCLient } from "../../api/queryClients";
import useLastIdLocation from "../../hooks/useLastIdLocation";
import CodeEditor from "../CodeEditor/CodeEditor";

interface NewSnippetProps {
  values?: string;
  selects?: string;
  update?: boolean;
  snippetID?: string;
}

const NewSnippet: FC<NewSnippetProps> = ({
  values = "",
  selects = "",
  update = false,
  snippetID = "",
}) => {
  const id = useLastIdLocation();
  const [select, setSelect] = useState(values);
  const [value, setValue] = useState(selects);

  const registerMutation = useMutation({
    mutationFn: () =>
      update
        ? updateSnippet({ code: value, language: select }, snippetID)
        : postNewSnippet({ code: value, language: select }),
    onSuccess() {
      setValue("");
      queryCLient.invalidateQueries({
        queryKey: [`snippets/${id}}`],
      });
    },
  });

  const { error, isError, isSuccess, data, isPending } = useQuery({
    queryFn: () => getLanguages(),
    queryKey: ["snippets/languages"],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <form
      className="snippet-form"
      onSubmit={(e) => {
        e.preventDefault();
        registerMutation.mutate();
      }}
    >
      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      <div className="new-snippet">
        <h3 className="new-snippet__title">Language of your snippet:</h3>
        {isSuccess && (
          <Select
            selectedItem={select}
            onChange={setSelect}
            classes="new-wrap"
            label="Select language"
            required
            options={makeSelectArray(data)}
          />
        )}
      </div>

      <div className="new-snippet new-snippet__body">
        <h3 className="new-snippet__title code-title">Code of your snippet:</h3>
        <CodeEditor
          value={value}
          setValue={setValue}
          classes="new-snippet__code"
          language={select}
          readonly={false}
        />

        {registerMutation.isSuccess && (
          <span className="register--correct">
            Snippet {update ? "updated" : "created"} successfully!"
          </span>
        )}

        <ErrorMessageFetch mutation={registerMutation} />
      </div>
      <Button classes="new-snippet__btn">
        {registerMutation.isPending ? (
          <Loader type="small" />
        ) : update ? (
          "Update snippet"
        ) : (
          "Create snippet"
        )}
      </Button>
    </form>
  );
};

export default NewSnippet;
