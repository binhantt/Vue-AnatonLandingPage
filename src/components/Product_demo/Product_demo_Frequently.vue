<template>
    <div class="md:pt-[60vh] pt-[20vh]" >
        <div class="flex md:flex-row flex-col justify-center items-center">
           <div class="md:w-[90%]">
            <div class="grid md:grid-cols-2 grid-cols-1">
                <div class="text-4xl md:pr-[15vw] font-semibold">
                    <p>
                        Frequently asked questions from our social community
                        <br>
                        <br>
                        <span class="md:flex hidden"> 276k</span>
                    </p>
                    <span class="text-base font-normal	md:flex hidden">Active user from the community
                    </span>
                </div>
                <ul class="Product_Frequently-ul flex flex-col gap-3 ">
                    <li class="flex justify-between	pr-8">Where can I get software help? <i class="fa-solid fa-chevron-down"></i></li>
                    <li class="flex justify-between	pr-8">How much does data software costs? <i class="fa-solid fa-chevron-down"></i></li>
                    <li class="flex justify-between	pr-8">What kind of data is needed for software? <i class="fa-solid fa-chevron-down"></i></li>
                </ul>
            </div>
           </div>
        </div>  
        <img :src="img[0].bg" width="500" class="hidden md:flex">
    </div>
</template>
<script>
 import {Product_demo_home_f }from '@config'
export default{
    data(){
        return{
            img : Product_demo_home_f
        }
    }
}
</script>