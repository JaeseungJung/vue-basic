<template>
    <div>
        <input type="text">


    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            firstName: "",
            lastName:"",
        };
    },

    watch: {
        firstName(){
    this.fullName= this.firstName + "" + this.lastName;
        },
        lastName(){
    this.fullName= this.firstName + "" + this.lastName;


    },
    },
    
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>