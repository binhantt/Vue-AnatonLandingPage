
<template>
  <nav class="w-full flex flex-col" v-for="(item, index) in bg" :key="index">
    <div
      class="h-[100vh] bg-bottom"
      :style="{ backgroundImage: `url(${item.bgurl1})` }"
    >
      <div class="w-full flex justify-center py-6">
        <div class="w-[80%]">
          <Navbar />
          <div class="py-[20vh] text-white flex">
            <div class="w-[40%] text-start">
              <p class="text-5xl px-2 font-extrabold">
                Manage your business by Anaton
              </p>
            </div>
            <div class="w-[60%] text-start">
              <p class="text-xl px-16 font-medium">
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret suitable he
                followed speedily perfectly to the minister.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[50vh] w-full flex justify-center items-center relative">
        <img :src="item.bgurl2" width="60%" class="drop-shadow-xl	">
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
        </div>
    </div>
    </div>
  </nav>
</template>

<script>
import { NavbarNg } from "@config";
import { Navbar } from "@layouts";
export default {
  data() {
    return {
      bg: NavbarNg,
    };
  },
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>