import { serverAPI } from "./index";
class ExamAPI {
  constructor() {
    console.log(process.env.SERVER);
  }
  static fetchAllExams() {
    return serverAPI.get(`/exam/list/`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
  static createExam(body) {
    return serverAPI.post(`/exam/create`, body, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
}
export default ExamAPI;
