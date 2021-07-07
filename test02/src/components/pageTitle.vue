<template>
  <h1 class="page-title">{{ title }} <br /></h1>

  <h2 class="page-title2">
    (<small>{{ title2 }}</small
    >)
  </h2>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    title: {
      type: String,
      default: "페이지 제목",
    },
    title2: {
      type: String,
      default: "부제목",
    },
  },
};
</script>
<style scoped>
.page-title {
  border-left: 4px solid red;
  padding-left: 5px;
  text-align: left;
}

.page-title2 {
  border-left: 4px solid rgb(159, 255, 188);
  padding-left: 5px;
  text-align: left;
  margin-left: 10px;
}
</style>
