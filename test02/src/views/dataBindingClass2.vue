<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">
    Class Binding </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            activeClass: "active",
            errorClass: "text-red",
            // fontClass: "font-big",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
/* scoped 해당 컴포넌트에서만 작동 */

.container {
    width: 100%;
    height: 200px;
}

.active{
    background-color: yellow;
    font-weight: bold;
}

.text-red{
    color: red;
}

</style>