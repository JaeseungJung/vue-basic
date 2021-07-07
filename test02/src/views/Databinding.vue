<template>
  <div>
    <h1>Hello {{ title1 }}</h1>
  </div>

  <div>
    <h1>{{ title2 }}</h1>
  </div>

  <div>
    <h1>{{ title3 }}</h1>

    <span style="font-size: 100px">&#9749;</span>
  </div>

  <div>
    <h1>{{ cofeeIcon }}</h1>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      title1: "World",
      title2: "Jason Jung",
      title3: "Welcome!",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
