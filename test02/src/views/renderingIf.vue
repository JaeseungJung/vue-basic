<template>
    <div>
        <h1 v-if="type =='A'">A</h1>
        <h1 v-else-if="type == 'B'">B</h1>
        <h1 v-else>C</h1>

        <button>조회</button>
        <button v-if="userRole == 'admin'">생성</button>
        <button v-show="userRole == 'admin'">삭제</button>

        <h1>C</h1>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            type: "B",
            userRole: "admin",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>