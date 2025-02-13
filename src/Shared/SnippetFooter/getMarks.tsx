import { MarkTypeArray } from "../../api/typesSnippetComment";

export function GetMarks(objArr: MarkTypeArray, myID: string) {
  let markLike = 0;
  let markDislike = 0;
  let myStatus = "none";

  if (objArr.length !== 0) {
    objArr.map((elem) => {
      if (elem.type === "like") {
        markLike += 1;
        checkID(elem.user.id, "like");
      }
      if (elem.type === "dislike") {
        markDislike += 1;
        checkID(elem.user.id, "dislike");
      }
    });
  }

  function checkID(id: string, status: string): void {
    if (id === myID) {
      myStatus = status;
    }
  }

  return {
    like: markLike.toString(),
    dislike: markDislike.toString(),
    status: myStatus,
  };
}
