<template>
  <div>
    <childComponent :num="7" :isSelected="isSelected" :arr="arr" />
  </div>
</template>
<script>
import childComponent from "../components/childComponent.vue";
export default {
  name: "",
  components: { childComponent },
  data() {
    return {
      num1: 5,
      isSelected: true,
      arr: [1, 2, 3, 4],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>