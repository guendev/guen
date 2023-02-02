<template>

  <div class="flex items-center px-10 ">

    <div class="w-full">
      <h1 class="text-[40px] leading-[55px] capitalize font-semibold">
        Bringing <span>your ideas</span>
        <br /> to the world.
      </h1>

      <p class="text-[15px] text-gray-500 mt-3 mb-7 opacity-80">
        Blending stunning design with advanced technology to bring your website to life and achieve business success.
      </p>

      <button class="bg-gradient-to-r from-primary-500 to-primary-600 text-white lg:px-5 lg:py-2.5 px-4 py-2 flex justify-center items-center shadow-default shadow-primary-300">
        <span class="lg:text-[15px] text-[14px] font-semibold">
          Get Started
        </span>
      </button>

    </div>

    <div class="flex-shrink-0 w-[350px] flex items-center justify-end">
      <vue-lottie-player path="https://assets7.lottiefiles.com/private_files/lf30_i0cTdc.json" autoplay loop height="300px" width="300px"></vue-lottie-player>
    </div>

  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
h1 span {
}
</style>
