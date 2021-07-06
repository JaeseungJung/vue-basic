import axios form 'axios';

export dafault {
    methods:{
        async callAPI(url, method, data) {
            return (await axios({
                method: method,
                url:url,
                data:data
            }).catch(e=> {
                console.log(e);
            }).data;

        }
    }
}