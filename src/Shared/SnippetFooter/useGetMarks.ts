import { useSelector } from "react-redux";
import { MarkTypeArray } from "../../Pages/HomePage/typesSnippetComment";
import { RootState } from "../../store/store";

export function useGetMarks(objArr: MarkTypeArray) {
  const myID = useSelector((state: RootState) => state.userState.id);
  let markLike = 0;
  let markDislike = 0;
  let myStatus = 'none'

  if (objArr.length !== 0) {
    objArr.map((elem) => {
      if (elem.type === "like") {
        markLike += 1
        checkID(elem.user.id, 'like')
      };
      if (elem.type === "dislike") {
        markDislike += 1
        checkID(elem.user.id, 'dislike')
      };
    });
  }

  function checkID(id: string, status: string): void {
    if (id === myID) {
      myStatus = status
    }
  }
  return { like: markLike.toString(), dislike: markDislike.toString(), status: myStatus };
}
