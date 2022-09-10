<template>
  <div class="card">
    <vue-basic-alert :duration="300" :closeIn="4000" ref="alert" />
    <div class="card-header pb-0">
      <h6>Exams Questions</h6>
    </div>

    <!-- Question AREA -->
    <div class="card-body">
      <!-- <p class="text-uppercase text-sm">Question Information</p> -->
      <div class="row">
        <!-- <hr class="horizontal dark" /> -->
        <!-- <p class="text-uppercase text-sm">Addtional Information</p> -->
        <div class="col-md-12 mt-2">
          <label for="example-text-input" class="form-control-label"
            >Question Number</label
          >
          <select
            name="cars"
            id="cars"
            class="form-control"
            v-model="body.question_no"
          >
            <option
              v-for="question in questionNo"
              :key="question"
              :value="question"
            >
              {{ question }}
            </option>
          </select>
        </div>
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
        <div class="col-md-6 mt-3" style="border: 1px gray solid">
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

        <div class="col-md-6 mt-3" style="border: 1px gray solid">
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

        <div class="col-md-6 mt-3" style="border: 1px gray solid">
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
        <div class="col-md-6 mt-3" style="border: 1px gray solid">
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
import ExamAPI from "../api/exam";
import ArgonButton from "@/components/ArgonButton.vue";
import { VueEditor } from "vue3-editor";
import QuestionAPI from "../api/question";
import AnswerAPI from "../api/answer";
import VueBasicAlert from "vue-basic-alert";
import { convertToSearchParams } from "../utils/utils";

export default {
  name: "authors-table",
  data() {
    return {
      exam_details: {},
      showMenu: false,
      error_text: "",
      success_text: "",
      questionData: {},

      questionImage: "",
      questionNo: [],

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
        question_no: this.body.question_no,
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

      this.$router.push("/view-question?" + this.forwardRouterQuery());
      //Push all of them to api.
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
    forwardRouterQuery() {
      return convertToSearchParams(this.$route.query);
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
    async fetchExamDetails() {
      // console.log(ExamAPI);
      const ExamList = await ExamAPI.fetExamDetails(this.$route.query.exam_id);

      this.examList = ExamList.data.exam;

      this.questionNo = this.examList[0].questions_available;
      console.log(this.examList);
    },
    async prePopulateData() {
      this.body = {
        question_text: this.questionData.question,
        question_explain: this.questionData.explain,
        option1: "",
        option2: "",
        option3: "",
        option4: "",

        optionImageData1: "",
        optionImageData2: "",
        optionImageData3: "",
        optionImageData4: "",
        questionImageData: "",
      };

      for (let index = 0; index < this.questionData.answers.length; index++) {
        const element = this.questionData.answers[index];
        if (element.option == "A") {
          this.body.option1 = element.answer;
        }
        if (element.option == "B") {
          this.body.option2 = element.answer;
        }
        if (element.option == "C") {
          this.body.option3 = element.answer;
        }
        if (element.option == "D") {
          this.body.option4 = element.answer;
        }
      }

      console.log("ANSWER is AMAZING");
    },
    async fetchQuestion() {
      console.log("This is it");
      let question_id = this.$route.query.question_id;
      try {
        const question = await QuestionAPI.fetchQuestion({ question_id });
        if (!question.data.success) {
          console.log("Error ");
          return;
        }
        this.questionData = question.data.question;

        this.prePopulateData();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchExamDetails();
    this.fetchQuestion();
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
