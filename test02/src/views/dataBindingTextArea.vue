<template>
    <div>
<textarea v-model="message"> </textarea>
<br>
<textarea v-model="message2"> </textarea>

    </div>

</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            message: "여러줄을 입력할 수 있는 textArea입니당.",
            message2: "두번째 텍스트 에어리어 입니다.",
         
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>