import { serverAPI } from "./index";
class AnswerAPI {
  constructor() {
    console.log(process.env.VUE_APP_SERVER);
  }
  static fetchAllAnswers() {
    return serverAPI.get(`/answer/list/`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
  static createAnswer(body) {
    return serverAPI.post(`/answer/create`, body, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
}
export default AnswerAPI;
