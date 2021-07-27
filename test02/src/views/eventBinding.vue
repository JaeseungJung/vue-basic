<template>
  <div>
    <!-- <button v:on="myFunction"> 클릭 </button> -->
    <button @click="myFunction">클릭</button>
    <br />

    <select v-model="sel" @change="changeSelect">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">B</option>
    </select>
    <br />

    <input type="text" @focus="myFunction" />
    <input type="text" @blur="myFunction" />
    <input type="text" @keyup="myFunction" />
    <br />
    <input type="text" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>

    <!-- @메서드 함수 호출 -->
  </div>
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log("클릭 이벤트 발생");
    },
    changeSelect() {
      console.log("체인지");
    },
    doSearch() {
      console.log("두 써치");
    },
  },
};
</script>
