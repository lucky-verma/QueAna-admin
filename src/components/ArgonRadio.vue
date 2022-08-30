<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      :name="name"
      :id="id"
      :checked="checked"
      :value="value"
    />
    <label class="custom-control-label" :for="id">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "argon-radio",
  props: {
    name: String,
    id: String,
    value: String,
    checked: String,
  },
  mounted() {
    console.log(this.id);
  },
};
</script>
