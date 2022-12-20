import { serverAPI } from "./index";
class QuestionBankAPI {
  constructor() {
    console.log(process.env.VUE_APP_SERVER);
  }
  static fetchAllQuestions() {
    console.log(process.env.VUE_APP_SERVER, "kjljk");

    return serverAPI.get(`/qb/list/`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
}
export default QuestionBankAPI;
