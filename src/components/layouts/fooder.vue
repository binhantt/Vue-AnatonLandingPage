<template>
  <div class="flex md:flex-row flex-col  items-center bg-[#10393b]">
    <div class="flex md:flex-row flex-col  px-[5vw] py-6 bg-[#efefff] md:w-1/2">
     <div class="flex flex-col justify-start md:w-[50%] gap-5">
        <div>
        <img :src="logo[0].logo1" alt="Logo" width="200" />
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-gray-700 mb-4">
          Join our subscribers list to get the instant latest news and special
          offers.
        </p>
        <div class="flex items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Your Email"
            class="border rounded-md p-2 flex-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-md nabar_hover_home_fooret "
          >
            Subscribe
          </button>
        </div>

       <div class="flex flex-col">
        <p class="text-gray-600  text-sm">
          Anaton WordPress Theme By
          <a href="#" class="text-blue-500 hover:underline">WordPressRiver</a>
        </p>
        <div class="flex justify-start mt-4 gap-4">
          <a href="#" class="text-blue-700 hover:text-blue-900">
            <i class="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" class="text-blue-500 hover:text-blue-700">
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" class="text-blue-700 hover:text-blue-900">
            <i class="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="grid md:grid-cols-3 grid-clos-1 gap-4 py-6 px-8 bg-[#10393b] text-white md:w-1/2 md:px-[10vh]">
      <div v-for="(section, index) in data" :key="index">
        <h4 class="font-bold mb-2">{{ section.title }}</h4>
        <ul v-if="section.items" class="space-y-1">
          <li v-for="(item, idx) in section.items" :key="idx">
            {{ item }}
          </li>
        </ul>
        <div v-else-if="section.details" class="space-y-2">
          <p><i class="fa-regular fa-house"></i><strong>Address:</strong> {{ section.details.address }}</p>
          <p> <i class="fa-regular fa-envelope"></i><strong>Email:</strong> {{ section.details.email }}</p>
          <p><i class="fa-regular fa-phone"></i><strong>Phone:</strong> {{ section.details.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { NavbarLogo, Footerdatamenu } from "@config";

export default {
  data() {
    return {
      logo: NavbarLogo,
      data: Footerdatamenu, 

    };
  },
};
</script>
  