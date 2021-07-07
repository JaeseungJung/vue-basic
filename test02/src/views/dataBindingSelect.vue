<template>
  <div>
    <select v-model="city" @change="getSelectValue">
      <option value="02">서울</option>
      <option value="064">제주</option>
      <option value="21">부산</option>
      <option value="77">용인</option>
    </select>

    <button @click="getSelectValue">조회</button>
    <br />
    <br />
    <div>선택한지역 {{ city }}</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      city: "77",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getSelectValue() {
      console.log(this.city);
    },
  },
};
</script>
