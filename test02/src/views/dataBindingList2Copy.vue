<template>
<!-- Axios 설치 -->

  <div>
     <select v-model="selectedGender">
        <option value="">전체</option>
        <option value="male">남자</option>
        <option value="female">여자</option>
        </select>


    <input type="text">
<button @click="getUserList">조회</button>
  </div>


  <table>

<thead>
    <tr>
        <th>이름</th>
        <th>나이</th>
        <th>성별</th>
        <th>전화번호</th>
        <th>직장</th>
    </tr>
</thead>

<tbody>

    <tr :key="user.userId" v-for="user in userList">
<td> {{user.name}}</td>
<td> {{user.age}}</td>
<td> {{user.gender}}</td>
<td> {{user.phone}}</td>
<td> {{user.company}} </td>
    </tr>


</tbody>


</table>

  

</template>
<script>
import axios from "axios";


export default {
  name: "",
  components: {},
  data() {
    return {
      selectedGender:"",
      url: "https://9b9c83af-3817-455b-8300-a31252020c1b.mock.pstmn.io/getUserList",
      userList:[],
    };
  },
  setup() {
    
  },
  created() {},
  mounted() {
this.getuserList();

  },
  unmounted() {

  },
  methods: {
    async getuserList(){
    userList = (await axios.get(this.url)).data.data;

 if (this.selectedGender == "") {
   // 성별 전체 선택
   if (this.searchName == "") {
 this.userList=users;
 } else {
   this.userList = users.filter(
     (u) =>
      u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1  // 사용자 이름에서 입력한 이름을 포함하는 데이터
   );
 } else {
 // 이름 입력안함
 this.userList = users.filter(
   (u) =>
   u.gender == this.selectedGender &&
   u.name.toLowerCase().indexOf(this.searchName.toLowercase()) > -1
 );
 }


},

  },
};

// 위와 동일한 for~of문
// var user2 = [];
// for (var user of userList) {
//   if (
//     user.gender == this.selectedGender &&
//       u.name.toLowerCase().indexOf(this.searchName.toLowercase()) > -1
//   ){
//     user2.push(user);
//   }
// }


</script>



<style scoped>

table{
    width: 100%;
}

table, th, td {
    border-collapse: collapse;
}

th,td {
    border: 1px solid black;
    padding: 10px;
}

thead{
    background-color: rgb(220, 255, 186);
}

.userNameList
{
    background-color: rgb(215, 255, 255);
    width: 30px;
}

</style>