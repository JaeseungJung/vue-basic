<template>
  <div>
    <p>{{ count }}</p>
    <!-- <p>{{ cart.toString() }}</p> -->
    <button @click="addCart">장바구니 추가</button>
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
  computed: {
    count() {
      return this.$store.state.count;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  setup() {},
  created() {},
  updated() {
    console.table(this.cart);
  },
  mounted() {},
  unmounted() {},
  methods: {
    addCart() {
      //commit 함수접근 하려면 사용해야한다
      this.$store.commit("addCart", {
        productId: "1",
        productName: "마우스",
        price: 12000,
      });
    },
  },
};
</script>
