
<template>
  <div class="md:flex hidden justify-between items-center text-white font-semibold	">
    <div class="" v-for="(item, index) in logo" :key="index"> 
        <!-- <img :src="item.logo1" width="200" /> -->
        <img :src="item.logo2"  width="200">
      </div>
      <div class="flex justify-center">
      <div class="px-4 py-2" v-for="(item, index) in data" :key="index">
          <div v-if="item.path">
            <a :href="item.path">{{ item.name }}</a>
          </div>
          <div v-else>
            <h3>{{ item.name }}</h3>
            <ul>
              <li
                class="hidden"
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
              >
                <a :href="child.path">{{ child.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     <div class="relative">
      <div class=" border border-gray-300 py-4 px-6 rounded-md nabar_hover_home ">
        <button class="z-2">Get Consultant</button>
      </div>
     </div>
    </div>
    <div class="md:hidden flex bg-white py-6 px-4 gap-10 items-center">
      <div class="text-4xl">
        <i class="fa-solid fa-bars"></i>
      </div>
        <div>
          <img :src="logo[0].logo1" width="200">
        </div>
    </div>
</template>

<script>
import { Navbardata ,NavbarLogo } from "@/config";


export default {
  data() {
    return {
      data: Navbardata,
      logo: NavbarLogo , 

    };
  },
};
</script>