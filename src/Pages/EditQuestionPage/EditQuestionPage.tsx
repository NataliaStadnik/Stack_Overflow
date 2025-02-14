import { useQuery } from "@tanstack/react-query";
import useLastIdLocation from "../../hooks/useLastIdLocation";
import CreateQuestion from "../../Widgets/CreateQuestion/CreateQuestion";
import HeaderSection from "../../Widgets/HeaderSection/HeaderSection";
import "./editQuestionPage.css";
import { getOneQuestion } from "../../api/questions/getOneQuestion";
import Loader from "../../Shared/Loader/Loader";

const EditQuestionPage = () => {
  const id = useLastIdLocation();

  const { error, isError, isSuccess, data, isPending } = useQuery({
    queryFn: () => getOneQuestion(id),
    queryKey: [`/questions/${id}`],
    retry: 1,
  });

  if (isPending) {
    return <Loader type="big" />;
  }

  return (
    <section className="edit-question">
      <HeaderSection title="Edit your question" />
      {isError && (
        <div>
          <span className="error">Error: {error.message}</span>
        </div>
      )}

      {isSuccess && (
        <CreateQuestion
          newTitle={data.title}
          newCode={data.attachedCode}
          newDescr={data.description}
          updateID={id}
        />
      )}
    </section>
  );
};

export default EditQuestionPage;
