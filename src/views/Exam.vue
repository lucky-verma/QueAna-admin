<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Exam List</h6>
      <argon-button
        color="success"
        size="sm"
        class="ms-auto"
        @click="$router.push('/add-exam')"
        >Add Exam</argon-button
      >
    </div>

    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Exam Name
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Total Question
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Difficulty
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Start Time
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                End Time
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Created On
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
                  {{ data.total_questions }}
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
                <argon-button
                  color="primary"
                  @click="
                    $router.push(
                      '/view-question/?exam_id=' +
                        data._id +
                        '&exam_name=' +
                        data.name
                    )
                  "
                  >View Quesitons</argon-button
                >
                <argon-button
                  color="danger"
                  style="margin-left: 15px"
                  @click="$router.push('/add-question/')"
                  >Delete Exams</argon-button
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
import ExamAPI from "../api/exam";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "authors-table",
  data() {
    return {
      examList: [],
    };
  },
  components: {
    ArgonButton,
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    },
  },
  methods: {
    returnClass(data) {
      if (data == "HARD") {
        return "bg-gradient-danger";
      } else if (data == "MEDIUM") {
        return "bg-gradient-warning";
      } else {
        return "bg-gradient-success";
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
