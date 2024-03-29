import { serverAPI } from "./index";
class ExamAPI {
  constructor() {
    console.log(process.env.VUE_APP_SERVER);
  }
  static fetchAllExams() {
    console.log(process.env.VUE_APP_SERVER, "COnsole");

    return serverAPI.get(`/exam/list/`, {
      headers: {
        // Authorization: `Bearer ${store.state.loginManagement.token}`,
      },
    });
  }
  static fetExamDetails(exam_id) {
    return serverAPI.get(`/exam/info/${exam_id}`, {
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
