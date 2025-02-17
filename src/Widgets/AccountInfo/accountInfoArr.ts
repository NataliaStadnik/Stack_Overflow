import { statisticType } from "../../api/users/fetchStatistic";

export function getStatisticArr(data: statisticType) {
  return [
    { id: 0, label: "Rating", value: data.rating },
    { id: 1, label: "Snippets", value: data.snippetsCount },
    { id: 2, label: "Comments", value: data.commentsCount },
    { id: 3, label: "Likes", value: data.likesCount },
    { id: 4, label: "Dislikes", value: data.dislikesCount},
    { id: 5, label: "Questions", value: data.questionsCount },
    { id: 6, label: "Correct Answers", value: data.correctAnswersCount },
    { id: 7, label: "Regular Answers", value: data.regularAnswersCount },
  ];
}
