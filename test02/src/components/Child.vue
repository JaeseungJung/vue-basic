<template>
  <div>
    <button @click="myFunction" ref="btn">클릭</button>
    <!-- 뷰에서 쓰는 유일한 값. 아이디와 유사 ref -->
    <!-- 레퍼 런스  -->
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
      fullName: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log("부모 컴포넌트에서 직접 발생시킨 이벤트");
    },
  },
};
</script>
