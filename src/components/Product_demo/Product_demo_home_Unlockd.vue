<template>
  <div class=" md:py-0 py-3 px-0 px-4  flex justify-center items-cemter bg-bottom bg-[#efefff]">
    <div class="w-full h-full">
      <div class="flex justify-center items-center md:h-[80vh]">
        <div class="md:flex hidden justify-center items-center md:w-1/2 md:bg-[#efefff] bg-white">
          <div class="flex flex-col items-start justify-start w-[80%]">
            <div class="md:w-[80%]">
              <p class="text-xl font-semibold">
                Unlock a superior customer experience
              </p>
              <p class="text-base font-normal text-gray-400">
                Excellence projecting is devonshire dispatched remarkably on
                estimating. Side in so life past. Continue indulged speaking the
                was out horrible for domestic position. Seeing rather her you
                not esteem men settle genius excuse. Deal say over you age from.
                Comparison new ham melancholy son themselves.
              </p>
            </div>
            <div>
              <p class="text-xl font-semibold">Advanced Control and Privacy</p>
              <ul
                class="text-base font-normal text-gray-400 Product_demo_Unlockd"
              >
                <li class="relative">
                  <div>
                    Continued at up to zealously necessary breakfast. Surrounded
                    sir motionless she end literature. Gay direction neglected
                    but supported yet her.
                  </div>
                </li>
                <li class="relative">
                  <div>
                    Vulgar as hearts by garret. Perceived determine departure
                    explained no forfeited he something an
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center h-full bg-bottom bg-no-repeat  md:w-1/2 w-full"
          :style="{ backgroundImage: `url(${Image[0].bg})` }"
        >
          <div class="md:flex md:justify-start justify-center w-full relative ">
            <img
              class="absolute hidden md:flex	md:w-[60%] w-[80%] top-[2rem] left-[2rem]"
              :src="Image[0].img"
            />
            <Form1
              class="border-2 drop-shadow px-[2vw] h-[80%] py-10 rounded-md flex flex-col gap-4 bg-white   z-[200] "
              :title="'Go Unlmited'"
              :class_h1="'text-blue-500 font-semibold'"
              :button="'Premium Plan'"
              :classname="'bg-blue-500 text-white py-2 px-1  rounded-md w-[60%]'"
            >
              <div class="font-semibold md:flex hidden ">
                Unlock all features
                <br />
                to improve your performance
              </div>
              <div class="font-semibold md:hidden flex">
                Unlock all features to improve
                <br>
                your performance
              </div>
              <div class="flex items-center relative">
                <div class="relative w-[80%]">
                  <img class="rounded-full" :src="Image[0].user" width="50" />
                  <img
                    class="rounded-full absolute top-[0] left-[40px] z-[100]"
                    :src="Image[0].user3"
                    width="50"
                  />
                  <img
                    class="rounded-full absolute top-[0] left-[120px] z-[300]"
                    :src="Image[0].user2"
                    width="50"
                  />
                  <img
                    class="rounded-full absolute top-[0] left-[80px] z-[200]"
                    :src="Image[0].user1"
                    width="50"
                  />
                </div>
                <div class="md:w-[20%] w-0 absolute md:right-3 left-[40vw] z-[400] drop-shadow">
                  <i
                    class="fa-sharp fa-solid fa-plus px-4 border px-2 py-4 rounded-full bg-white text-blue-600"
                  ></i>
                </div>
              </div>
              <div class="font-semibold text-gray-400">(200k Active user)</div>
            </Form1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Product_demo_home_Unlockd_data } from "@config";
import { Form1 } from "@base";
export default {
  data() {
    return {
      Image: Product_demo_home_Unlockd_data,
    };
  },
  components: {
    Form1,
  },
};
</script>
