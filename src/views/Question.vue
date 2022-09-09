<template>
  <div class="card">
    <vue-basic-alert :duration="300" :closeIn="4000" ref="alert" />
    <div class="card-header pb-0">
      <h6>Exams Questions</h6>
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Question No
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Correct Option
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Created On
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Start Time
              </th>

              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in examList" :key="data._id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="ml-3 mb-0 text-sm">{{ data.name }}</h6>
                    <!-- <p class="text-xs text-secondary mb-0">
                      john@creative-tim.com
                    </p> -->
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">
                  {{ randomNumber }}
                </p>
                <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <td class="align-middle text-center text-sm">
                <span
                  :class="'badge badge-sm ' + returnClass(data.difficulty)"
                  >{{ data.difficulty }}</span
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  data.created_at.toString()
                }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  data.start_time.toString()
                }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  data.end_time.toString()
                }}</span>
              </td>
              <td class="align-middle">
                <argon-button color="primary" @click="$router.push('/add-exam')"
                  >Add Questions</argon-button
                >
                <argon-button
                  color="danger"
                  style="margin-left: 15px"
                  @click="$router.push('/add-exam')"
                  >Delete Exams</argon-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Question AREA -->
    <div class="card-body">
      <p class="text-uppercase text-sm">Question Information</p>
      <div class="row">
        <!-- <hr class="horizontal dark" /> -->
        <!-- <p class="text-uppercase text-sm">Addtional Information</p> -->

        <div class="col-md-12">
          <label for="example-text-input" class="form-control-label"
            >Question Text
          </label>
          <vue-editor v-model="body.question_text"></vue-editor>
        </div>
        <div class="col-md-12 mt-3">
          <label for="example-text-input" class="form-control-label"
            >Explain Text
          </label>
          <vue-editor v-model="body.question_explain"></vue-editor>
        </div>
        <div class="col-md-12 mt-3">
          <label for="example-text-input" class="form-control-label"
            >Add Question Image [Note - If you have multiple images, please
            compress it to a single image]
          </label>
          <input class="form-control" type="file" @change="updateCurrImg" />
        </div>
        <div class="col-md-12 mt-3">
          <img
            style="max-width: 500px; max-height: 500px; border: 3px black solid"
            :src="questionImage"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- Answer Area -->
    <div class="card-body">
      <div class="row">
        <div class="col-md-12 mt-3" style="border: 1px gray solid">
          <label for="example-text-input" class="form-control-label"
            >Answer Option 1 [Text to be displayed in each option]</label
          >
          <textarea
            class="form-control"
            type="text"
            v-model="body.option1"
          ></textarea>

          <input
            type="radio"
            id="age1"
            name="age"
            value="1"
            v-model="correctSolution"
          />
          <label for="age1">Is Solution?</label><br />

          <input
            class="form-control"
            type="file"
            @change="uploadOptionImage1"
          />
          <img
            style="max-width: 500px; max-height: 500px; border: 3px black solid"
            :src="optionImage1"
            alt=""
          />
        </div>

        <!-- option 2 -->

        <div class="col-md-12 mt-3" style="border: 1px gray solid">
          <label for="example-text-input" class="form-control-label"
            >Answer Option 2 [Text to be displayed in each option]</label
          >
          <textarea
            class="form-control"
            type="text"
            v-model="body.option2"
          ></textarea>

          <input
            type="radio"
            id="age1"
            name="age"
            value="2"
            v-model="correctSolution"
          />
          <label for="age1">Is Solution?</label><br />

          <input
            class="form-control"
            type="file"
            @change="uploadOptionImage2"
          />
          <img
            style="max-width: 500px; max-height: 500px; border: 3px black solid"
            :src="optionImage2"
            alt=""
          />
        </div>

        <!-- option 3 -->

        <div class="col-md-12 mt-3" style="border: 1px gray solid">
          <label for="example-text-input" class="form-control-label"
            >Answer Option 3 [Text to be displayed in each option]</label
          >
          <textarea
            class="form-control"
            type="text"
            v-model="body.option3"
          ></textarea>

          <input
            type="radio"
            id="age1"
            name="age"
            value="3"
            v-model="correctSolution"
          />
          <label for="age1">Is Solution?</label><br />

          <input
            class="form-control"
            type="file"
            @change="uploadOptionImage3"
          />
          <img
            style="max-width: 500px; max-height: 500px; border: 3px black solid"
            :src="optionImage3"
            alt=""
          />
        </div>
        <!-- Option 4 -->
        <div class="col-md-12 mt-3" style="border: 1px gray solid">
          <label for="example-text-input" class="form-control-label"
            >Answer Option 4 [Text to be displayed in each option]</label
          >
          <textarea
            class="form-control"
            type="text"
            v-model="body.option4"
          ></textarea>

          <input
            type="radio"
            id="age1"
            name="age"
            value="4"
            v-model="correctSolution"
          />
          <label for="age1">Is Solution?</label><br />

          <input
            class="form-control"
            type="file"
            @change="uploadOptionImage4"
          />
          <img
            style="max-width: 500px; max-height: 500px; border: 3px black solid"
            :src="optionImage4"
            alt=""
          />
        </div>
      </div>

      <div class="success_text">{{ success_text }}</div>

      <hr class="horizontal dark" />
      <argon-button
        color="primary"
        size="sm"
        class="ms-auto"
        @click="SubmitForm"
        >Submit</argon-button
      >
    </div>
  </div>
</template>

<script>
// import { ImageDrop } from "quill-image-drop-module";
// import ImageResize from "quill-image-resize-module";

import ExamAPI from "../api/exam";
import ArgonButton from "@/components/ArgonButton.vue";
import { VueEditor } from "vue3-editor";
import QuestionAPI from "../api/question";
import AnswerAPI from "../api/answer";
// import axios from "axios";
import VueBasicAlert from "vue-basic-alert";

export default {
  name: "authors-table",
  data() {
    return {
      examList: [],
      showMenu: false,
      error_text: "",
      success_text: "",

      questionImage: "",

      //Option Images just for displat
      optionImage1: "",
      optionImage2: "",
      optionImage3: "",
      optionImage4: "",
      correctSolution: "",
      body: {
        question_text: "",

        question_explain: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",

        optionImageData1: "",
        optionImageData2: "",
        optionImageData3: "",
        optionImageData4: "",
        questionImageData: "",
      },
      editorOption: {},
    };
  },
  components: {
    ArgonButton,
    VueEditor,
    VueBasicAlert,
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    },
  },
  methods: {
    showError(title, message) {
      this.$refs.alert.showAlert(
        "error", // There are 4 types of alert: success, info, warning, error
        message,
        title
      );
    },
    async SubmitForm() {
      //Validations Started
      if (!this.body.question_text) {
        return this.showError("Invalid Question", "please enter question text");
      }
      if (!this.body.question_explain) {
        return this.showError(
          "Invalid Explaination",
          "please enter question explaination"
        );
      }

      if (
        this.body.option1 &&
        this.body.option2 &&
        this.body.option3 &&
        this.body.option4
      ) {
        console.log("a");
      } else {
        this.error_text = "all options does not exists";
        return this.showError(
          "Invalid Answers",
          "please enter all 4 options of the answers"
        );
      }

      if (!this.correctSolution) {
        return this.showError(
          "Solution Required",
          "Question should have atleast one solution"
        );
      }

      //Validation ended
      console.log("adsldslajsldksajlk");
      let questionCreateFormData = {
        question: this.body.question_text,
        explain: this.body.question_explain,
        exam_id: this.$route.query.exam_id,
        image: this.questionImage,
      };
      const createQuestion = await QuestionAPI.createQuestion(
        questionCreateFormData
      );
      console.log(createQuestion, "This is result of questions");

      let option1 = {
        answer: this.body.option1,
        image: this.optionImage1,
        is_correct: this.correctSolution == 1 ? true : false,
        question_id: createQuestion.data.question._id,
      };

      console.log("Opto", option1);
      await AnswerAPI.createAnswer(option1);

      let option2 = {
        answer: this.body.option2,
        image: this.optionImage2,
        is_correct: this.correctSolution == 2 ? true : false,
        question_id: createQuestion.data.question._id,
      };
      await AnswerAPI.createAnswer(option2);

      let option3 = {
        answer: this.body.option3,
        image: this.optionImage3,
        is_correct: this.correctSolution == 3 ? true : false,
        question_id: createQuestion.data.question._id,
      };
      await AnswerAPI.createAnswer(option3);

      let option4 = {
        answer: this.body.option4,
        image: this.optionImage4,
        is_correct: this.correctSolution == 4 ? true : false,
        question_id: createQuestion.data.question._id,
      };
      await AnswerAPI.createAnswer(option4);

      this.$refs.alert.showAlert(
        "success", // There are 4 types of alert: success, info, warning, error
        "A new question has been added successfully.",
        "Question added"
      );

      //Push all of them to api.
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
    async uploadOptionImage1(input) {
      if (input.target.files && input.target.files[0]) {
        this.optionImage1 = await this.fileToBase64(input.target.files[0]);
      }
    },
    async uploadOptionImage2(input) {
      if (input.target.files && input.target.files[0]) {
        this.optionImage2 = await this.fileToBase64(input.target.files[0]);
      }
    },
    async uploadOptionImage3(input) {
      if (input.target.files && input.target.files[0]) {
        this.optionImage3 = await this.fileToBase64(input.target.files[0]);
      }
    },
    async fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (e) => reject(e);
      });
    },
    async uploadOptionImage4(input) {
      if (input.target.files && input.target.files[0]) {
        this.optionImage4 = await this.fileToBase64(input.target.files[0]);
      }
    },
    async fetchAllExamList() {
      // console.log(ExamAPI);
      const ExamList = await ExamAPI.fetchAllExams();

      this.examList = ExamList.data.exam;

      console.log(this.examList);
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
