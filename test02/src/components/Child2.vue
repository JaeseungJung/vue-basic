<template>
  <div>
    <button @click="sendDataParent">자식에서 부모로 데이터 전달</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: { Child2 },
  data() {
    return {
      msg: "자식 컴포넌트에서 보내는 메시지",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendDataParent() {
      this.$emit("send-message", this.msg);
    },
  },
};
</script>
