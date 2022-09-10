<template>
  <div class="card">
    <vue-basic-alert :duration="300" :closeIn="4000" ref="alert" />
    <div class="card-header pb-0">
      <h6>All Questions</h6>
      <argon-button
        color="success"
        @click="$router.push('/add-question?' + this.forwardRouterQuery())"
        >Add Question</argon-button
      >
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Option Number
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Question No
              </th>

              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Created On
              </th>

              <th class="text-secondary opacity-7"></th>
              <!-- <th class="text-secondary opacity-7"></th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in questionList" :key="data._id">
              <td>
                <div class="d-flex flex-column justify-content-center">
                  <p>{{ data.question_no }}</p>
                </div>
                <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="ml-3 mb-0 text-sm" v-html="data.question"></h6>
                    <!-- <p class="text-xs text-secondary mb-0">
                      john@creative-tim.com
                    </p> -->
                  </div>
                </div>
              </td>

              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  data.created_at
                }}</span>
              </td>

              <td class="align-middle">
                <argon-button
                  color="primary"
                  @click="
                    $router.push(
                      '/edit-question?' + this.editQuestionPush(data._id)
                    )
                  "
                  >Edit</argon-button
                >
                <argon-button
                  color="danger"
                  style="margin-left: 15px"
                  @click="$router.push('/add-exam')"
                  >Delete</argon-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import { ImageDrop } from "quill-image-drop-module";
// import ImageResize from "quill-image-resize-module";

// import ExamAPI from "../api/exam";
import ArgonButton from "@/components/ArgonButton.vue";
import QuestionAPI from "../api/question";
// import AnswerAPI from "../api/answer";
// import axios from "axios";
import VueBasicAlert from "vue-basic-alert";
import { convertToSearchParams } from "../utils/utils";

export default {
  name: "authors-table",
  data() {
    return {
      questionList: [],
      showMenu: false,
      error_text: "",
      success_text: "",
    };
  },
  components: {
    ArgonButton,
    VueBasicAlert,
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    },
  },
  methods: {
    forwardRouterQuery() {
      return convertToSearchParams(this.$route.query);
    },
    editQuestionPush(id) {
      let final = { ...this.$route.query };
      final.question_id = id;
      return convertToSearchParams(final);
    },
    showError(title, message) {
      this.$refs.alert.showAlert(
        "error", // There are 4 types of alert: success, info, warning, error
        message,
        title
      );
    },

    returnClass(data) {
      if (data == "HARD") {
        return "bg-gradient-danger";
      } else if (data == "MEDIUM") {
        return "bg-gradient-warning";
      } else {
        return "bg-gradient-success";
      }
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        console.log("This image is uploaded");
        this.questionImageData = input.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.questionImage = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
        // console.log(;

        this.imageUpdated = true;
      }
    },

    async fetchAllExamList() {
      // console.log(ExamAPI);
      const QuestionList = await QuestionAPI.fetchAllQuestion({
        exam_id: this.$route.query.exam_id,
      });

      this.questionList = QuestionList.data.questions;

      console.log(this.questionList);
    },
  },
  created() {
    this.fetchAllExamList();
  },
};
</script>

<style>
.vue-alert > .alert-container .alert-content > p.alert-message {
  color: black;
}
.vue-alert > .alert-container .alert-content > p.alert-head {
  color: black;
  font-size: 30px;
}
</style>
