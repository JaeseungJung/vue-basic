<template>
  <div>
    <modal-layout>
      <template v-slot:header>
        <h1>모달 팝업 타이틀</h1>
      </template>

      <template v-slot:main>
        <p>모달 콘텐츠 1번</p>
        <p>모달 콘텐츠 2번</p>
        <p>모달 콘텐츠 3번</p>
      </template>

      <template v-slot:footer>
        <button>닫기</button>
      </template>
    </modal-layout>
  </div>
</template>
<script>
import ModalLayout from "../components/SlotModalLayout.vue";
export default {
  name: "",
  components: { "modal-layout": ModalLayout },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
