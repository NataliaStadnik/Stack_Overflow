import { instance } from "../../api/config";

export async function fetchAllAnswers() {
 return (await instance.get('/answers')).data
}
