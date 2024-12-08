<template>
  <div
    class="md:p-4 bg-no-repeat md:bg-right bg-repeat-x flex justify-center"
    v-for="(ele, index) in Image"
    :key="index"
    :style="{ backgroundImage: `url(${ele.bg})` }"
  >
    <div class="md:w-[90%] w-full ">
      <div
        class="text-center md:py-[20vh] py-8 text-white gap-5 flex flex-col justify-center items-center font-semibold"
      >
        <div class="md:text-3xl text-xl">Included Capabilities</div>
        <div class="md:text-4xl text-2xl">Features designed for you</div>
      </div>
      <div class="flex justify-center py-10 px-5"> 
        <div class="md:p-4">
           <div class="md:grid md:grid-cols-2 flex flex-col md:gap-[10vh] gap-4 drop-shadow"> 
            <div
              class="flex md:flex-row flex-col items-center justify-between gap-10 bg-white rounded-xl md:p-10 py-10"
            >
              <div class="flex  flex-col md:gap-[20vh]">
                <img :src="ele.user" class="md:w-[300px] w-[100px]" />
                <div class="">
                  <i
                    class="fas fa-long-arrow-up Product_demo_home_detail-i text-6xl text-blue-600 hidden md:flex"
                  ></i>
                </div>
              </div>
              <div class="flex flex-col items-center gap-5 text-gray-500">
                <h1 class="text-2xl font-medium text-black">
                  Multiple Managers
                </h1>
                <p class="w-[80%] text-start">
                  Continue indulged speaking the was out horrible domestic
                  position. Seeing rather her you not esteem men settle genius
                  excuse. Deal say over you age from. Comparison new ham
                  melancholy son
                </p>
                <div class="flex">
                  <ul class="list-disc Product_demo_home_detail-ul">
                    <li>Capture everything</li>
                    <li>Organize your to-do list by workflow</li>
                    <li>Always include a deadline</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="flex md:flex-row flex-col items-center justify-between gap-10 bg-white rounded-xl p-10"
            >
              <div class="flex flex-col md:gap-[15vh] gap-3">
                <img :src="ele.img1" class="md:w-[300px] w-[150px]" />
                <div class="">
                  <i
                    class="fas fa-long-arrow-up Product_demo_home_detail-i text-6xl text-blue-600 md:flex hidden"
                  ></i>
                </div>
              </div>
              <div class="flex flex-col items-center gap-5 text-gray-500">
                <h1 class="text-2xl font-medium text-black">Customization</h1>
                <p class="md:w-[80%] w-full text-start">
                  Continue indulged speaking the was out horrible domestic
                  position. Seeing rather her you not esteem men settle genius
                  excuse. Deal say over you age from. Comparison new ham
                  melancholy son
                </p>
                <div class="flex">
                  <ul class="list-disc Product_demo_home_detail-ul">
                    <li>Organize your to-do list by workflow</li>
                    <li>Always include a deadline</li>
                    <li>Break big work into smaller tasks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="flex  md:flex-row flex-col items-center justify-between gap-10 bg-white rounded-xl p-10"
            >
              <div class="flex flex-col md:gap-[15vh] gap-3">
                <img :src="ele.img4" class="md:w-[300px] w-[150px]" />
                <div class="">
                  <i
                    class="fas fa-long-arrow-up Product_demo_home_detail-i text-6xl text-blue-600 hidden md:flex"
                  ></i>
                </div>
              </div>
              <div class="flex flex-col items-center gap-5 text-gray-500">
                <h1 class="text-2xl font-medium text-black">Customization</h1>
                <p class="w-[80%] text-start">
                  Continue indulged speaking the was out horrible domestic
                  position. Seeing rather her you not esteem men settle genius
                  excuse. Deal say over you age from. Comparison new ham
                  melancholy son
                </p>
                <div class="flex">
                  <ul class="list-disc Product_demo_home_detail-ul">
                    <li>Organize your to-do list by workflow</li>
                    <li>Always include a deadline</li>
                    <li>Break big work into smaller tasks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="flex  md:flex-row flex-col items-center justify-between gap-10 bg-white rounded-xl p-10"
            >
              <div class="flex flex-col md:gap-[15vh] gap-3">
                <img :src="ele.img3" class="md:w-[300px] w-[150px]" />
                <div class="">
                  <i
                    class="fas fa-long-arrow-up Product_demo_home_detail-i text-6xl text-blue-600 hidden md:flex"
                  ></i>
                </div>
              </div>
              <div class="flex items-center flex-col gap-5 text-gray-500">
                <h1 class="text-2xl font-medium text-black">
                  Extensions & Addons
                </h1>
                <p class="md:w-[80%] w-full text-start">
                  Continue indulged speaking the was out horrible domestic
                  position. Seeing rather her you not esteem men settle genius
                  excuse. Deal say over you age from. Comparison new ham
                  melancholy son
                </p>
                <div class="flex">
                  <ul class="list-disc Product_demo_home_detail-ul">
                    <li>Organize your to-do list by workflow</li>
                    <li>Always include a deadline</li>
                    <li>Break big work into smaller tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
import { Product_demo_home_detaildata } from "@config";
export default {
  data() {
    return {
      Image: Product_demo_home_detaildata,
    };
  },
};
</script>