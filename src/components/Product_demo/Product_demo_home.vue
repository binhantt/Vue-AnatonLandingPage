<template>
   <div class="w-full flex justify-center  items-center relative py-4">
        <img :src="bg[0].bgurl2"  class="md:w-[70%] w-[80%] drop-shadow-xl	md:h-[90vh] md:mr-[10rem]" >
        <div class="flex flex-col absolute right-[6rem] gap-10">
           <div class="md:flex gap-3 items-center hidden">
            <i class="fa-regular fa-video bg-blue-500 px-6 py-5 rounded-full text-3xl text-white border-white border drop-shadow-xl"></i>
            <div>
                <p>
                    Calling Features</p>
                <p class="font-medium text-xl">Live Video Call</p>
            </div>
           </div>
           <div class="md:flex hidden gap-3 items-center">
            <i class="fa-regular fa-database bg-black px-6 py-5 rounded-full text-3xl text-white border-white border drop-shadow-xl"></i>
            <div>
                <p>
                    Database</p>
                <p class="font-medium text-xl">Unlimited Database</p>
            </div>
           </div>
           <div class="md:flex hidden gap-3 items-center">
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