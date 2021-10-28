import Vue from "vue";
import VueRouter from "vue-router";
import test from "../components/test"
import HelloWorld from "@/components/HelloWorld";


Vue.use(VueRouter)

export  default new VueRouter({
   routes:[
      {
         path:'/test',
         name:'test',
         component:test,
      },
      {
         path:'/helloworld',
         name:'helloworld',
         component:HelloWorld,
      }


   ]


});
