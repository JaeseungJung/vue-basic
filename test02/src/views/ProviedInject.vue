<template>
  <div>
    <ProvideChildInject />
  </div>
</template>
<script>
import ProvideChildInject from "../components/ProvideChildInject";
export default {
  name: "",
  components: { ProvideChildInject },
  data() {
    return {
      items: ["A", "B", "C"],
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
