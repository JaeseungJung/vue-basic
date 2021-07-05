<template>
    <div>
        <input type="text" v-model.number="num1" />
        <input type="number" v-model.number="num1" />

        <button @click="chanageValue()">값 변경</button>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: "",
            num1:0,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        chanageValue(){
    console.log("버튼실행");
    // this.text1 = "South Korea";

        },
    },
}
</script>