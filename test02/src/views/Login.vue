<template>
  <div>{{ user.email ? "로그인 되었습니다." : "로그인후 사용하세요." }}</div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
