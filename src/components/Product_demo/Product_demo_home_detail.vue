<template>
  <div class="p-4" v-for="(ele, index) in Image" :key="index" :style="{ backgroundImage: `url(${ele.bg})` }">
   <div class="flex justify-center">
    <div class="w-[80%] p-4">
        <div class="grid grid-cols-2 gap-3">
       <div class="flex items-center justify-between gap-10 bg-white rounded-xl  p-10">
      <div class="flex gap-[15vh]   flex-col	">
        <img :src="ele.user" width="200">
       <div class="">
        <i class="fa-light fa-up-right text-8xl"></i>
       </div>
      </div>
        <div class="flex flex-col gap-5 text-gray-500">
            <h1 class="text-2xl font-medium	text-black">Multiple Managers</h1>
            <p class="w-[80%] text-start">Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son</p>
           <div class="flex ">
            <ul class="list-disc Product_demo_home_detail-ul " >
                <li >Capture everything </li>
                <li>Organize your to-do list by workflow</li>
                <li>Always include a deadline</li>
            </ul>
           </div>
        </div>
       </div>
    </div>
    </div>
   </div>
   </div>
</template>
<script>
import { Product_demo_home_detaildata } from "@config";
export default {
    data(){
        return {
            Image : Product_demo_home_detaildata,
        }
    }
}
</script>