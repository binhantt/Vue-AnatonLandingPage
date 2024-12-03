<template>
    <div class="pt-[60vh] " >
        <div class="flex justify-center items-center">
           <div class="w-[80%]">
            <div class="grid grid-cols-2 ">
                <div class="text-4xl pr-[15vw] font-semibold">
                    <p>
                        Frequently asked questions from our social community
                        <br>
                        <br>
                        276k
                    </p>
                    <span class="text-base font-normal	">Active user from the community
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
        <img :src="img[0].bg" width="500">
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