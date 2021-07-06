<template>
  <div>
    <Child ref="child_component" />
  </div>
</template>
<script>
import Child2 from "../components/Child2.vue";

export default {
  name: "",
  components: { Child2 },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    sendMessage(data);
  },
  unmounted() {},
  methods: {},
};
</script>
