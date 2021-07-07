<template>
  <div style="color: red; font-size: 30px">인라인 스타일 바인딩</div>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      styleObject: {
        color: "red",
        fontSize: "30px",
      },
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
