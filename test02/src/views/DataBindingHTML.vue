<template>
    <div>{{htmlString}}</div>
    <div v-html="htmlString">   </div>
    <div v-html="htmlBox">   </div>



</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            htmlString: "<p style=color:red;> 빨간색 글자.</p>",
            htmlBox:"<p style=color:yellow;> 노란색 글자. </p>"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>