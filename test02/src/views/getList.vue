<template>
  <div>
    <label>first name:</label>
    <input type="text" v-model="firstName" />
  </div>

  <div>
    <label>last name:</label>
    <input type="text" v-model="lastName" />
  </div>

  <div>
    <label>email:</label>
    <input type="text" v-model="email" />
  </div>

  <div></div>

  <div>
    <button @click="createPerson">생성</button>
  </div>
  <table>
    <thead>
      <tr>
        <th>fisrt name</th>
        <th>last name</th>
        <th>email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr :key="person.id" v-for="(person, idx) in list">
        <td><input type="text" v-model="person.first_name" /></td>
        <td><input type="text" v-model="person.last_name" /></td>
        <td><input type="text" v-model="person.email" /></td>
        <td><button @click="deletePerson(person.id)">삭제</button></td>
        <td><button @click="updatePerson(idx)">수정</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getList();
  },
  unmounted() {},
  methods: {
    async getList() {
      this.list = await this.$api("/api/getList", "get", {}); // http://localhost
      console.log(this.list);
    },
    async createPerson() {
      const r = await this.$api("/api/createPerson", "post", {
        param: [
          {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
          },
        ],
      });
      console.log(r);
      this.getList;
    },
    async deletePerson(id) {
      const r = await this.$api("/api/deletePerson", "post", {
        param: [id],
      });
      console.log(r);
      this.getList;
    },
    async updatePerson(idx) {
      const r = await this.$api("/api/updatePerson", "post", {
        param: [
          {
            first_name: this.list[idx].first_name,
            last_name: this.list[idx].lastName,
            email: this.list[idx].email,
          },
          this.list[idx].id,
        ],
      });
      console.log(r);
      this.getList();
    },
  },
};
</script>
