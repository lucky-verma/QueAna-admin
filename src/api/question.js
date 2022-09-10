import { convertToSearchParams } from "../utils/utils";
import { serverAPI } from "./index";
class QuestionAPI {
  constructor() {}
  static fetchAllQuestion(keys) {
    return serverAPI.get(`/question/list/?${convertToSearchParams(keys)}`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
  static fetchQuestion(keys) {
    return serverAPI.get(`/question/question/?${convertToSearchParams(keys)}`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
  static createQuestion(body) {
    return serverAPI.post(`/question/create`, body, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
}
export default QuestionAPI;
