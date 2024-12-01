<template>
   <div class="flex justify-center items-center relative">
    <div  class="flex w-[80%]" v-for="(val , index) in img " :key="index">
       <div class="w-1/2  relative">
        <img :src="val.img8" width="900">
       </div>
       <div class="flex flex-col justify-center items-center">
           <div class="w-[60%] flex flex-col gap-5">
            <div class=" text-4xl">
                <h1>An editor designed
                    for contracts.</h1>
            </div>
            <ul class="flex flex-col gap-3 Pr_edittor ">
                <li>
                    <p>Admin Dashboard</p>
                    <p>Seeing rather her you not esteem men settle genius excuse. Deal say over you age from comparison new.</p>
                </li>
                <li>
                    <p>Admin Dashboard</p>
                    <p>Seeing rather her you not esteem men settle genius excuse. Deal say over you age from comparison new.</p>
                </li>
            </ul>
           </div>
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