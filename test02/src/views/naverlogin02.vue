<template>
  <div>
    <div v-show="!user.email" id="naverIdLogin"></div>
    <button v-show="user.email" @click="logout">로그아웃</button>
  </div>

  <div>
    <svg viewBox="0 0 512 512" width="100" title="arrow-alt-circle-right">
      <path
        d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"
      />
    </svg>
    <svg viewBox="0 0 512 512" width="100" title="arrow-alt-circle-right">
      <path
        d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"
      />
    </svg>
  </div>

  <div>
    <svg viewBox="0 0 448 512" width="100" title="bell">
      <path
        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
      />
    </svg>
    <svg viewBox="0 0 448 512" width="100" title="bell">
      <path
        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
      />
    </svg>
  </div>

  <div>
    <svg viewBox="0 0 384 512" width="100" title="map-marker-alt">
      <path
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    </svg>
    <svg viewBox="0 0 384 512" width="100" title="map-marker-alt">
      <path
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      />
    </svg>
  </div>
</template>
<script>
import axios from "axios";

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
      clientId: "BP26y1gTH7en9eLtuATo", // 개발자센터에 등록된 ClientID
      callbackUrl: "http://localhost:8080/naverlogin02", // 개발자센터에 등록한 callback url
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 90 }, // color는 white or green
    })),
      this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);

        this.$store.commit("user", this.naverLogin.user);
      }
    });
  },

  unmounted() {},
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url =
        "/oauth2.0/token?grant_type=delete&client_id=BP26y1gTH7en9eLtuATo&client_secret=Z8pRhBCtvt&access_token=" +
        accessToken +
        "&service_provider=NAVER";

      axios.get(url).then((res) => {
        console.log(res);
        this.$store.commit("user", {});
        this.$router.push({ path: "/naverlogin02" });
      });
    },
  },
};
</script>

<style scoped>
body {
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  background: #eee;
}

svg {
  margin: 2rem;
}

div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
div:nth-child(1) {
  background: #2196f3;
  svg {
    fill: #90caf9;
    &:hover,
    &:nth-child(2) {
      filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    }
  }
}
div:nth-child(2) {
  background: #66bb6a;
  svg {
    fill: #1b5e20;
    &:hover,
    &:nth-child(2) {
      filter: drop-shadow(0 0 20px #1b5e20);
    }
  }
}
div:nth-child(3) {
  background: #f44336;
  svg {
    fill: white;
    &:hover,
    &:nth-child(2) {
      filter: drop-shadow(4px 4px 1px #b71c1c);
    }
  }
}
</style>
