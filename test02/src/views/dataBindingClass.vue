<template>
    <div class="container" 
    v-bind:class=" { active: isActive, 'text-red': hasError} "
    > 
    Class Binding </div>

    <div> <input type="text" v-model="txt1" v-bind:class="{'border:red': isEmpty}" @blur="checkEmpty"> </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            isActive: true,
            hasError: true,
            txt1: false,
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

.border-red{
    border:red dotted;
}

</style>