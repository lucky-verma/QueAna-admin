import { serverAPI } from "./index";
class QuestionBankAPI {
  constructor() {
    console.log(process.env.SERVER);
  }
  static fetchAllQuestions() {
    console.log(process.env.SERVER, "kjljk");

    return serverAPI.get(`/qb/list/`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
}
export default QuestionBankAPI;
