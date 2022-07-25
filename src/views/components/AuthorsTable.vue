<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Question Bank</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Question Bank Name
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
                Created On
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in questionBank" :key="data._id">
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
                <p class="text-xs font-weight-bold mb-0">5</p>
                <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">Online</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  data.created_at.toString()
                }}</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  style="margin-left: 4px"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Delete</a
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
import QuestionBankAPI from "../../api/questiobank";

export default {
  name: "authors-table",
  data() {
    return {
      questionBank: [],
    };
  },
  methods: {
    async fetchAllQuestionBank() {
      // console.log(QuestionBankAPI);
      const fetchQb = await await QuestionBankAPI.fetchAllQuestions();

      this.questionBank = fetchQb.data.question_bank;

      console.log(this.questionBank);
    },
  },
  created() {
    this.fetchAllQuestionBank();
  },
};
</script>
