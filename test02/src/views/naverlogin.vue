<template>
  <div>
    <div id="naverIdLogin"></div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      naverLogin: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {
    (this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "BIon5nxWJ_UTCtO0i0kT", // 개발자센터에 등록된 ClientID
      callbackUrl: "http://localhost:8081/naverlogin", // 개발자센터에 등록한 callback url
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 90 }, // color는 white or green
    })),
      this.naverLogin.init();
  },

  unmounted() {},
  methods: {},
};
</script>
