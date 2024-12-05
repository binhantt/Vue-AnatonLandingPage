<template>
  <div class="flex flex-col justify-center items-center py-[20vh]">
    <div class="flex flex-col items-center justify-center gap-10 font-medium	">
      <div class="text-xl">News & Events</div>
      <div class="text-3xl">Check out our blog posts</div>
    </div>
    <div class="flex justify-center items-center ">
        <div class="grid md:grid-cols-3 gap-3 md:w-[90%] w-full grid-clos-1" > 
           <div v-for="(ele , index) in img" :key="index">
            <div class="flex flex-col bg-white gap-3 py-3 px-6">
                <div class="py-3">
                  <img :src="ele.img" width="400">
                </div>
                <ul class="Prodcut_demo_home_event_ul">
                  <a>Admin</a>
                  <li>
                   <p> January 20, 2021</p>
                  </li>
              </ul>
              <div class="text-3xl font-medium">
                {{ele.title}}
              </div>
              <div class="text-base font-medium	">
                Continue Reading 
              </div>
            </div>
            
           </div>
        </div>
    </div>
  </div>
</template>
<script>
import {Product_demo_home_event} from "@config"
export default {
  data (){
    return {
      img :Product_demo_home_event
    }
  }
}
</script>