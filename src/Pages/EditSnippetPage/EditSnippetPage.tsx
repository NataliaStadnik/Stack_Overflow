import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./editSnippetPage.css";
import NewSnippet from "../../Widgets/NewSnippet.tsx/NewSnippet";
import useLastIdLocation from "../../hooks/useLastIdLocation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchComments } from "../../api/snippets/fetchComments";
import Loader from "../../Shared/Loader/Loader";
import { Button } from "ui-components_innowise";
import { queryCLient } from "../../api/queryClients";
import { deleteSnippet } from "../../api/snippets/deleteSnippet";
import ErrorMessageFetch from "../../Shared/ErrorMessageFetch/ErrorMessageFetch";
import { useNavigate } from "react-router";

const EditSnippetPage = () => {
  const locationId = useLastIdLocation();
  const navigate = useNavigate();

  const deleteMutation = useMutation({
    mutationFn: () => deleteSnippet(locationId),
    onSuccess() {
      queryCLient.invalidateQueries({ queryKey: [`snippets`] });
      navigate("/my_snippets");
    },
  });

  const { error, isError, isSuccess, isPending, data } = useQuery({
    queryFn: () => fetchComments(locationId),
    queryKey: [`snippets/${locationId}}`],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <section className="section__snippet section__edit-snippet">
      <HeaderSection title="Edit Snippet" />
      {deleteMutation.isError && (
        <ErrorMessageFetch mutation={deleteMutation} />
      )}
      <Button
        classes="delete-snippet"
        onClick={() => deleteMutation.mutate()}
        variant="text"
        children={
          deleteMutation.isPending ? <Loader type="small" /> : "Delete snippet"
        }
      />
      {isSuccess && (
        <NewSnippet
          update
          selects={data.code}
          values={data.language}
          snippetID={data.id}
        />
      )}

      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}
    </section>
  );
};

export default EditSnippetPage;
