<template>
    <div>
<label><input type="checkbox" :value="seoul" v-model="cities" /> 서울 </label>  
<label><input type="checkbox" value="064" v-model="cities" /> 제주 </label>
<label><input type="checkbox" value="21" v-model="cities" /> 부산 </label>
<br>
<div>선택한 지역: {{ cities }}</div>
</div>

<div>   
    <label ></label>
</div>

</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [], 
            seoul:"02",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>