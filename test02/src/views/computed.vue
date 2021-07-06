<template>
    <div> 
        <h1> Hello, {{firstName} {{lastName}}} </h1>
        <h1> {{fullName}} </h1>
        <input type="text" v-model="firstname">

    
    
     </div>
</template>
<script>
export default {
    name: "",
    components: {},
   
    data() {
        return {
            firstName: "Jason",
            lastName: "Jung",
        };
    },
    
     computed:{
        fullName () {
            return this.firstName + "" + this.lastName;

        },
    },
},
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>