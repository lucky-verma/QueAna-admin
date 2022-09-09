<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Add Question</p>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">Exam Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Question name</label
                  >
                  <input class="form-control" type="text" v-model="body.name" />
                </div>
                <div class="col-md-12 mt-2">
                  <label for="example-text-input" class="form-control-label"
                    >Difficulty level</label
                  >
                  <select
                    name="cars"
                    id="cars"
                    class="form-control"
                    v-model="body.difficulty"
                  >
                    <option value="EASY">Easy</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HARD">Hard</option>
                  </select>
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Addtional Information</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Problem Context
                  </label>
                  <textarea
                    class="form-control"
                    type="text"
                    rows="5"
                    v-model="body.problem_context"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Data Summary
                  </label>
                  <textarea
                    class="form-control"
                    type="text"
                    rows="5"
                    v-model="body.data_summary"
                  ></textarea>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Start Date</label
                  >
                  <input
                    class="form-control"
                    type="datetime-local"
                    v-model="body.start_time"
                  />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >End Date</label
                  >
                  <input
                    class="form-control"
                    type="datetime-local"
                    v-model="body.end_time"
                  />
                </div>
              </div>
              <div class="error_text">{{ error_text }}</div>
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
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ArgonButton from "@/components/ArgonButton.vue";
// import { Console } from "console";
// import { response } from "express";

const body = document.getElementsByTagName("body")[0];
import ExamAPI from "../../api/exam";

export default {
  name: "profile",
  watch: {},
  data() {
    return {
      showMenu: false,
      error_text: "",
      success_text: "",

      body: {
        name: "",
        start_time: "",
        end_time: "",
        data_summary: "",
        difficulty: null,
        problem_context: "",
      },
    };
  },
  methods: {
    reset_form() {
      this.body = {
        name: "",
        start_time: "",
        end_time: "",
        data_summary: "",
        problem_context: "",
      };
    },

    async SubmitForm() {
      console.log(this.body.difficulty);
      this.error_text = "";
      this.success_text = "";
      this.body.start_time = new Date(this.body.start_time);
      this.body.end_time = new Date(this.body.end_time);
      try {
        const reponse = await ExamAPI.createExam(this.body);
        console.log(reponse);
        console.log(reponse.data);
        if (reponse.data.success) {
          console.log("This sis uslajskl");
          this.success_text = "Exam has been created successfully";
        }
        this.reset_form();
      } catch (error) {
        if (!error.response.data.success) {
          this.error_text = error.response.data.body;
        }
      }
    },
  },
  components: { ArgonButton },

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  },
};
</script>

<style>
.error_text {
  margin-top: 15px;
  color: red;
}
.success_text {
  margin-top: 15px;
  color: green;
}
</style>
