<template>
  <div v-for="(ele,index ) in img " :key="index" class="flex justify-center items-center ">
    <div class="w-full justify-center flex bg-no-repeat	bg-right	py-20" :style="{ backgroundImage: `url(${ele.bg})` ,}">
        <div class="w-[80%] flex  "  >
         
      <div class="grid grid-cols-2 mb-4 ">
        <div class="flex flex-col gap-4 justify-center ">
            <div class="text-6xl font-semibold 	">
                <h1 >Sign up & get</h1>
                <p class="relative"> <span class="text-white Product-register-Home-spam">15 days</span> free trial</p>
            </div>
            <div class="text-start text-gray-500">
                Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
            </div>
            <ul class="Product-ul-register flex flex-col gap-3">
                <li>
                   
                    Ticketing system
                </li>
                <li>
                   
                    Automated ticket distribution
                </li>
                <li>
                    
                    Social media integration
                </li>
                <li>
                  
                    Call and voice mail recordings
                </li>
            </ul>
            <div class="border-t-2">
              <div class="text-gray-400">
                Give us a free cal
              </div>
              <div class="text-3xl ont-semibold">
                +4733378901
              </div>
            </div>
        </div>

        <div class="flex  justify-end relative items-center">
          <Form1 class="bg-white drop-shadow-md p-10 flex flex-col gap-10 rounded-md w-3/4	" 
          :title="'Request for demo'" :URL="''" :button="'Send Request'" :classname="'bg-blue-600 text-white w-full  rounded-md py-2'"
           :class_h1="'text-center font-semibold	text-2xl'"
          >
          <div class="flex flex-col gap-5">
            <input type="text" class="w-full px-2 py-2 hover:drop-shadow-md border border-blue-400 hover:border-blue-400 rounded-md	" placeholder="Name" >
            <input type="text" class="w-full px-2 py-2 hover:drop-shadow-md border border-blue-400 hover:border-blue-400 rounded-md	" placeholder="Email" >
            <input type="text" class="w-full px-2 py-2 hover:drop-shadow-md border border-blue-400 hover:border-blue-400 rounded-md	" placeholder="Phone" >
            <input type="text" class="w-full px-2 py-2 hover:drop-shadow-md border border-blue-400 hover:border-blue-400 rounded-md	" placeholder="Please fill out this field." >


          </div>
        </Form1>
        <img :src="ele.img1" class="absolute bottom-[-90px] right-[-90px]" width="80">
        </div>
      </div>
    </div>
    </div>
  
  </div>
</template>
<script>
import { Form1 } from "@base";
import { Navbar_re_data } from "@config";
export default {
  data() {
    return {
      img: Navbar_re_data,
    };
  },
  components: {
    Form1,
  },
};
</script>