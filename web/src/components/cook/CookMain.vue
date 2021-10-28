<template>



  <div>
    <table class="cookMain" >
      <tr class="cookMainHead" style="width: 100%" >
        <th class="cookMainHeadth" style="width: 20%">桌号</th>
        <th class="cookMainHeadth" style="width: 20%">菜品</th>
        <th class="cookMainHeadth" style="width: 20%">数量</th>
        <th class="cookMainHeadth" style="width: 20%">状态</th>

      </tr>

      <tr class="cookMainList" v-for="items in cookCallResult" :key="items">

        <td>{{items[0]}}</td>
        <td>{{items[1]}}</td>
        <td>{{items[2]}}</td>
        <button>{{items[3]}}</button>
      </tr>
    </table>

  </div>



</template>

<script>
export default {
  name: "CookMain",
  data(){
    return{
      cookCallResult:"",
    }

  },

  methods: {
    async cookCall() {
      try {
        const res = await this.$cloudbase.callFunction({
          name: "CookCall",
          data: {

          },
        });
        this.cookCallResult = res.result;
        console.log(res.result);

      } catch (e) {
        console.error(e)

        this.cookCallResult = e.message;
      }
    },
  },

    mounted() {
    setInterval(this.cookCall,1000)

    }

}
</script>

<style scoped>

.cookMain {
  width: 1300px;
  table-layout :fixed;
  text-align: center;
  margin: 0 auto;
}
.cookMain .cookMainHead {
  font-size: 90px;
}
.cookMain .cookMainHead .cookMainHeadth {
  margin-left: 60px;
}
.cookMain .cookMainList {
  font-size: 30px;
  margin-top: 60px;
}




</style>