<template>
  <div></div>
</template>
<script>
export default {
  inject: ["itemLength"],
  mounted() {
    console.log(this.itemLength + " " + "배열수.");
  },
};
</script>
