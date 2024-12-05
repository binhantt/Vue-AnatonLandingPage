<template>
   <div class="flex justify-center items-center py-10">
    <div  class="flex md:flex-row flex-col md:w-[90%]" v-for="(val , index) in img " :key="index">
       <div class="md:w-1/2 relative">
        <img :src="val.img8" class=" w-full">
       </div>
       <div class="flex flex-col justify-center items-center">
           <div class="md:w-[50%] flex flex-col gap-5">
            <div class=" text-4xl font-semibold	">
                <h1>An editor designed
                    for contracts.</h1>
            </div>
            <ul class="flex flex-col gap-3 px-10 ">
                <li class="relative">
                   <div class="Pr_edittor">
                    <p class="font-semibold	">Admin Dashboard</p>
                    <p class="text-gray-500">Seeing rather her you not esteem men settle genius excuse. Deal say over you age from comparison new.</p>
                   </div>
                </li>
                <li class="relative">
                   <div  class="Pr_edittor">
                    <p class="font-semibold	">Cloud Hosting</p>
                    <p class="text-gray-500">Esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                   </div>
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