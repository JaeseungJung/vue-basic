<template>
  <div>
    <Child ref="child_component" />
  </div>
</template>
<script>
import Child from "../components/Child.vue";

export default {
  name: "",
  components: { Child },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    //document.getElmentById 기능과 유사함.
    // this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.fullName = "Jason Jung";
  },
  unmounted() {},
  methods: {},
};
</script>
