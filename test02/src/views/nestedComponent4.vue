<template>
  <div>
    <DataGrid :header="header" :body="body" />
  </div>
</template>
<script>
import DataGrid from "../components/dataGrid.vue";
export default {
  name: "",
  components: { DataGrid },
  data() {
    return {
      header: ["이름", "연락처", "나이"],
      body: [
        ["유재석", "010-2333-9980", 45],
        ["김종국", "010-3422-6715", 92],
        ["송지효", "010-5593-8760", 33],
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
