<template>
  <div></div>
</template>
<script>
import ProvideChildInject from "../components/ProvideChildInject.vue";
export default {
  name: "",
  components: { ProvideChildInject },
  data() {
    return {
      items: [A, B],
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
