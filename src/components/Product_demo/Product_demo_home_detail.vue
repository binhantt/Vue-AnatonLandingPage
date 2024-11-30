<template>
  <div class="p-4 bg-no-repeat bg-right	" v-for="(ele, index) in Image" :key="index" :style="{ backgroundImage: `url(${ele.bg})` }">
    <div class="text-center py-[20vh] text-white gap-5 flex flex-col justify-center items-center font-semibold	 ">
        <div class="text-3xl">
            Included Capabilities
        </div>
        <div class="text-4xl">
            Features designed for you
        </div>
    </div>
   <div class="flex justify-center">
    <div class="w-[80%] p-4 ">
        <div class="grid grid-cols-2 gap-[10vh] drop-shadow	">
            <div class="flex items-center justify-between gap-10 bg-white rounded-xl  p-10">
            <div class="grid gird-cols-2 gap-[25vh]	">
                <img :src="ele.user" width="150">
            <div class="">
                <i class="fas fa-long-arrow-up Product_demo_home_detail-i  text-6xl text-blue-600"></i>
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
            <div class="flex items-center justify-between gap-10 bg-white rounded-xl  p-10">
            <div class="grid gird-cols-2 gap-[25vh]	">
                <img :src="ele.img1" width="300">
            <div class="">
                <i class="fas fa-long-arrow-up Product_demo_home_detail-i  text-6xl text-blue-600"></i>
            </div>
            </div>
                <div class="flex flex-col gap-5 text-gray-500">
                    <h1 class="text-2xl font-medium	text-black">Customization</h1>
                    <p class="w-[80%] text-start">Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son</p>
                <div class="flex ">
                    <ul class="list-disc Product_demo_home_detail-ul " >
                        <li >Organize your to-do list by workflow</li>
                        <li>Always include a deadline</li>
                        <li>Break big work into smaller tasks</li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="flex items-center justify-between gap-10 bg-white rounded-xl  p-10">
            <div class="grid gird-cols-2 gap-[25vh]	">
                <img :src="ele.img4" width="300">
            <div class="">
                <i class="fas fa-long-arrow-up Product_demo_home_detail-i  text-6xl text-blue-600"></i>
            </div>
            </div>
                <div class="flex flex-col gap-5 text-gray-500">
                    <h1 class="text-2xl font-medium	text-black">Customization</h1>
                    <p class="w-[80%] text-start">Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son</p>
                <div class="flex ">
                    <ul class="list-disc Product_demo_home_detail-ul " >
                        <li >Organize your to-do list by workflow</li>
                        <li>Always include a deadline</li>
                        <li>Break big work into smaller tasks</li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="flex items-center justify-between gap-10 bg-white rounded-xl  p-10">
            <div class="grid gird-cols-2 gap-[25vh]	">
                <img :src="ele.img3" width="300">
            <div class="">
                <i class="fas fa-long-arrow-up Product_demo_home_detail-i  text-6xl text-blue-600"></i>
            </div>
            </div>
                <div class="flex flex-col gap-5 text-gray-500">
                    <h1 class="text-2xl font-medium	text-black">Extensions & Addons</h1>
                    <p class="w-[80%] text-start">Continue indulged speaking the was out horrible domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son</p>
                <div class="flex ">
                    <ul class="list-disc Product_demo_home_detail-ul " >
                        <li >Organize your to-do list by workflow</li>
                        <li>Always include a deadline</li>
                        <li>Break big work into smaller tasks</li>
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