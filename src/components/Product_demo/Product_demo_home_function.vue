<template>
    <div class="flex flex-col">
        <div class="flex flex-col justify-center items-center py-20 gap-3 ">
            <h1 class="text_h1 md:text-4xl text-2xl font-semibold	">Working Process</h1>
            <p class="md:text-5xl text-3xl font-bold">The only app you will need</p>
        </div>
        <div class="flex flex-col md:gap-0 gap-3 justify-center" :style="{ backgroundImage: `url(${img[0].bg})` }">
            <div class="flex  md:flex-row flex-col justify-center items-center md:gap-[20rem] gap-3"> 
                <div class="flex flex-col bg-pink-100 py-[4rem] px-[2rem] rounded-full items-center ">
                    <img :src="img[0].img1" width="100">
                    <p class="w-[80%] text-center font-bold">New sharing made for people</p>
                </div>
                <div class="flex flex-col bg-pink-100 py-[4rem] px-[0.1rem] rounded-full items-center ">
                    <img :src="img[0].img2" width="100">
                    <p class="w-[50%] text-center font-bold">Thousand of features and Custom option.</p>
                </div>
            </div>
            <div class="md:flex hidden    flex-col  px-[4rem] rounded-full items-center ">
                <img :src="img[0].imgketnoi" width="600">
              
            </div>
            <div class="flex md:flex-row flex-col  justify-center items-center gap-3">
                <div class="md:flex hidden flex-col justify-start">
                    <p class="font-bold text-7xl">226K</p>
                    <p>Active user from the community </p>
                </div>
                <div class="md:flex hidden text-3xl text-blue-500"> --------------------------</div>
                <div class=" flex-col flex bg-pink-100 py-[4rem] px-[2rem] rounded-full items-center ">
                    <img :src="img[0].img3" width="100">
                    <p class="w-[80%] text-center font-bold">One integrated solution Manage</p>
                </div>
                <div class="md:flex hidden text-3xl text-blue-500"> --------------------------</div>
                <div class="md:hidden flex  flex-col justify-start items-center">
                    <p class="font-bold text-7xl">226K</p>
                    <p class=" text-xl">Active user from the community </p>
                </div>
                <div class="flex flex-col justify-start items-center md:mx-8">
                    <p class="font-bold text-7xl">90%</p>
                    <p class=" text-xl">(4,655) Positive Rating </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import { Product_demo_home_functiondata } from '@config';
export default {
   data(){
    return {
        img : Product_demo_home_functiondata , 
    }
   } 
}
</script>