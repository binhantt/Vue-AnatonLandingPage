
<template>
  <nav class="w-full flex flex-col bg-no-repeat	"  :style="{ backgroundImage: `url(${bg[0].bgurl1})` }">
 
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
      <div class="flex flex-col">
        <Product_demo_home />
      <Product_demo_home_function class="pb-[30vh]"/>
      <Product_demo_home_detail/>
      <Product_demo_home_edittor/>
      </div>
  </nav>
  
</template>

<script>
import { NavbarNg } from "@config";
import { Navbar } from "@layouts";
import { Product_demo_home ,Product_demo_home_function,Product_demo_home_detail ,Product_demo_home_edittor} from "@product_demo";

export default {
  data() {
    return {
      bg: NavbarNg,
    };
  },
  name: "HomeView",
  components: {
    Navbar,
    Product_demo_home,
    Product_demo_home_function,
    Product_demo_home_detail, 
    Product_demo_home_edittor
  },
};
</script>