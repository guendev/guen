<template>

  <div class="flex items-center md:px-10">

    <div class="w-full md:pr-12">

      <h1 class="md:text-[40px] semi:text-[35px] text-[30px] semi:leading-[45px] md:leading-[55px] capitalize font-semibold">
        Bringing <span>your ideas</span>
        <br /> to the world.
      </h1>

      <p class="text-[15px] text-gray-500 mt-3 mb-6 opacity-80">
        Blending stunning design with advanced technology to bring your website to life and achieve business success.
      </p>

      <button class="bg-gradient-to-r from-primary-500 to-primary-600 text-white lg:px-5 lg:py-2.5 px-4 py-2 flex justify-center items-center shadow-default shadow-primary-300">
        <span class="lg:text-[15px] text-[14px] font-semibold">
          Get Started
        </span>
      </button>

    </div>

    <div class="flex-shrink-0 w-[240px] md:w-[300px] flex items-center justify-end hidden semi:block">
      <div class="-my-12">
        <vue-lottie-player path="https://assets7.lottiefiles.com/private_files/lf30_i0cTdc.json" autoplay loop height="90%" width="100%"></vue-lottie-player>
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
h1 span {
}
</style>
