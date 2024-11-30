<template>
   <div class="flex justify-center items-center">
    <div  class="w-[80%]" v-for="(val , index) in img " :key="index">
       <div class="w-1/2 h-[100vh]  relative">
        <img :src="val.img8" alt="">
       </div>

    </div>
   </div>
</template>
<script>
import { Navbar_edittor_data } from '@config';
export default{
    data (){
        return{
            img : Navbar_edittor_data 
        }
    }
}
</script>   