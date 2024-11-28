<template>
   <div class="w-full flex justify-center  items-center relative">
        <img :src="bg[0].bgurl2" width="70%" class="drop-shadow-xl	h-[90vh] mr-[15rem]" >
        <div class="flex flex-col absolute right-[8rem] gap-10">
           <div class="flex gap-3 items-center">
            <i class="fa-regular fa-video bg-blue-500 px-6 py-5 rounded-full text-3xl text-white border-white border drop-shadow-xl"></i>
            <div>
                <p>
                    Calling Features</p>
                <p class="font-medium text-xl">Live Video Call</p>
            </div>
           </div>
           <div class="flex gap-3 items-center">
            <i class="fa-regular fa-database bg-black px-6 py-5 rounded-full text-3xl text-white border-white border drop-shadow-xl"></i>
            <div>
                <p>
                    Database</p>
                <p class="font-medium text-xl">Unlimited Database</p>
            </div>
           </div>
           <div class="flex gap-3 items-center">
            <i class="fa-regular fa-gear bg-blue-500 px-6 py-5 rounded-full text-3xl text-white border-white border drop-shadow-xl"></i>
            <div>
                <p>
                    Database</p>
                <p class="font-medium text-xl">Unlimited Database</p>
            </div>
           </div>
        </div>
    </div>
</template>
<script>
import { NavbarNg } from "@config";
export default {
    data(){
        return {
            bg :  NavbarNg,
        }
    }
}
</script>