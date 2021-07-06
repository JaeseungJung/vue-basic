<template>
<!-- {{menus}} 
 -->


  <h2>메뉴</h2>
      <button
      @click="OrderMenu(menu.menuId)"
      :key="menu.menuId"
      v-for="menu in menus"
    >
      {{ menu.menuName }} ({{ menu.price }}원)
    </button>
<h2>선택한 메뉴</h2>

  <div>
     <table>
<thead>
    <tr>
        <th>메뉴명</th>
        <th>가격</th>
        <th>수량</th>
        <th>합계</th>
    </tr>
</thead>



<tbody>

    <tr :key="selectedMenu.menuId" v-for="selectedMenu in selectedMenu">

<td> {{selectedMenu.menuName}}</td>
<td> {{selectedMenu.price}}</td>
<td> <input type="number" value=1 id="orderQty"> </td>
<td> {{selectedMenu.price*orderQty.qty}} </td>

    </tr>


</tbody>

        </table>
  </div>

  <h2>제휴/할인카드/쿠폰</h2>
  <div id="divDiscount" class="container">
    <div>
      <select name="" id="selCREDIT"></select>
    </div>
    <div>
      <select name="" id="selTELECOM"></select>
    </div>
    <div>
      <select name="" id="selPOINT"></select>
    </div>
    <div>
      <select name="" id="selOKCASHBAG"></select>
    </div>
    <div>
      <select name="" id="selCoupons"></select>
    </div>
  </div>

  <div style="padding: 10px; text-align: center;">
    <button class="btn-cal" onclick="calculateAmount();">결제 금액 계산</button>
  </div>

  <div id="divRealTotal" style="display: none;">
    <h2>최종 결재 금액: <strong id="realTotal"></strong></h2>
  </div>
  
{{selectedMenu}}
    <div></div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            selectedMenu:[],
            menus : [{
        menuId: 1,
        menuName: "무제한 샐러드바",
        price: 25000
      },
      {
        menuId: 2,
        menuName: "안심 스테이크(150g)",
        price: 35500
      },
      {
        menuId: 3,
        menuName: "립아이 스테이크(220g)",
        price: 22500
      },
      {
        menuId: 4,
        menuName: "채끝 등심 스테이크(210g)",
        price: 30500
      },
      {
        menuId: 5,
        menuName: "자몽에이드",
        price: 6500
      },
      {
        menuId: 6,
        menuName: "애플망고에이드",
        price: 6500
      },
      {
        menuId: 7,
        menuName: "생맥주",
        price: 400
      }
    ],


        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        OrderMenu(menuId){
            this.selectedMenu.push(this.menus[menuId-1]);

            // console.log(this.selectedMenu);
        },

    }
}
</script>


<style scoped>

table,
    th,
    td {
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid #222;
      padding: 10px;
    }

</style>